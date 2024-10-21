"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useAppNavigation } from "@/hooks/navigation";
import toast from "react-hot-toast";
// Firebase
import { auth } from "@/firebase/firebase";

// Hooks
import { useLogin } from "@/hooks/useLogin";
import { useUserStore } from "@/stores/user";
// Components
import Loader from "@/components/Loader";
import Logo from "@/components/Logo";
import MaxWidthWrapper from "../MaxWidthWrapper";
import OtpForm from "./OtpForm";
import LoginForm from "./LoginForm";
// Utils
import { cn } from "@/lib/utils";
import { NOTIFICATION_TEXTS } from "@/constants";

export default function Client() {
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("from");
  const page = searchParams.get("page");

  const { navigateToPage, navigateToOtpVerification } = useAppNavigation();

  const user = useUserStore((state) => state.user);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  const {
    loginWithGoogle,
    loginWithOtp,
    verifyOtp,
    otpSent,
    user: loggedInUser,
    loading: loggingIn,
    error: loginError,
  } = useLogin();

  useEffect(() => {
    if (user) {
      navigateToPage(redirectPath ?? "/");
    }
  }, [user, redirectPath, navigateToPage]);

  useEffect(() => {
    if (loginError) {
      toast.error(loginError);
    }

    if (otpSent) {
      toast.success(NOTIFICATION_TEXTS.LOGIN.OTP_SENT_MOBILE(phoneNumber));

      navigateToOtpVerification(phoneNumber);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginError, otpSent]);

  return (
    <section className="bg-avid-main-500 md:h-screen">
      <MaxWidthWrapper className="p-0 md:p-10">
        <div className="md:flex w-full duration-300">
          {/* Login Details-------------------------------------------------- starts here */}
          <div className="relative bg-[#3750684D] md:w-1/2 md:h-[calc(100vh-5rem)] max-h-[47rem] pt-8 pl-5 md:pt-16 md:pl-16 md:rounded-xl overflow-hidden duration-300">
            {/* Background assets-------------------------------------------------- starts here */}
            <Image
              className="selectDisable absolute -top-20 -right-20 opacity-20"
              src="/assets/login/glare.png"
              width={300}
              height={300}
              alt="Glare"
              aria-hidden
            />
            <Image
              className="selectDisable absolute -bottom-20 -left-20 opacity-20"
              src="/assets/login/glare.png"
              width={300}
              height={300}
              alt="Glare"
              aria-hidden
            />
            {/* Background assets-------------------------------------------------- ends here */}
            <div className="flex flex-col w-full h-full">
              <Image
                src="/assets/vectors/star.svg"
                width={26}
                height={26}
                alt="Colorful shining star"
              />
              <div className="mt-2">
                <h2 className="text-xl md:text-4xl font-semibold mr-5">
                  Create, publish, and automate interesting videos with AI.
                </h2>
                <p className="text-[#94A6B7] mt-2 md:mt-4 text-sm md:text-base mb-5 md:mb-24 mr-16">
                  In 3 step Process , Choose , Customize and Create.
                </p>
              </div>

              <div className="md:hidden flex justify-end">
                <Image
                  className="bg-left-top"
                  src="/assets/login/homescreen.png"
                  width={250}
                  height={250}
                  alt="Homescreen of the Blinkadz application"
                />
              </div>
              <div className="hidden md:flex justify-end">
                <Image
                  className="bg-left-top"
                  src="/assets/login/homescreen.png"
                  width={600}
                  height={600}
                  alt="Homescreen of the Blinkadz application"
                />
              </div>
            </div>
          </div>
          {/* Login Details-------------------------------------------------- ends here */}

          {/* Login FOrm-------------------------------------------------- starts here */}
          <div className="md:w-1/2 flex items-center justify-center duration-300">
            <div className="flex flex-col items-center justify-center px-5 py-7 max-w-sm">
              <Logo className={cn("mb-2 md:mb-7", user && "self-start")} />

              {user ? (
                <h2 className="text-xl md:text-3xl font-semibold text-avid-gray-200">
                  Looks like you are already signed in, taking you back!!
                  Refresh the page if not redirected.
                </h2>
              ) : (
                <>
                  <h2 className="text-xl md:text-3xl font-semibold mb-1">
                    Login to your account
                  </h2>
                  <div id="otp-button" />
                  {page === "verification" ? (
                    <OtpForm
                      otp={otp}
                      setOtp={setOtp}
                      verifyOtp={verifyOtp}
                      loggingIn={loggingIn}
                      loginWithOtp={loginWithOtp}
                    />
                  ) : (
                    <LoginForm
                      phoneNumber={phoneNumber}
                      setPhoneNumber={setPhoneNumber}
                      loggingIn={loggingIn}
                      loginWithGoogle={loginWithGoogle}
                      loginWithOtp={loginWithOtp}
                    />
                  )}
                </>
              )}
            </div>
          </div>
          {/* Login FOrm-------------------------------------------------- ends here */}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
