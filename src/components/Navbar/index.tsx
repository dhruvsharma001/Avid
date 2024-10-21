"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useStore } from "zustand";
import { useUserStore } from "@/stores/user";
import { useWalletStore } from "@/stores/wallet";
// Firebase
import { auth } from "@/firebase/firebase";
// Hooks
import { useAppNavigation } from "@/hooks/navigation";
// NextUi Components
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarContent,
} from "@nextui-org/react";
// Components
import Logo from "../Logo";
import NavBarMenuItems from "./NavBarMenuItems";
// Icons
import { RxHamburgerMenu } from "react-icons/rx";
// Utils
import { cn } from "@/lib/utils";
import { NOTIFICATION_TEXTS } from "@/constants";

type TProps = {
  className?: string;
};
export default function Header(props: TProps) {
  const nav = useAppNavigation();

  const { user, setUser, isPro } = useStore(useUserStore, (state) => state);
  const { balance } = useStore(useWalletStore, (state) => state);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  /**
   * The `logout` function handles the process of logging out a user, including signing out, clearing
   * user data, and displaying notifications.
   * @param [navigateToHome=true] - The `navigateToHome` parameter in the `logout` function is a
   * boolean parameter with a default value of `true`. It determines whether the user should be
   * navigated to the home page after logging out. If `navigateToHome` is `true`, the user will be
   * redirected to the home
   */
  const logout = async (navigateToHome = true) => {
    setIsLoggingOut(true);

    try {
      auth.signOut();

      await fetch("/api/logout");

      setUser(null);

      if (navigateToHome) nav.navigateToHome();

      toast.success(NOTIFICATION_TEXTS.LOGOUT.LOGOUT_SUCCESS);
    } catch (error: any) {
      console.error("Error while logging out: ", error);

      toast.error(error.message);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <Navbar
      className={cn("bg-avid-main-400 md:px-14", props.className)}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      maxWidth="2xl"
    >
      {/* Desktop screens-------------------------------------------------- starts here */}
      <NavbarContent justify="start">
        <NavbarBrand>
          <Logo />
          {isPro && (
            <span className="text-avid-gray-300 text-lg border rounded p-2">
              PRO
            </span>
          )}
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden lg:flex gap-4" justify="end">
        <NavBarMenuItems
          uid={user?.uid}
          photoURL={user?.photoURL}
          displayName={user?.displayName}
          balance={balance}
          logout={logout}
          isLoggingOut={isLoggingOut}
        />
      </NavbarContent>
      {/* Desktop screens-------------------------------------------------- ends here */}

      {/* Mobile screens-------------------------------------------------- starts here */}
      <NavbarContent className="lg:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          icon={<RxHamburgerMenu className="text-2xl" />}
        />
      </NavbarContent>
      <NavbarMenu className="bg-avid-main-400 pb-5 border-t border-t-avid-gray-400">
        <NavBarMenuItems
          uid={user?.uid}
          photoURL={user?.photoURL}
          displayName={user?.displayName}
          balance={balance}
          logout={logout}
          isLoggingOut={isLoggingOut}
        />
      </NavbarMenu>
      {/* Mobile screens-------------------------------------------------- ends here */}
    </Navbar>
  );
}
