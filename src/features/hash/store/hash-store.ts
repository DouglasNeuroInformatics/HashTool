import { create } from 'zustand';

import type { HashInfo } from '../types';

export type HashStore = {
  hash: null | string;
  info: HashInfo | null;
  isLoading: boolean;
  setHash: (hash: null | string) => void;
  setInfo: (info: HashInfo | null) => void;
  setIsLoading: (isLoading: boolean) => void;
};

export const useHashStore = create<HashStore>((set) => ({
  hash: null,
  info: null,
  isLoading: false,
  setHash(hash) {
    set({ hash });
  },
  setInfo(info) {
    set({ info });
  },
  setIsLoading(isLoading) {
    set({ isLoading });
  }
}));
