import React from 'react';
import { Sparkles, Monitor, PlayCircle, BookOpen } from 'lucide-react';

interface HeaderProps {
  onOpenProjector: () => void;
  activeTab: 'games' | 'prompts' | 'timer';
  setActiveTab: (tab: 'games' | 'prompts' | 'timer') => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenProjector,
  activeTab,
  setActiveTab
}) => {
  return (
    <header className="border-b border-slate-800 bg-slate-900/95 sticky top-0 z-40 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Brand Zone (Single element title) */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="text-base sm:text-lg font-bold tracking-tight text-white block">
              IceBreaker Dosen Pro
            </span>
            <span className="text-[11px] text-slate-400 hidden sm:block">
              Energizer 5–10 Menit Kelas SPK & Audit Sistem Informasi
            </span>
          </div>
        </div>

        {/* Zone 2: Navigation Links (Clean text / tabs) */}
        <nav className="flex items-center gap-1 sm:gap-2 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60">
          <button
            onClick={() => setActiveTab('games')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'games'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Ide Game (3+2)</span>
          </button>

          <button
            onClick={() => setActiveTab('prompts')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'prompts'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Generator Aksi & Tim</span>
          </button>

          <button
            onClick={() => setActiveTab('timer')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'timer'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <PlayCircle className="w-3.5 h-3.5" />
            <span>Smart Timer</span>
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenProjector}
            className="px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-2 whitespace-nowrap active:scale-95"
            title="Tampilkan layar game & timer ke proyektor kelas"
          >
            <Monitor className="w-4 h-4" />
            <span className="hidden sm:inline">Layar Proyektor</span>
            <span className="sm:hidden">Proyektor</span>
          </button>
        </div>
      </div>
    </header>
  );
};
