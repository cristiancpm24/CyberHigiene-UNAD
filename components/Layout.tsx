
import React from 'react';
import { LogOut, User, Info } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  username?: string;
  level?: number;
  onLogout?: () => void;
  onNavigateToInfo: () => void;
  onNavigateHome: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  username, 
  level, 
  onLogout, 
  onNavigateToInfo,
  onNavigateHome
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* UNAD Header: Primary Blue background */}
      <header className="bg-unad-primary text-white shadow-md sticky top-0 z-50 border-b-4 border-unad-accent">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity"
            onClick={onNavigateHome}
          >
            {/* Official UNAD Logo from reliable source with referrer policy fix */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Logo_unad.png" 
              alt="UNAD Logo" 
              referrerPolicy="no-referrer"
              className="h-10 w-auto bg-white rounded-md p-0.5"
            />
            <h1 className="text-xl font-bold tracking-tight hidden sm:block">CyberHigiene <span className="text-unad-accent">UNAD</span></h1>
          </div>
          
          <div className="flex items-center gap-4">
             <button 
              onClick={onNavigateToInfo}
              className="p-2 hover:bg-unad-dark/50 rounded-full transition-colors"
              title="Información del Proyecto"
            >
              <Info className="w-5 h-5" />
            </button>

            {username && (
              <>
                <div className="hidden md:flex items-center gap-3 bg-black/20 px-4 py-1.5 rounded-full border border-white/10">
                  <div className="bg-unad-accent p-1 rounded-full">
                    <User className="w-4 h-4 text-unad-primary" />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-sm font-semibold text-white">{username}</span>
                    <span className="text-xs text-blue-100">Nivel {level}</span>
                  </div>
                </div>
                <button 
                  onClick={onLogout}
                  className="p-2 hover:bg-red-600/80 rounded-full transition-colors text-white hover:text-white"
                  title="Cerrar Sesión"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-unad-dark text-white py-8 border-t border-unad-primary">
        <div className="container mx-auto px-4 text-center text-sm">
          <div className="flex justify-center items-center gap-2 mb-4">
             <div className="h-px bg-white/20 w-12"></div>
             <span className="text-unad-accent font-semibold">Universidad Nacional Abierta y a Distancia</span>
             <div className="h-px bg-white/20 w-12"></div>
          </div>
          <p className="text-blue-100">Proyecto de Ingeniería I - Grupo 202337120_236</p>
          <p className="mt-1 text-blue-200/60 text-xs">ECBTI - 2025</p>
        </div>
      </footer>
    </div>
  );
};
