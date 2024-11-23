import { create } from "zustand";
import { IUser } from "@/models/IUser";

interface UserState {
  user: IUser | null;
  setUser: (data: IUser) => void;
}

export const useUserStore = create<UserState>()((set) => ({
  user: null,
  setUser: (data) => set((state) => ({ user: data })),
}));
