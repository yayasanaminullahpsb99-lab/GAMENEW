import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Plus, Clock, Volume2, VolumeX } from 'lucide-react';
import { audioSynthesizer } from '../utils/audio';

interface ClassTimerProps {
  initialMinutes?: number;
  onTimeUp?: () => void;
  compact?: boolean;
}

export const ClassTimer: React.FC<ClassTimerProps> = ({
  initialMinutes = 5,
  compact = false
}) => {
  const [totalSeconds, setTotalSeconds] = useState(initialMinutes * 60);
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    setTimeLeft(initialMinutes * 60);
    setTotalSeconds(initialMinutes * 60);
    setIsRunning(false);
  }, [initialMinutes]);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          const next = prev - 1;
          if (soundEnabled && next <= 3 && next > 0) {
            audioSynthesizer.playCountdownTick();
          } else if (soundEnabled && next === 0) {
            audioSynthesizer.playFinishChime();
          }
          return next;
        });
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning, timeLeft, soundEnabled]);

  const toggleRunning = () => {
    if (!isRunning && timeLeft === 0) {
      setTimeLeft(totalSeconds);
    }
    if (!isRunning && soundEnabled) {
      audioSynthesizer.playStartChime();
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = (mins?: number) => {
    const newTotal = (mins ?? (totalSeconds / 60)) * 60;
    setTotalSeconds(newTotal);
    setTimeLeft(newTotal);
    setIsRunning(false);
  };

  const addOneMinute = () => {
    setTimeLeft((prev) => prev + 60);
    setTotalSeconds((prev) => prev + 60);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progressPercent = totalSeconds > 0 ? ((totalSeconds - timeLeft) / totalSeconds) * 100 : 0;

  if (compact) {
    return (
      <div className="flex items-center gap-3 bg-slate-800/90 border border-slate-700/80 rounded-xl px-3 py-2">
        <Clock className="w-4 h-4 text-amber-400 shrink-0" />
        <span className="font-mono text-base font-bold text-white tabular-nums tracking-wider">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
        <button
          onClick={toggleRunning}
          className={`p-1.5 rounded-lg text-slate-900 font-bold transition-all ${
            isRunning ? 'bg-amber-400 hover:bg-amber-300' : 'bg-emerald-400 hover:bg-emerald-300'
          }`}
          title={isRunning ? 'Jeda' : 'Mulai Timer'}
        >
          {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>
        <button
          onClick={() => resetTimer()}
          className="p-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors"
          title="Reset"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
          isRunning ? 'opacity-15 bg-radial from-amber-500/40 via-transparent to-transparent' : 'opacity-0'
        }`}
      />

      {/* Preset pills */}
      <div className="flex items-center gap-2 mb-6">
        {[3, 5, 7, 10].map((mins) => (
          <button
            key={mins}
            onClick={() => resetTimer(mins)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              totalSeconds === mins * 60 && !isRunning
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            {mins} Menit
          </button>
        ))}
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className={`p-1.5 rounded-lg border transition-colors ${
            soundEnabled
              ? 'border-amber-500/30 text-amber-400 bg-amber-500/10'
              : 'border-slate-700 text-slate-500 bg-slate-800'
          }`}
          title={soundEnabled ? 'Matikan Suara Timer' : 'Aktifkan Suara Timer'}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>
      </div>

      {/* Big Digital Display */}
      <div className="relative my-2 flex flex-col items-center">
        <div className="text-6xl sm:text-8xl font-black font-mono tracking-tight text-white tabular-nums drop-shadow-sm select-none">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
        <p className="text-xs text-slate-400 mt-2 font-medium">
          {isRunning ? 'Waktu Ice Breaking Sedang Berjalan' : timeLeft === 0 ? 'WAKTU HABIS! Segar Kembali!' : 'Siap Mulai Ice Breaking'}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-md bg-slate-800 h-2.5 rounded-full overflow-hidden my-6 border border-slate-700/50">
        <div
          className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Control Buttons */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleRunning}
          className={`px-6 py-3 rounded-xl font-bold text-sm sm:text-base flex items-center gap-2 transition-all active:scale-95 shadow-md ${
            isRunning
              ? 'bg-amber-500 hover:bg-amber-400 text-slate-950'
              : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
          }`}
        >
          {isRunning ? (
            <>
              <Pause className="w-5 h-5" />
              <span>Jeda Waktu</span>
            </>
          ) : (
            <>
              <Play className="w-5 h-5 fill-current" />
              <span>Mulai Ice Breaking</span>
            </>
          )}
        </button>

        <button
          onClick={() => resetTimer()}
          className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all active:scale-95 flex items-center gap-2 text-sm font-semibold"
          title="Reset timer ke awal"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset</span>
        </button>

        <button
          onClick={addOneMinute}
          className="px-3.5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all active:scale-95 flex items-center gap-1.5 text-sm font-semibold"
          title="Tambah 1 Menit"
        >
          <Plus className="w-4 h-4" />
          <span>1 Min</span>
        </button>
      </div>
    </div>
  );
};
