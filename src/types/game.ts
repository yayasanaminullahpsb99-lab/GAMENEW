export interface IceBreakerGame {
  id: string;
  title: string;
  tagline: string;
  duration: string; // e.g. "5 - 7 Menit"
  category: 'Refleks Fisik' | 'Gerak Berantai' | 'Konsentrasi Cepat' | 'Kreativitas Spontan';
  energyLevel: 'Tinggi (Bikin Melek)' | 'Sangat Tinggi (Tertawa Riuh)' | 'Sedang (Fokus & Segar)';
  playerSetup: string; // e.g. "Berpasangan (17 pasang)" atau "Per Baris Kursi (5 tim)"
  steps: string[];
  script: {
    opening: string;
    rules: string;
    actionCue: string;
    closing: string;
  };
  whyItWorks: string[];
  tipsFor35Students: string[];
  twistVariations: string[];
}
