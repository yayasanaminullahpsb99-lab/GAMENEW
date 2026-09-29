import React, { useState } from 'react';
import { Shuffle, Users, Sparkles, Copy, Check, LayoutGrid, Award, BookOpen } from 'lucide-react';
import { MOTION_PROMPTS, MotionPrompt } from '../data/motionPrompts';
import { audioSynthesizer } from '../utils/audio';

export const RandomizerToolkit: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [currentPrompt, setCurrentPrompt] = useState<MotionPrompt>(MOTION_PROMPTS[0]);
  const [copied, setCopied] = useState(false);
  const [teamGroupingMode, setTeamGroupingMode] = useState<'pairs' | 'rows5' | 'rows4'>('pairs');

  const categories = ['Semua', 'Kehidupan Mahasiswa', 'Aksi Konyol & Lucu', 'Hewan & Alam', 'Profesi Tak Biasa'];

  const filteredPrompts = selectedCategory === 'Semua'
    ? MOTION_PROMPTS
    : MOTION_PROMPTS.filter((p) => p.category === selectedCategory);

  const rollPrompt = () => {
    const pool = filteredPrompts.length > 0 ? filteredPrompts : MOTION_PROMPTS;
    const randomIndex = Math.floor(Math.random() * pool.length);
    setCurrentPrompt(pool[randomIndex]);
    audioSynthesizer.playCountdownTick();
  };

  const copyPrompt = () => {
    navigator.clipboard.writeText(`Aksi: ${currentPrompt.action}\nGerakan: ${currentPrompt.description}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Tool 1: Generator Aksi & Skenario Kocak */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PILIHAN SKENARIO UNTUK TEBAK GERAK / CERMIN</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Generator Skenario Gerakan Spontan
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Gunakan untuk dibisikkan ke orang paling belakang di game Tebak Gerak Berantai tanpa perlu pusing mikir ide.
            </p>
          </div>

          <button
            onClick={rollPrompt}
            className="px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 shrink-0"
          >
            <Shuffle className="w-4 h-4" />
            <span>Acak Skenario Lain</span>
          </button>
        </div>

        {/* Filter categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
              }}
              className={`px-3 py-1 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold'
                  : 'bg-slate-800 text-slate-400 hover:text-white border border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Prompt Showcase Card */}
        <div className="bg-slate-950/80 border border-amber-500/30 rounded-2xl p-6 relative overflow-hidden">
          <div className="flex items-center justify-between gap-3 text-xs text-slate-400 mb-3">
            <span className="font-semibold text-amber-400">{currentPrompt.category}</span>
            <span className="text-[11px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">
              Tingkat Keseruan: {currentPrompt.difficulty}
            </span>
          </div>

          <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
            “{currentPrompt.action}”
          </h4>

          <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-sm text-slate-300">
              <span className="font-semibold text-slate-200">Panduan Gerakan: </span>
              <span>{currentPrompt.description}</span>
            </div>

            <button
              onClick={copyPrompt}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors flex items-center gap-1.5 self-start sm:self-auto shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Salin Aksi</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Tool 2: Formasi & Pengelompokan 35 Mahasiswa */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
            <Users className="w-3.5 h-3.5" />
            <span>PANDUAN MANAJEMEN 35 MAHASISWA</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Skema Formasi Kelas (35 Mahasiswa Tatap Muka)
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Pilih formasi yang paling cocok dengan denah ruang kelas tanpa memindahkan meja dan kursi.
          </p>
        </div>

        {/* Grouping Mode Tabs */}
        <div className="flex items-center gap-2 bg-slate-800/60 p-1 rounded-xl border border-slate-700/60 max-w-md">
          <button
            onClick={() => setTeamGroupingMode('pairs')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors text-center ${
              teamGroupingMode === 'pairs'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Berpasangan (Cermin)
          </button>
          <button
            onClick={() => setTeamGroupingMode('rows5')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors text-center ${
              teamGroupingMode === 'rows5'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            5 Baris (Estafet)
          </button>
          <button
            onClick={() => setTeamGroupingMode('rows4')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors text-center ${
              teamGroupingMode === 'rows4'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            4 Baris Lebar
          </button>
        </div>

        {/* Breakdown Card */}
        {teamGroupingMode === 'pairs' && (
          <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-300 border-b border-slate-800 pb-3">
              <span className="font-semibold text-white">Formasi Berpasangan:</span>
              <span className="text-amber-400 font-bold">17 Pasang (34 Mahasiswa) + 1 Trio (3 Mahasiswa)</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Mahasiswa langsung berhadapan dengan teman di sebelah meja masing-masing (kiri-kanan). Untuk 1 orang yang tersisa tanpa pasangan, jadikan 1 kelompok berisi 3 orang di mana ada <strong>1 Pemimpin dan 2 Cermin Kembar</strong> (justru membuat suasana semakin lucu!).
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 text-center text-xs">
              {Array.from({ length: 17 }).map((_, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 rounded-lg p-2 text-slate-300">
                  <span className="block font-bold text-amber-400">Pasangan #{i + 1}</span>
                  <span className="text-[11px] text-slate-500">A & B (2 Orang)</span>
                </div>
              ))}
              <div className="bg-amber-500/10 border border-amber-500/40 rounded-lg p-2 text-amber-300 col-span-2 sm:col-span-1">
                <span className="block font-bold">Kelompok #18</span>
                <span className="text-[11px] text-amber-400/80">1 Boss + 2 Cermin</span>
              </div>
            </div>
          </div>
        )}

        {teamGroupingMode === 'rows5' && (
          <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-300 border-b border-slate-800 pb-3">
              <span className="font-semibold text-white">Formasi 5 Baris Banjar:</span>
              <span className="text-amber-400 font-bold">5 Baris × Tepat 7 Mahasiswa per Baris = 35 Mahasiswa</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Ini adalah skenario paling proporsional untuk 35 orang! Setiap deret bangku dari depan ke belakang otomatis menjadi 1 Tim dengan tepat 7 anggota. Sangat ideal untuk game <strong>Tebak Gerak Berantai</strong> karena estafet 7 orang memiliki panjang gelombang yang sempurna untuk gerakan bermutasi.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs">
              {['Baris A (Kiri)', 'Baris B', 'Baris C (Tengah)', 'Baris D', 'Baris E (Kanan)'].map((baris, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center space-y-1">
                  <span className="font-bold text-white block">{baris}</span>
                  <span className="text-amber-400 font-semibold block">7 Mahasiswa</span>
                  <span className="text-[10px] text-slate-500 block">Estafet 6 Operan</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {teamGroupingMode === 'rows4' && (
          <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-300 border-b border-slate-800 pb-3">
              <span className="font-semibold text-white">Formasi 4 Baris Lebar:</span>
              <span className="text-amber-400 font-bold">3 Baris @ 9 Mahasiswa + 1 Baris @ 8 Mahasiswa = 35 Orang</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Gunakan formasi ini jika ruangan kelas memiliki 4 deret meja besar.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
