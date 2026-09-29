import React, { useState } from 'react';
import { X, Copy, Check, MessageSquare, Clock, Users } from 'lucide-react';
import { IceBreakerGame } from '../types/game';
import { audioSynthesizer } from '../utils/audio';

interface TeleprompterModalProps {
  game: IceBreakerGame | null;
  onClose: () => void;
  onStartTimer: (minutes: number) => void;
}

export const TeleprompterModal: React.FC<TeleprompterModalProps> = ({
  game,
  onClose,
  onStartTimer
}) => {
  const [copied, setCopied] = useState(false);

  if (!game) return null;

  const fullScriptText = `[NASKAH ICE BREAKING: ${game.title.toUpperCase()}]
Durasi: ${game.duration} | Format: Tatap Muka (35 Mahasiswa)

1. PEMBUKAAN (Ucapkan dengan nada ceria & lantang):
${game.script.opening}

2. PENJELASAN ATURAN (Cepat & jelas):
${game.script.rules}

3. ABA-ABA EKSEKUSI (Beri hitungan dinamis):
${game.script.actionCue}

4. PENUTUP & APRESIASI:
${game.script.closing}
`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullScriptText);
    setCopied(true);
    audioSynthesizer.playCountdownTick();
    setTimeout(() => setCopied(false), 2200);
  };

  const minutesFromDuration = parseInt(game.duration) || 5;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white leading-tight">
                Naskah Langsung Ucap Dosen
              </h2>
              <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                <span className="text-amber-400 font-semibold">{game.title}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {game.duration}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  35 Mahasiswa
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyToClipboard}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors flex items-center gap-1.5 active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Naskah</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Teleprompter Script */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-200">
          {/* Card 1: Pembukaan */}
          <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4 sm:p-5">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 tracking-wider uppercase mb-2">
              <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px]">1</span>
              <span>Langkah 1: Ajakan Pembuka (Bangunkan Kelas)</span>
            </div>
            <p className="text-lg sm:text-xl font-medium text-white leading-relaxed font-sans bg-slate-950/40 p-4 rounded-lg border-l-4 border-amber-500">
              {game.script.opening}
            </p>
            <p className="text-xs text-slate-400 mt-2 italic">
              💡 Tips: Ucapkan dengan intonasi riang dan tubuh tegak. Minta semua mahasiswa benar-benar melepaskan tangan dari keyboard/handphone.
            </p>
          </div>

          {/* Card 2: Penjelasan Aturan */}
          <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4 sm:p-5">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 tracking-wider uppercase mb-2">
              <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[10px]">2</span>
              <span>Langkah 2: Penjelasan Aturan (Maksimal 45 Detik)</span>
            </div>
            <p className="text-lg sm:text-xl font-medium text-white leading-relaxed font-sans bg-slate-950/40 p-4 rounded-lg border-l-4 border-cyan-500">
              {game.script.rules}
            </p>
            <p className="text-xs text-slate-400 mt-2 italic">
              💡 Tips: Jangan jelaskan bertele-tele. Beri contoh 1 gerakan singkat agar langsung dimengerti.
            </p>
          </div>

          {/* Card 3: Aba-Aba Eksekusi */}
          <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4 sm:p-5">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 tracking-wider uppercase mb-2">
              <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">3</span>
              <span>Langkah 3: Aba-Aba Mulai & Putaran Twist</span>
            </div>
            <p className="text-lg sm:text-xl font-medium text-white leading-relaxed font-sans bg-slate-950/40 p-4 rounded-lg border-l-4 border-emerald-500">
              {game.script.actionCue}
            </p>
          </div>

          {/* Card 4: Penutup & Transisi ke Materi */}
          <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4 sm:p-5">
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 tracking-wider uppercase mb-2">
              <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px]">4</span>
              <span>Langkah 4: Apresiasi & Transisi Kembali ke Materi Kuliah</span>
            </div>
            <p className="text-base sm:text-lg font-medium text-slate-200 leading-relaxed font-sans bg-slate-950/40 p-4 rounded-lg border-l-4 border-indigo-500">
              {game.script.closing}
            </p>
            <p className="text-xs text-slate-400 mt-2">
              🎯 Hubungkan kembali ke topik: "Karena sirkulasi oksigen sudah segar kembali, mari kita telaah tahapan identifikasi risiko/evaluasi alternatif SPK berikut..."
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3.5 border-t border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-400">
            Didesain khusus untuk ritme kelas 35 mahasiswa tatap muka
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onStartTimer(minutesFromDuration);
              }}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Clock className="w-4 h-4" />
              <span>Mulai Timer {minutesFromDuration} Menit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
