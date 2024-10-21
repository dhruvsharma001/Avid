"use client";
import { useUserStore } from "@/stores/user";
import { useWalletStore } from "@/stores/wallet";
import Navbar from "@/components/Navbar";
import MaxWidthWrapper from "../MaxWidthWrapper";
import BalanceCard from "@/components/Wallet/BalanceCard";
import TransactionList from "@/components/Wallet/TransactionList";
import Loader from "@/components/Loader";
import Titlebar from "@/components/reusables/Titlebar";

function Wallet() {
  const { user } = useUserStore((store) => store);
  const { balance } = useWalletStore((store) => store);

  return (
    <>
      <Navbar className="bg-avid-main-500" />
      <main className="bg-avid-main-500 min-h-screen">
        <MaxWidthWrapper className="py-3 md:py-3">
          <Titlebar title="Wallet" />
          <BalanceCard balance={balance} />
          {!user ? <Loader /> : <TransactionList userId={user.uid} />}
        </MaxWidthWrapper>
      </main>
    </>
  );
}

export default Wallet;
