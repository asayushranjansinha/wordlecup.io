import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set, get) => ({
      user: null,
      login: (name) => set({ user: name }),
      logout: () => set({ user: null }),
    }),
    {
      name: "user-name",
    }
  )
);
