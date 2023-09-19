import { create } from "zustand";

interface ScoreStore {
  score: number;
  showResult: boolean;
  incrementScore: () => void;
  resetScore: () => void;
  setShowResult: (value: boolean) => void;
}

export const useScore = create<ScoreStore>()((set) => ({
  score: 0,
  showResult: false,
  incrementScore: () =>
    set((state) => ({
      score: state.score + 1,
    })),
  resetScore: () =>
    set(() => ({
      score: 0,
    })),
  setShowResult: (value) =>
    set(() => ({
      showResult: value,
    })),
}));
