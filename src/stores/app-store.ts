import { create } from 'zustand';

export type Info = {
  healthCardNumber: string;
};

export type AppStore = {
  info: Info | null;
  setInfo: (info: Info | null) => void;
};

export const useAppStore = create<AppStore>((set) => ({
  info: null,
  setInfo: (info) => {
    set({ info });
  }
}));
