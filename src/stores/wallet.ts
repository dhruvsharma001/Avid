import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { STORE } from "@/constants";

type WalletState = {
  balance: number;
  setBalance: (value: number) => void;
  incrementBalance: (amount: number) => void;
  decrementBalance: (amount: number) => void;
};

export const useWalletStore = create<WalletState>()(
  persist(
    (set) => ({
      balance: 0,
      setBalance: (value) => set(() => ({ balance: value })),
      incrementBalance: (amount) =>
        set((state) => ({ balance: state.balance + amount })),
      decrementBalance: (amount) =>
        set((state) => ({ balance: state.balance - amount })),
    }),
    {
      name: STORE.STORAGE.WALLET, // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
