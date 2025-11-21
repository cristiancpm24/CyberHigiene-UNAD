import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserState, INITIAL_USER_STATE, ModuleId } from '../types';
import { PASSING_SCORE, POINTS_PER_MODULE, BADGES, LEVEL_UP_THRESHOLD } from '../constants';

interface GameContextType {
  user: UserState;
  login: (username: string) => void;
  logout: () => void;
  completeQuiz: (moduleId: ModuleId, score: number) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserState>(INITIAL_USER_STATE);

  const login = (username: string) => {
    setUser({ ...INITIAL_USER_STATE, isLoggedIn: true, username });
  };

  const logout = () => {
    setUser(INITIAL_USER_STATE);
  };

  const completeQuiz = (moduleId: ModuleId, score: number) => {
    setUser(prev => {
      // Check if improved score
      const oldScore = prev.scores[moduleId];
      if (score <= oldScore && prev.completedModules.includes(moduleId)) {
        return prev;
      }

      const isPassing = score >= PASSING_SCORE;
      let newPoints = prev.totalPoints;
      const newCompleted = [...prev.completedModules];
      const newBadges = [...prev.badges];

      if (isPassing && !prev.completedModules.includes(moduleId)) {
        newPoints += POINTS_PER_MODULE;
        newCompleted.push(moduleId);
        
        // Assign specific badge
        if (moduleId === ModuleId.PASSWORDS) newBadges.push(BADGES.GUARD.id);
        if (moduleId === ModuleId.PHISHING) newBadges.push(BADGES.DETECTOR.id);
        if (moduleId === ModuleId.WIFI) newBadges.push(BADGES.SECURE.id);
      }

      // Check level up
      const newLevel = Math.floor(newPoints / LEVEL_UP_THRESHOLD) + 1;
      
      // Check Master badge
      if (newCompleted.length === 3 && !newBadges.includes(BADGES.MASTER.id)) {
        newBadges.push(BADGES.MASTER.id);
      }

      return {
        ...prev,
        scores: { ...prev.scores, [moduleId]: score },
        completedModules: newCompleted,
        totalPoints: newPoints,
        level: newLevel,
        badges: newBadges
      };
    });
  };

  return (
    <GameContext.Provider value={{ user, login, logout, completeQuiz }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};