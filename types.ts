export type Game = {
  title: string;
  category: string;
  platform: string;
  price: number;
  image: string;
  currency?: "EUR" | "USD" | "GBP";
  releaseDate: string;
  developer: string;
  publisher: string;
  pegi: 3 | 7 | 12 | 16 | 18;
  modes: string[];
  stock?: number;
  tags?: string[];
  languagesAudio?: string[];
  languagesText?: string[];
  readonly slug?: string;
};
