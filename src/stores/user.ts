import { User } from "firebase/auth";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { STORE } from "@/constants";

type UserStore = {
  user: User | null;
  setUser: (user: User | null) => void;
  isPro: boolean;
  setIsPro: (isPro: boolean) => void;
  proValidity: Date | null;
  setProValidity: (proValidity: Date | null) => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      isPro: false,
      proValidity: null,
      setUser: (user: User | null) => set(() => ({ user })),
      setIsPro: (isPro: boolean) => set(() => ({ isPro })),
      setProValidity: (proValidity: Date | null) => set(() => ({ proValidity })),
    }),
    {
      name: STORE.STORAGE.USER, // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
