
import React from 'react';
import { KeyRound, MailWarning, Wifi, CheckCircle2, ArrowRight } from 'lucide-react';
import { ModuleId } from '../types';

interface ModuleCardProps {
  id: ModuleId;
  title: string;
  description: string;
  imageUrl: string;
  iconName: string;
  isCompleted: boolean;
  score: number;
  onStart: (id: ModuleId) => void;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ id, title, description, imageUrl, iconName, isCompleted, score, onStart }) => {
  
  const getIcon = () => {
    switch (iconName) {
      case 'KeyRound': return <KeyRound className="w-8 h-8 text-white drop-shadow-md" />;
      case 'MailWarning': return <MailWarning className="w-8 h-8 text-white drop-shadow-md" />;
      case 'Wifi': return <Wifi className="w-8 h-8 text-white drop-shadow-md" />;
      default: return <KeyRound className="w-8 h-8 text-white drop-shadow-md" />;
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
      <div className="relative h-48 overflow-hidden">
        {/* Background Image */}
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay gradient */}
        <div className={`absolute inset-0 ${getBgColor()} opacity-80 group-hover:opacity-70 transition-opacity`}></div>
        
        {/* Content over image */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
          <div className="flex justify-between items-start">
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm border border-white/20">
              {getIcon()}
            </div>
            {isCompleted && (
              <div className="bg-white/95 text-unad-primary px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                <CheckCircle2 className="w-3 h-3" />
                {score}%
              </div>
            )}
          </div>
        </div>
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
