"use client";
import { ReactNode, useEffect } from "react";
import { useStore } from "zustand";
// Firebase
import firestore from "@/firebase/db";
import { auth } from "@/firebase/firebase";
import { User } from "firebase/auth";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
// Stores
import { useUserStore } from "@/stores/user";
import { useWalletStore } from "@/stores/wallet";
// Utils
import { nextFetch } from "@/lib/fetch";
import { API_ROUTES, FIREBASE_CONSTANTS } from "@/constants";
import { Wallet } from "@/models/Wallet";

export default function PreLoader({ children }: { children: ReactNode }) {
  const { user: userStore, setUser } = useStore(useUserStore, (state) => state);
  const { setBalance } = useStore(useWalletStore, (state) => state);

  const setCountryIfNotSet = async () => {
    const localCountry = localStorage.getItem("country");

    if (!localCountry && typeof window != undefined) {
      const { data, status, ok } = await nextFetch(API_ROUTES.OTHER.META, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (ok) {
        if (data.data.country)
          localStorage.setItem("country", data.data.country);
      }
    }
  };

  useEffect(() => {
    setCountryIfNotSet();
    const unsubscribe = auth.onIdTokenChanged(async (user) => {
      if (user && !userStore) {
        // Set user to store
        setUser(user as User);
        // Set wallet balance to store--------------------------------------------------starts here
        const balanceSnap = await getDocs(
          query(
            collection(firestore, FIREBASE_CONSTANTS.COLLECTIONS.WALLETS),
            where("userId", "==", user.uid),
            limit(1)
          )
        );

        let wallet: Wallet;

        if (balanceSnap.docs) {
          wallet = {
            id: balanceSnap.docs[0].id,
            ...balanceSnap.docs[0].data(),
          } as Wallet;
        } else {
          wallet = {
            balance: 0,
          } as Wallet;
        }

        setBalance(wallet.balance);
        // Set wallet balance to store--------------------------------------------------ends here
      }
    });

    return () => unsubscribe();
  }, [setBalance, setUser, userStore]);

  return <>{children}</>;
}
