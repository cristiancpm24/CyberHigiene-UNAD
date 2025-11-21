
import React, { useState } from 'react';
import { GameProvider, useGame } from './components/GameContext';
import { Layout } from './components/Layout';
import { ModuleCard } from './components/ModuleCard';
import { MODULES } from './data/modules';
import { ModuleId, Question } from './types';
import { Trophy, BookOpen, Play, AlertCircle, CheckCircle, RotateCcw, Star } from 'lucide-react';
import { PASSING_SCORE, QUESTIONS_PER_QUIZ, BADGES } from './constants';

// -- Sub-components defined here to keep single-file structure where possible for simplicity --

// 1. LOGIN SCREEN
const LoginScreen = ({ onLogin, onInfo }: { onLogin: (name: string) => void, onInfo: () => void }) => {
  const [name, setName] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) onLogin(name);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-2xl shadow-xl border-t-4 border-unad-accent">
      <div className="text-center mb-8">
        <div className="w-32 h-auto mx-auto mb-6">
           <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Logo_unad.png" 
              alt="UNAD Logo" 
              className="w-full h-full object-contain"
            />
        </div>
        <h2 className="text-2xl font-bold text-unad-primary">Bienvenido Estudiante</h2>
        <p className="text-slate-500 mt-2">Ingresa tus credenciales para acceder al sistema de capacitación en ciberhigiene.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Usuario Institucional</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-unad-accent focus:border-unad-accent outline-none transition-all"
            placeholder="Ej: estudiante.unad"
            required
          />
        </div>
        <div>
           <label className="block text-sm font-medium text-slate-700 mb-1">Contraseña (Simulada)</label>
           <input 
             type="password" 
             className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-unad-accent focus:border-unad-accent outline-none transition-all"
             placeholder="••••••••"
           />
        </div>
        <button 
          type="submit" 
          className="w-full bg-unad-primary text-white py-3 rounded-lg font-bold hover:bg-unad-dark transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
        >
          Ingresar a la Plataforma
        </button>
      </form>
      <div className="mt-6 text-center">
         <button onClick={onInfo} className="text-sm text-unad-primary font-medium hover:underline hover:text-unad-dark">
           Ver información técnica y requisitos del proyecto
         </button>
      </div>
    </div>
  );
};

// 2. INFO REPORT SCREEN
const ReportInfoScreen = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h2 className="text-2xl font-bold text-unad-primary">Informe de Proyecto - Etapa 4</h2>
        <button onClick={onBack} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-700">
          Volver al Sistema
        </button>
      </div>
      
      <div className="prose prose-slate max-w-none">
        <h3 className="text-lg font-bold text-unad-primary">1. Resumen del Prototipo</h3>
        <p className="text-slate-700 mb-4">
          Este aplicativo web representa el <strong>Modelo Físico Inicial</strong> del sistema de ciberhigiene de la UNAD. 
          Es un prototipo funcional de alta fidelidad desarrollado con tecnologías web modernas (React/Tailwind) que simula 
          el flujo completo del usuario: autenticación, aprendizaje modular, evaluación formativa y gamificación.
        </p>

        <h3 className="text-lg font-bold text-unad-primary">2. Funcionamiento</h3>
        <p className="italic text-slate-600 mb-2 border-l-4 border-unad-primary pl-4 bg-unad-light py-2 rounded-r-lg">
          "El sistema opera como una Single Page Application (SPA). El estudiante inicia sesión validando sus credenciales (simulado). 
          Accede a un tablero principal que presenta tres módulos críticos: Contraseñas, Phishing y Wi-Fi. 
          Cada módulo despliega material educativo validado y finaliza con un cuestionario de 10 preguntas aleatorias. 
          El sistema evalúa en tiempo real; si el puntaje es ≥90%, se otorga una insignia y puntos, actualizando el nivel del usuario en el tablero de gamificación."
        </p>

        <h3 className="text-lg font-bold text-unad-primary">3. Análisis de Resultados</h3>
        <p className="italic text-slate-600 mb-2 border-l-4 border-green-400 pl-4 bg-slate-50 py-2 rounded-r-lg">
          "El prototipo demuestra que la integración de gamificación (insignias/niveles) incentiva la compleción de los módulos. 
          La interfaz limpia y modular facilita la navegación para estudiantes de primer semestre. 
          Como mejora futura, se sugiere integrar el sistema con el LDAP real de la universidad y añadir un modo 'Reto' multijugador."
        </p>

        <h3 className="text-lg font-bold text-unad-primary">4. Tomas del prototipo</h3>
        <ul className="list-disc pl-5 space-y-1 text-slate-700">
          <li><strong>Pantalla de Inicio:</strong> Captura del login para evidenciar el control de acceso.</li>
          <li><strong>Tablero Principal:</strong> Captura mostrando los 3 módulos y el perfil del usuario (Nivel 1).</li>
          <li><strong>Contenido Educativo:</strong> Captura de uno de los temas (ej. Phishing) mostrando el texto y tips.</li>
          <li><strong>Evaluación:</strong> Captura de una pregunta del cuestionario.</li>
          <li><strong>Resultados/Logros:</strong> Captura de la pantalla de 'Aprobado' con la insignia ganada.</li>
        </ul>
      </div>
    </div>
  );
};

// 3. MODULE CONTENT SCREEN
const ContentScreen = ({ moduleId, onStartQuiz, onBack }: { moduleId: ModuleId, onStartQuiz: () => void, onBack: () => void }) => {
  const module = MODULES[moduleId];
  return (
    <div className="max-w-4xl mx-auto">
      <button onClick={onBack} className="mb-4 text-slate-500 hover:text-unad-primary flex items-center gap-2 font-medium transition-colors">
        ← Volver al Tablero
      </button>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-200">
        <div className="relative h-64">
          <img src={module.imageUrl} alt={module.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-unad-primary via-unad-primary/80 to-transparent flex flex-col justify-end p-8">
             <h2 className="text-3xl font-bold mb-2 text-white flex items-center gap-3">
              {module.title}
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl">{module.description}</p>
          </div>
        </div>
        <div className="p-8">
          <div className="prose max-w-none">
            <p className="text-xl text-slate-800 mb-8 font-light leading-relaxed border-b pb-6">{module.content.intro}</p>
            <div className="grid gap-6 md:grid-cols-2 mb-8">
              {module.content.sections.map((section, idx) => (
                <div key={idx} className="bg-unad-light p-6 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-unad-primary mb-2">{section.title}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">{section.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <button 
              onClick={onStartQuiz}
              className="bg-gradient-to-r from-unad-primary to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 border border-blue-400/30"
            >
              <Play className="w-6 h-6 fill-current" />
              Comenzar Cuestionario Evaluativo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. QUIZ SCREEN
const QuizScreen = ({ moduleId, onComplete, onBack }: { moduleId: ModuleId, onComplete: (score: number) => void, onBack: () => void }) => {
  const module = MODULES[moduleId];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);
    if (currentIndex < module.questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      calculateScore(newAnswers);
    }
  };

  const calculateScore = (finalAnswers: number[]) => {
    let correctCount = 0;
    module.questions.forEach((q, idx) => {
      if (finalAnswers[idx] === q.correctAnswerIndex) correctCount++;
    });
    const calculatedScore = (correctCount / module.questions.length) * 100;
    setScore(calculatedScore);
    setShowResult(true);
    onComplete(calculatedScore); // Save to context immediately
  };

  const restart = () => {
    setCurrentIndex(0);
    setAnswers([]);
    setShowResult(false);
    setScore(0);
  };

  if (showResult) {
    const isPassing = score >= PASSING_SCORE;
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden text-center border border-slate-200">
        <div className={`p-10 ${isPassing ? 'bg-emerald-600' : 'bg-red-500'} text-white`}>
          {isPassing ? <Trophy className="w-24 h-24 mx-auto mb-4 drop-shadow-md" /> : <AlertCircle className="w-24 h-24 mx-auto mb-4 drop-shadow-md" />}
          <h2 className="text-3xl font-bold mb-2">{isPassing ? '¡Felicitaciones!' : 'Inténtalo de nuevo'}</h2>
          <p className="text-xl opacity-90 font-medium">Tu puntaje: {score}%</p>
        </div>
        <div className="p-8">
          <p className="text-slate-600 mb-8 text-lg">
            {isPassing 
              ? `Has aprobado el módulo de ${module.title}. Has recibido puntos y estás más cerca del siguiente nivel.`
              : `Necesitas un ${PASSING_SCORE}% para aprobar. Revisa el material e intenta nuevamente.`}
          </p>
          <div className="flex justify-center gap-4">
            {!isPassing && (
              <button onClick={restart} className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 rounded-lg font-bold text-slate-700 transition-colors">
                <RotateCcw className="w-5 h-5" /> Reintentar
              </button>
            )}
            <button onClick={onBack} className="flex items-center gap-2 px-6 py-3 bg-unad-primary hover:bg-unad-dark text-white rounded-lg font-bold transition-colors shadow-md">
              Volver al Tablero
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = module.questions[currentIndex];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6 flex justify-between items-center text-slate-600 text-sm font-bold">
        <span>Pregunta {currentIndex + 1} de {module.questions.length}</span>
        <span className="text-unad-primary">Progreso: {Math.round((currentIndex / module.questions.length) * 100)}%</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3 mb-8">
        <div className="bg-unad-accent h-3 rounded-full transition-all duration-300 shadow-sm" style={{ width: `${((currentIndex) / module.questions.length) * 100}%` }}></div>
      </div>
      
      <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-unad-primary">
        <h3 className="text-xl font-bold text-slate-900 mb-6">{question.question}</h3>
        <div className="space-y-3">
          {question.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-unad-accent hover:bg-yellow-50 transition-all group flex items-center"
            >
              <span className="w-8 h-8 flex-shrink-0 inline-flex items-center justify-center rounded-full bg-slate-100 text-slate-500 text-sm font-bold mr-4 group-hover:bg-unad-accent group-hover:text-unad-primary transition-colors">
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="text-slate-700 font-medium group-hover:text-slate-900">{opt}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// 5. DASHBOARD SCREEN
const DashboardScreen = ({ onSelectModule }: { onSelectModule: (id: ModuleId) => void }) => {
  const { user } = useGame();

  // Calculate progress for progress bar
  const completedCount = user.completedModules.length;
  const totalModules = 3;
  const progressPercent = (completedCount / totalModules) * 100;

  return (
    <div className="space-y-8">
      {/* Welcome & Stats Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-2xl font-bold text-unad-primary">Hola, {user.username}</h2>
          <p className="text-slate-500">Continúa tu camino hacia la seguridad digital.</p>
        </div>
        <div className="flex gap-6 text-center">
          <div className="bg-unad-light px-6 py-3 rounded-xl border border-blue-100">
            <span className="block text-2xl font-bold text-unad-primary">{user.level}</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Nivel</span>
          </div>
          <div className="bg-yellow-50 px-6 py-3 rounded-xl border border-yellow-100">
            <span className="block text-2xl font-bold text-yellow-600">{user.totalPoints}</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Puntos</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex justify-between text-sm font-medium mb-2">
          <span className="text-slate-700">Progreso General</span>
          <span className="text-unad-primary font-bold">{Math.round(progressPercent)}% Completado</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-4 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-unad-primary to-unad-accent h-4 rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(236,177,0,0.4)]" 
            style={{ width: `${progressPercent}%` }}
          >
             <div className="w-full h-full opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDAgTDAgMTAgTDEwIDIwIEwyMCAxMCBaIiBmaWxsPSIjZmZmIi8+PC9zdmc+')]"></div>
          </div>
        </div>
      </div>

      {/* Badges Section */}
      {user.badges.length > 0 && (
        <div className="bg-unad-dark text-white p-6 rounded-2xl shadow-md border-l-4 border-unad-accent">
          <h3 className="font-bold mb-4 flex items-center gap-2 text-unad-accent">
            <Star className="w-5 h-5 fill-current" />
            Insignias Obtenidas
          </h3>
          <div className="flex gap-4 flex-wrap">
            {user.badges.map(badgeId => {
              // Find badge details
              const badge = Object.values(BADGES).find(b => b.id === badgeId);
              if (!badge) return null;
              return (
                <div key={badgeId} className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2 text-sm backdrop-blur-sm border border-white/10 shadow-sm">
                   <span>🏆</span> <span className="font-medium">{badge.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(Object.values(MODULES) as any[]).map((module) => (
          <ModuleCard 
            key={module.id}
            id={module.id}
            title={module.title}
            description={module.description}
            imageUrl={module.imageUrl}
            iconName={module.iconName}
            isCompleted={user.completedModules.includes(module.id)}
            score={user.scores[module.id]}
            onStart={onSelectModule}
          />
        ))}
      </div>
    </div>
  );
};


// MAIN ORCHESTRATOR
const AppContent = () => {
  const { user, login, logout, completeQuiz } = useGame();
  const [view, setView] = useState<'LOGIN' | 'DASHBOARD' | 'CONTENT' | 'QUIZ' | 'INFO'>('LOGIN');
  const [activeModule, setActiveModule] = useState<ModuleId | null>(null);

  // Redirect if not logged in
  React.useEffect(() => {
    if (!user.isLoggedIn && view !== 'INFO') setView('LOGIN');
    if (user.isLoggedIn && view === 'LOGIN') setView('DASHBOARD');
  }, [user.isLoggedIn, view]);

  const handleLogin = (name: string) => {
    login(name);
    setView('DASHBOARD');
  };

  const handleSelectModule = (id: ModuleId) => {
    setActiveModule(id);
    setView('CONTENT');
  };

  const handleStartQuiz = () => {
    setView('QUIZ');
  };

  const handleQuizComplete = (score: number) => {
    if (activeModule) {
      completeQuiz(activeModule, score);
      // Stay on quiz screen to show result, user manually navigates back
    }
  };

  const handleBackToDash = () => {
    setView('DASHBOARD');
    setActiveModule(null);
  };

  return (
    <Layout 
      username={user.username} 
      level={user.level} 
      onLogout={logout}
      onNavigateToInfo={() => setView('INFO')}
      onNavigateHome={() => user.isLoggedIn ? setView('DASHBOARD') : setView('LOGIN')}
    >
      {view === 'LOGIN' && <LoginScreen onLogin={handleLogin} onInfo={() => setView('INFO')} />}
      {view === 'INFO' && <ReportInfoScreen onBack={() => user.isLoggedIn ? setView('DASHBOARD') : setView('LOGIN')} />}
      {view === 'DASHBOARD' && <DashboardScreen onSelectModule={handleSelectModule} />}
      {view === 'CONTENT' && activeModule && (
        <ContentScreen 
          moduleId={activeModule} 
          onStartQuiz={handleStartQuiz} 
          onBack={handleBackToDash} 
        />
      )}
      {view === 'QUIZ' && activeModule && (
        <QuizScreen 
          moduleId={activeModule} 
          onComplete={handleQuizComplete}
          onBack={handleBackToDash}
        />
      )}
    </Layout>
  );
};

export default function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}
