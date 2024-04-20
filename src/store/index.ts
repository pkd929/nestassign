// store/index.ts
import create from "zustand";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
}

interface UserState {
  selectedUser: User | null;
  setSelectedUser: (user: User | null) => void;
}

export const useStore = create<UserState>((set) => ({
  selectedUser: null,
  setSelectedUser: (user: User | null) => set({ selectedUser: user }),
}));
