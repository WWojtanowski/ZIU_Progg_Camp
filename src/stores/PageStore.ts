import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface PageState {
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
}

export const PageStore = create<PageState>()(
  persist((set) => ({
    isLoggedIn: false,
    logIn: () => set(() => ({ isLoggedIn: true })),
    logOut: () => set(() => ({ isLoggedIn: false })),
  }),
  {
    name: 'page-storage'
  }
));