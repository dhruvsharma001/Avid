import { useSearchParams } from "next/navigation";
import { Button } from "@nextui-org/react";
import OtpInput from "react-otp-input";
import { MdReplay } from "react-icons/md";

type TProps = {
  otp: string;
  setOtp: (otp: string) => void;
  verifyOtp: (otp: string) => void;
  loginWithOtp: (phoneNumber: string) => void;
  loggingIn: boolean;
};
export default function OtpForm(props: TProps) {
  const searchParams = useSearchParams();
  const phoneNumber = "+" + searchParams.get("phoneNumber");

  return (
    <>
      <p className="text-[#94A6B7] text-sm md:text-base">
        Please enter OTP to login
      </p>
      <div className="mt-5 md:mt-7 mb-6">
        <OtpInput
          inputStyle={{
            width: "50px",
            height: "50px",
            borderRadius: "8px",
            background: "transparent",
          }}
          value={props.otp}
          onChange={props.setOtp}
          numInputs={6}
          renderSeparator={<span className="opacity-0">-</span>}
          renderInput={(props) => (
            <input
              {...props}
              className="w-24 h-24 rounded-xl p-3 border border-avid-gray-400"
            />
          )}
        />
      </div>

      {/* <p className="text-[#94A6B7] text-sm mb-2">
        This OTP will expire in{" "}
        <strong className="text-white">45 seconds</strong>
      </p> */}
      <Button
        className="text-base w-full"
        color="primary"
        radius="full"
        onClick={() => props.verifyOtp(props.otp)}
        disabled={props.loggingIn}
        isLoading={props.loggingIn}
      >
        Verify to login
      </Button>
      <div className="w-full flex justify-between mt-2">
        <p className="text-[#94A6B7] text-sm">Didn’t received OTP?</p>
        <div
          className="flex items-center gap-1 text-avid-accent text-sm cursor-pointer"
          onClick={() => props.loginWithOtp(phoneNumber)}
        >
          <MdReplay />
          <span>Resend</span>
        </div>
      </div>
    </>
  );
}
