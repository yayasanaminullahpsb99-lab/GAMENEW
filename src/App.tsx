import React, { useState } from 'react';
import { Header } from './components/Header';
import { GameCard } from './components/GameCard';
import { TeleprompterModal } from './components/TeleprompterModal';
import { ProjectorMode } from './components/ProjectorMode';
import { ClassTimer } from './components/ClassTimer';
import { RandomizerToolkit } from './components/RandomizerToolkit';
import { Soundboard } from './components/Soundboard';
import { ICE_BREAKER_GAMES } from './data/iceBreakerGames';
import { IceBreakerGame } from './types/game';
import { Monitor, Users, Clock, Coffee, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'games' | 'prompts' | 'timer'>('games');
  const [isProjectorOpen, setIsProjectorOpen] = useState(false);
  const [selectedGameForProjector, setSelectedGameForProjector] = useState<string>(ICE_BREAKER_GAMES[0].id);
  const [teleprompterGame, setTeleprompterGame] = useState<IceBreakerGame | null>(null);
  const [timerMinutes, setTimerMinutes] = useState<number>(5);

  const handleOpenTeleprompter = (game: IceBreakerGame) => {
    setTeleprompterGame(game);
  };

  const handleOpenProjectorForGame = (gameId: string) => {
    setSelectedGameForProjector(gameId);
    setIsProjectorOpen(true);
  };

  const handleStartTimerFromModal = (minutes: number) => {
    setTimerMinutes(minutes);
    setActiveTab('timer');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Bar Header */}
      <Header
        onOpenProjector={() => setIsProjectorOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Lecture Context Banner */}
        <section className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800/80 border border-slate-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-lg">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
              <span>Mata Kuliah: Sistem Pendukung Keputusan & Manajemen Risiko / Audit SI</span>
              <span aria-hidden="true">·</span>
              <span>Kelas Tatap Muka</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Anti-Ngantuk & Energizer 5–10 Menit Tanpa Alat
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Koleksi ide ice breaking fisik dan spontan yang dirancang khusus untuk memecah rasa lesu <strong>35 mahasiswa</strong> di sela materi perkuliahan yang padat. Tanpa mikir rumus, murni menyegarkan sirkulasi darah dan memicu tawa!
            </p>

            {/* Quick Badges / Specs (Clean unboxed metadata) */}
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400 flex-wrap">
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <Clock className="w-4 h-4 text-amber-400" />
                Maksimal 5–10 Menit
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <Users className="w-4 h-4 text-cyan-400" />
                35 Mahasiswa Serentak
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <Coffee className="w-4 h-4 text-emerald-400" />
                100% Tanpa Alat
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-300 font-medium">
                Tawa Cepat & Refreshing
              </span>
            </div>
          </div>

          <div className="mt-6 sm:mt-0 sm:absolute sm:right-6 sm:bottom-6 flex items-center gap-2">
            <button
              onClick={() => setIsProjectorOpen(true)}
              className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-95 flex items-center gap-2"
            >
              <Monitor className="w-4 h-4" />
              <span>Buka Layar Proyektor</span>
            </button>
          </div>
        </section>

        {/* Quick Soundboard for classroom cues */}
        <Soundboard />

        {/* Tab 1: Game Library */}
        {activeTab === 'games' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  3 Ide Game Ice Breaking Rekomendasi Utama
                </h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  Lengkap dengan langkah singkat, naskah langsung ucap dosen, dan alasan ilmiah mencairkan suasana.
                </p>
              </div>

              <div className="text-xs text-slate-400">
                Pilih game untuk melihat langkah & naskah
              </div>
            </div>

            {/* The 3 Main Requested Games */}
            <div className="space-y-4">
              {ICE_BREAKER_GAMES.slice(0, 3).map((game, idx) => (
                <GameCard
                  key={game.id}
                  game={game}
                  index={idx}
                  onOpenTeleprompter={handleOpenTeleprompter}
                  onOpenProjectorForGame={handleOpenProjectorForGame}
                />
              ))}
            </div>

            {/* Bonus Games Section */}
            <div className="pt-8 border-t border-slate-800/80 space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>OPSI TAMBAHAN / CADANGAN</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  2 Game Alternatif Cepat (3-5 Menit)
                </h3>
              </div>

              <div className="space-y-4">
                {ICE_BREAKER_GAMES.slice(3).map((game, idx) => (
                  <GameCard
                    key={game.id}
                    game={game}
                    index={idx + 3}
                    onOpenTeleprompter={handleOpenTeleprompter}
                    onOpenProjectorForGame={handleOpenProjectorForGame}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Scenario Prompts & Team Grouping */}
        {activeTab === 'prompts' && <RandomizerToolkit />}

        {/* Tab 3: Interactive Class Timer */}
        {activeTab === 'timer' && (
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-white">Smart Classroom Countdown Timer</h2>
              <p className="text-sm text-slate-400">
                Gunakan timer ini untuk menjaga agar sesi ice breaking tetap disiplin di batas 5-10 menit sebelum kembali ke materi kuliah.
              </p>
            </div>
            <ClassTimer initialMinutes={timerMinutes} />
          </div>
        )}
      </main>

      {/* Teleprompter / Verbatim Script Modal */}
      {teleprompterGame && (
        <TeleprompterModal
          game={teleprompterGame}
          onClose={() => setTeleprompterGame(null)}
          onStartTimer={handleStartTimerFromModal}
        />
      )}

      {/* Fullscreen Classroom Projector Mode */}
      {isProjectorOpen && (
        <ProjectorMode
          games={ICE_BREAKER_GAMES}
          selectedGameId={selectedGameForProjector}
          onSelectGame={(id) => setSelectedGameForProjector(id)}
          onClose={() => setIsProjectorOpen(false)}
        />
      )}

      {/* Clean Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 mt-12 text-center text-xs text-slate-400">
        <p>IceBreaker Dosen Pro · Toolkit Pengusir Kantuk Kelas Tatap Muka Perguruan Tinggi</p>
      </footer>
    </div>
  );
}
