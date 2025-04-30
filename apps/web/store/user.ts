import { create } from 'zustand';

type User = {
  id: string;
  name: string;
  email: string;
  roles: string[];
};

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));