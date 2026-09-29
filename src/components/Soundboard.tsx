import React from 'react';
import { Bell, Flame, AlertCircle, Award, Volume2 } from 'lucide-react';
import { audioSynthesizer } from '../utils/audio';

export const Soundboard: React.FC = () => {
  return (
    <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3 flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
        <Volume2 className="w-4 h-4 text-amber-400" />
        <span>Sound Cue Kelas:</span>
      </div>

      <div className="flex items-center gap-1.5 flex-wrap">
        <button
          onClick={() => audioSynthesizer.playStartChime()}
          className="px-2.5 py-1 text-xs bg-slate-700/70 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg border border-slate-600/50 transition-colors flex items-center gap-1.5 active:scale-95"
          title="Bunyikan bel mulai"
        >
          <Bell className="w-3 h-3 text-amber-400" />
          <span>Bel Mulai</span>
        </button>

        <button
          onClick={() => audioSynthesizer.playBuzzer()}
          className="px-2.5 py-1 text-xs bg-slate-700/70 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg border border-slate-600/50 transition-colors flex items-center gap-1.5 active:scale-95"
          title="Bunyikan buzzer salah/eliminasi"
        >
          <AlertCircle className="w-3 h-3 text-rose-400" />
          <span>Buzzer "Tet-tot"</span>
        </button>

        <button
          onClick={() => audioSynthesizer.playCountdownTick()}
          className="px-2.5 py-1 text-xs bg-slate-700/70 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg border border-slate-600/50 transition-colors flex items-center gap-1.5 active:scale-95"
          title="Bunyikan tick hitung mundur"
        >
          <Flame className="w-3 h-3 text-cyan-400" />
          <span>Tick Detik</span>
        </button>

        <button
          onClick={() => audioSynthesizer.playFanfare()}
          className="px-2.5 py-1 text-xs bg-slate-700/70 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg border border-slate-600/50 transition-colors flex items-center gap-1.5 active:scale-95"
          title="Bunyikan tepuk tangan / fanfare kemenangan"
        >
          <Award className="w-3 h-3 text-emerald-400" />
          <span>Fanfare Menang</span>
        </button>
      </div>
    </div>
  );
};
