import React from 'react';
import { KeyRound, MailWarning, Wifi, CheckCircle2, ArrowRight } from 'lucide-react';
import { ModuleId } from '../types';

interface ModuleCardProps {
  id: ModuleId;
  title: string;
  description: string;
  iconName: string;
  isCompleted: boolean;
  score: number;
  onStart: (id: ModuleId) => void;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ id, title, description, iconName, isCompleted, score, onStart }) => {
  
  const getIcon = () => {
    switch (iconName) {
      case 'KeyRound': return <KeyRound className="w-8 h-8 text-white" />;
      case 'MailWarning': return <MailWarning className="w-8 h-8 text-white" />;
      case 'Wifi': return <Wifi className="w-8 h-8 text-white" />;
      default: return <KeyRound className="w-8 h-8 text-white" />;
    }
  };

  const getBgColor = () => {
    switch (id) {
      case ModuleId.PASSWORDS: return 'bg-unad-primary'; // Corporate Blue
      case ModuleId.PHISHING: return 'bg-orange-500'; // Warning Orange
      case ModuleId.WIFI: return 'bg-emerald-600'; // Safe Green
      default: return 'bg-slate-600';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full group hover:border-unad-primary/30">
      <div className={`${getBgColor()} p-6 flex justify-between items-start relative overflow-hidden`}>
        {/* Background pattern effect */}
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        
        <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm relative z-10">
          {getIcon()}
        </div>
        {isCompleted && (
          <div className="bg-white/90 text-unad-primary px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm z-10">
            <CheckCircle2 className="w-3 h-3" />
            {score}%
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-unad-primary transition-colors">{title}</h3>
        <p className="text-slate-600 text-sm mb-6 flex-grow">{description}</p>
        
        <button 
          onClick={() => onStart(id)}
          className="w-full py-2.5 px-4 rounded-lg bg-unad-primary text-white font-medium text-sm hover:bg-unad-dark transition-colors flex items-center justify-center gap-2 group-hover:shadow-lg"
        >
          {isCompleted ? 'Repasar Módulo' : 'Iniciar Módulo'}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};