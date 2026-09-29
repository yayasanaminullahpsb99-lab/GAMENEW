import React, { useState } from 'react';
import {
  Clock,
  Users,
  CheckCircle2,
  Copy,
  Check,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Monitor,
  Lightbulb,
  ShieldCheck
} from 'lucide-react';
import { IceBreakerGame } from '../types/game';
import { audioSynthesizer } from '../utils/audio';

interface GameCardProps {
  game: IceBreakerGame;
  index: number;
  onOpenTeleprompter: (game: IceBreakerGame) => void;
  onOpenProjectorForGame: (gameId: string) => void;
}

export const GameCard: React.FC<GameCardProps> = ({
  game,
  index,
  onOpenTeleprompter,
  onOpenProjectorForGame
}) => {
  const [isExpanded, setIsExpanded] = useState(index === 0);
  const [copied, setCopied] = useState(false);

  const fullScript = `[NASKAH DOSEN - ${game.title}]
1. Pembukaan: ${game.script.opening}
2. Aturan: ${game.script.rules}
3. Aba-aba: ${game.script.actionCue}
4. Penutup: ${game.script.closing}`;

  const handleCopyScript = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(fullScript);
    setCopied(true);
    audioSynthesizer.playCountdownTick();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:border-slate-700 transition-all duration-200">
      {/* Card Header */}
      <div className="p-5 sm:p-6 cursor-pointer select-none" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            {/* Unboxed metadata line with typographic bullet separators */}
            <div className="flex items-center gap-2 text-xs text-slate-400 flex-wrap">
              <span className="font-semibold text-amber-400">Ide #{index + 1}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {game.duration}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-slate-400" />
                {game.playerSetup}
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400 font-medium">{game.energyLevel}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {game.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {game.tagline}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 pt-1">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenTeleprompter(game);
              }}
              className="px-3 py-1.5 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1.5 active:scale-95 shadow-sm"
              title="Buka naskah bacaan ukuran besar untuk Dosen"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Naskah Dosen</span>
            </button>

            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label={isExpanded ? 'Tutup rincian' : 'Buka rincian'}
            >
              {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-800/80 space-y-6">
          {/* Quick Actions Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-800/40 p-3 rounded-xl border border-slate-800">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onOpenProjectorForGame(game.id)}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-colors"
              >
                <Monitor className="w-3.5 h-3.5 text-cyan-400" />
                <span>Tampilkan di Proyektor</span>
              </button>

              <button
                type="button"
                onClick={handleCopyScript}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Naskah Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Salin Naskah Dosen</span>
                  </>
                )}
              </button>
            </div>

            <div className="text-xs text-slate-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>100% Tanpa Alat · Aman untuk Kelas SPK & Audit</span>
            </div>
          </div>

          {/* Section: Cara Bermain (Langkah demi Langkah) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <span>Cara Bermain (Langkah demi Langkah)</span>
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {game.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-slate-950/40 border border-slate-800/80 rounded-xl p-3.5"
                >
                  <span className="w-6 h-6 rounded-full bg-slate-800 text-amber-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Naskah Singkat yang Bisa Langsung Diucapkan Dosen */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Naskah Langsung Ucap Dosen ke Mahasiswa</span>
              </h4>
              <button
                type="button"
                onClick={() => onOpenTeleprompter(game)}
                className="text-xs text-amber-400 hover:text-amber-300 font-medium underline underline-offset-4"
              >
                Buka Mode Layar Penuh
              </button>
            </div>

            <div className="bg-slate-950/70 border border-amber-500/20 rounded-xl p-4 sm:p-5 space-y-3 font-sans">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  1. Pembuka (Bangunkan Kelas):
                </span>
                <p className="text-sm sm:text-base text-slate-100 font-medium italic">
                  {game.script.opening}
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-800">
                <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider">
                  2. Instruksi Aturan:
                </span>
                <p className="text-sm sm:text-base text-slate-100 font-medium italic">
                  {game.script.rules}
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-800">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                  3. Aba-Aba Eksekusi & Twist:
                </span>
                <p className="text-sm sm:text-base text-slate-100 font-medium italic">
                  {game.script.actionCue}
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-800">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  4. Penutup & Apresiasi:
                </span>
                <p className="text-sm text-slate-300 italic">
                  {game.script.closing}
                </p>
              </div>
            </div>
          </div>

          {/* Dual Grid: Alasan Mengapa Cocok & Tips 35 Mahasiswa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Alasan Cocok */}
            <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-4 space-y-2.5">
              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Alasan Mengapa Cocok Mencairkan Suasana</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {game.whyItWorks.map((reason, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips untuk 35 Mahasiswa */}
            <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-4 space-y-2.5">
              <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Panduan Manajemen Kelas 35 Mahasiswa</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {game.tipsFor35Students.map((tip, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold shrink-0">💡</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
