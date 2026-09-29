import React, { useState } from 'react';
import { X, Play, Pause, RotateCcw, Sparkles, Eye, EyeOff, Shuffle } from 'lucide-react';
import { IceBreakerGame } from '../types/game';
import { MOTION_PROMPTS, MotionPrompt } from '../data/motionPrompts';
import { audioSynthesizer } from '../utils/audio';

interface ProjectorModeProps {
  games: IceBreakerGame[];
  selectedGameId: string;
  onSelectGame: (id: string) => void;
  onClose: () => void;
}

export const ProjectorMode: React.FC<ProjectorModeProps> = ({
  games,
  selectedGameId,
  onSelectGame,
  onClose
}) => {
  const selectedGame = games.find((g) => g.id === selectedGameId) || games[0];

  // Timer state
  const durationMinutes = parseInt(selectedGame.duration) || 5;
  const [timeLeft, setTimeLeft] = useState(durationMinutes * 60);
  const [totalSeconds, setTotalSeconds] = useState(durationMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);

  // Motion prompt generator state (for secret charades or leader action)
  const [currentPrompt, setCurrentPrompt] = useState<MotionPrompt>(MOTION_PROMPTS[0]);
  const [revealPrompt, setRevealPrompt] = useState(false);

  // Reset timer if game changes
  React.useEffect(() => {
    const mins = parseInt(selectedGame.duration) || 5;
    setTimeLeft(mins * 60);
    setTotalSeconds(mins * 60);
    setIsRunning(false);
  }, [selectedGame]);

  // Tick interval
  React.useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          const next = prev - 1;
          if (next <= 3 && next > 0) {
            audioSynthesizer.playCountdownTick();
          } else if (next === 0) {
            audioSynthesizer.playFinishChime();
          }
          return next;
        });
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft]);

  const toggleTimer = () => {
    if (!isRunning && timeLeft === 0) {
      setTimeLeft(totalSeconds);
    }
    if (!isRunning) {
      audioSynthesizer.playStartChime();
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setTimeLeft(totalSeconds);
    setIsRunning(false);
  };

  const rollNewPrompt = () => {
    const randomIndex = Math.floor(Math.random() * MOTION_PROMPTS.length);
    setCurrentPrompt(MOTION_PROMPTS[randomIndex]);
    setRevealPrompt(false);
    audioSynthesizer.playCountdownTick();
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progressPercent = totalSeconds > 0 ? ((totalSeconds - timeLeft) / totalSeconds) * 100 : 0;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-white flex flex-col overflow-y-auto selection:bg-amber-500 selection:text-slate-950">
      {/* Top projector control bar */}
      <div className="px-6 py-4 border-b border-slate-800 bg-slate-900/90 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest font-mono text-amber-400 font-bold bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
            TAMPILAN PROYEKTOR KELAS
          </span>
          <span className="text-sm text-slate-400 hidden sm:inline">
            35 Mahasiswa · Tanpa Alat
          </span>
        </div>

        {/* Game switcher dropdown/tabs */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700/80">
            {games.slice(0, 3).map((g) => (
              <button
                key={g.id}
                onClick={() => onSelectGame(g.id)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  g.id === selectedGame.id
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {g.title.split(' ')[0]} {g.title.split(' ')[1] || ''}
              </button>
            ))}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors ml-2"
            title="Keluar dari Layar Proyektor (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Classroom Screen Content */}
      <div className="flex-1 max-w-6xl w-full mx-auto px-6 py-8 flex flex-col justify-between">
        {/* Game Title & Big Heading */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 tracking-wider uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ICE BREAKING ENERGIZER KELAS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight drop-shadow-sm">
            {selectedGame.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-medium">
            {selectedGame.tagline}
          </p>
        </div>

        {/* Center Grid: Step Instructions for Students & Big Timer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-center">
          {/* Instructions Box (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl">
            <h3 className="text-base font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <span>Aturan Main Singkat</span>
            </h3>

            <div className="space-y-4">
              {selectedGame.steps.slice(0, 4).map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-800 border border-amber-500/40 text-amber-300 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-base sm:text-lg text-slate-200 font-medium leading-snug">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Format: {selectedGame.playerSetup}</span>
              <span>Durasi: {selectedGame.duration}</span>
            </div>
          </div>

          {/* Big Projector Timer (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-xl">
            <div className="text-xs uppercase tracking-widest font-mono text-slate-400 mb-2">
              SISA WAKTU ICE BREAKING
            </div>

            <div className="text-7xl sm:text-8xl font-black font-mono tracking-tight text-amber-400 tabular-nums my-2 drop-shadow-md">
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </div>

            {/* Visual Progress Bar */}
            <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden my-4 border border-slate-700/50">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Timer Actions */}
            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={toggleTimer}
                className={`px-6 py-3 rounded-xl font-bold text-base flex items-center gap-2 transition-all active:scale-95 shadow-md ${
                  isRunning
                    ? 'bg-amber-400 hover:bg-amber-300 text-slate-950'
                    : 'bg-emerald-400 hover:bg-emerald-300 text-slate-950'
                }`}
              >
                {isRunning ? (
                  <>
                    <Pause className="w-5 h-5" />
                    <span>Jeda</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 fill-current" />
                    <span>Mulai Hitung</span>
                  </>
                )}
              </button>

              <button
                onClick={resetTimer}
                className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all active:scale-95"
                title="Reset Waktu"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Feature: Secret Motion Prompt Box (Especially for Tebak Gerak Berantai or Cermin Ajaib) */}
        {selectedGame.id === 'tebak-gerak-berantai' && (
          <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-5 mb-4 shadow-lg">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Skenario Gerakan Rahasia (Untuk Mahasiswa Paling Belakang)</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setRevealPrompt(!revealPrompt)}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors flex items-center gap-1.5"
                >
                  {revealPrompt ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{revealPrompt ? 'Sembunyikan Skenario' : 'Tampilkan Skenario'}</span>
                </button>

                <button
                  onClick={rollNewPrompt}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors flex items-center gap-1.5"
                >
                  <Shuffle className="w-3.5 h-3.5" />
                  <span>Acak Aksi Baru</span>
                </button>
              </div>
            </div>

            {revealPrompt ? (
              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 text-center animate-in fade-in duration-200">
                <p className="text-xl sm:text-2xl font-bold text-amber-300">
                  “{currentPrompt.action}”
                </p>
                <p className="text-sm text-slate-400 mt-1">
                  Gerakan: {currentPrompt.description}
                </p>
              </div>
            ) : (
              <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-4 text-center text-slate-500 text-sm">
                🔒 Skenario disembunyikan agar tim depan tidak curang. Klik "Tampilkan Skenario" saat mahasiswa belakang siap melihat!
              </div>
            )}
          </div>
        )}

        {/* Bottom Bar: Sound cues & quick shortcuts */}
        <div className="border-t border-slate-800/80 pt-4 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center gap-2">
            <span>Sound Cue Cepat:</span>
            <button
              onClick={() => audioSynthesizer.playStartChime()}
              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200"
            >
              🔔 Bel
            </button>
            <button
              onClick={() => audioSynthesizer.playBuzzer()}
              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200"
            >
              ⚠️ Buzzer
            </button>
            <button
              onClick={() => audioSynthesizer.playFanfare()}
              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200"
            >
              🎉 Fanfare
            </button>
          </div>

          <div>
            Tekan <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-200">Esc</kbd> untuk kembali ke menu dosen
          </div>
        </div>
      </div>
    </div>
  );
};
