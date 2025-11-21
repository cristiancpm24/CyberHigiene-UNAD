
export enum ModuleId {
  PASSWORDS = 'passwords',
  PHISHING = 'phishing',
  WIFI = 'wifi'
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface LearningModule {
  id: ModuleId;
  title: string;
  description: string;
  imageUrl: string; // Added image URL for visual prototype fidelity
  iconName: string;
  content: {
    intro: string;
    sections: { title: string; body: string }[];
  };
  questions: Question[];
}

export interface UserState {
  isLoggedIn: boolean;
  username: string;
  completedModules: ModuleId[];
  scores: Record<ModuleId, number>; // Score out of 100
  totalPoints: number;
  level: number;
  badges: string[];
}

export const INITIAL_USER_STATE: UserState = {
  isLoggedIn: false,
  username: '',
  completedModules: [],
  scores: {
    [ModuleId.PASSWORDS]: 0,
    [ModuleId.PHISHING]: 0,
    [ModuleId.WIFI]: 0
  } as Record<ModuleId, number>,
  totalPoints: 0,
  level: 1,
  badges: []
};
