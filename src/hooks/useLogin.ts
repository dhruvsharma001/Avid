import { useState } from "react";
import { useRouter } from "next/navigation";
import { doc, setDoc } from "firebase/firestore";
import {
  GoogleAuthProvider,
  RecaptchaVerifier,
  User,
  getAdditionalUserInfo,
  signInWithPhoneNumber,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/firebase/firebase";
import firestore from "@/firebase/db";
import { getErrorText } from "@/lib/utils";
import { API_ROUTES, DEFAULT_COUNTRY } from "@/constants";
import { nextFetch } from "@/lib/fetch";
import { loginUserOnServer } from "@/lib/refreshServerCookie";
import { useUserStore } from "@/stores/user";

export function useLogin() {
  const router = useRouter();

  const [user, setUser] = useState<User>();
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setIsPro, setProValidity } = useUserStore(state => state)
  async function createNewUser(user: User) {
    try {
      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        phoneNumber: user.phoneNumber,
        providerId: user.providerId,
        creationTime: user.metadata.creationTime,
        lastSignInTime: user.metadata.lastSignInTime,
        emailVerified: user.emailVerified,

      }
      const res = await nextFetch(API_ROUTES.AUTH.CREATE_USER, {
        method: "POST",
        body: JSON.stringify({ user: userData }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (!res.ok) {
        throw new Error(res.data.error);
      }


    } catch (e) {
      throw new Error(getErrorText(e));
    }
  }

  async function loginWithGoogle() {
    const provider = new GoogleAuthProvider();

    setLoading(true);
    setError(null);

    try {
      const result = await signInWithPopup(auth, provider);

      setUser(result.user);

      const additionalUserInfo = getAdditionalUserInfo(result);

      if (additionalUserInfo?.isNewUser) {
        await createNewUser(result.user);
      }
      const resp = await loginUserOnServer();
      const userData = resp.data.decodedToken
      setIsPro(userData.isPro)
      setProValidity(userData.proValidity)
      setUser(userData)
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function loginWithOtp(phoneNumber: string) {
    setLoading(true);
    setError(null);
    setOtpSent(false);

    try {
      await verifyCaptcha();

      const appVerifier = window.recaptchaVerifier;

      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );

      window.confirmationResult = confirmationResult;

      setOtpSent(true);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function verifyOtp(otp: string) {
    setLoading(true);
    setError(null);
    setOtpSent(false);

    try {
      if (!window.confirmationResult) {
        setError("Session expired");
        router.push("/login");
        return;
      }

      const result = await window.confirmationResult.confirm(otp);

      setUser(result.user);
      await loginUserOnServer();
      const additionalUserInfo = getAdditionalUserInfo(result);

      if (additionalUserInfo?.isNewUser) {
        await createNewUser(result.user);
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function verifyCaptcha() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "otp-button", {
        size: "invisible",
        callback: async (response: any) => { },
      });
    }
  }

  return {
    loginWithGoogle,
    loginWithOtp,
    verifyOtp,
    user,
    otpSent,
    loading,
    error,
  };
}
