import Link from "next/link";
import PhoneInput from "react-phone-number-input";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@nextui-org/react";
import "react-phone-number-input/style.css";

type TProps = {
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
  loginWithOtp: (phoneNumber: string) => void;
  loginWithGoogle: () => void;
  loggingIn: boolean;
};
export default function LoginForm(props: TProps) {
  return (
    <>
      <p className="text-[#94A6B7] text-sm md:text-base">
        Please enter your Phone number to login
      </p>
      <PhoneInput
        className="mt-5 md:mt-7 mb-6 w-full"
        international
        countryCallingCodeEditable={false}
        defaultCountry="IN"
        placeholder="Phone Number"
        value={props.phoneNumber}
        onChange={props.setPhoneNumber}
      />
      <Button
        className="text-base w-full"
        color="primary"
        radius="full"
        onClick={() => props.loginWithOtp(props.phoneNumber)}
        disabled={props.loggingIn}
        isLoading={props.loggingIn}
      >
        Get OTP
      </Button>
      <Button
        className="w-full bg-white text-black text-lg mt-4 mb-6"
        radius="full"
        onClick={() => props.loginWithGoogle()}
        disabled={props.loggingIn}
        isLoading={props.loggingIn}
      >
        <FcGoogle /> Login with Google
      </Button>
      <p className="text-[#94A6B7] text-sm">
        By creating an account, you agree to our{" "}
        <Link className="text-avid-accent" href="/terms-and-conditions">
          Terms of Service
        </Link>{" "}
        and
        <Link className="text-avid-accent" href="privacy-policy">
          {" "}
          Privacy Policy
        </Link>
      </p>
    </>
  );
}
