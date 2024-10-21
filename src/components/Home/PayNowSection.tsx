"use client";
import Image from "next/image";
import { useScroll } from "@/hooks/useScroll";
import MaxWidthWrapper from "@/app/MaxWidthWrapper";
import StepIndicator from "./StepIndicator";
import Step from "./Step";

export default function PayNowSection() {
  const { scrollY } = useScroll();

  return (
    <section className="bg-avid-main-400">
      <MaxWidthWrapper className="relative flex flex-col items-center pb-0 md:pb-0 overflow-hidden">
        <StepIndicator step="03" />
        <Step className="mb-7 md:hidden" step="03" />
        <div className="text-center max-w-[400px]">
          <h1 className="text-2xl md:text-5xl font-semibold">Create Video</h1>
          <h6 className="mt-4 mb-7 text-avid-gray-300 md:text-lg">
            Pay a small amount and download it instantly.
          </h6>
        </div>
        <Image
          src="/assets/home/pay-now.png"
          width={951}
          height={507}
          className="relative z-20"
          alt="Select template screen of the avid application"
        />

        {/* Graphic images-------------------------------------------------- starts here */}
        <div className="hidden lg:block">
          <Image
            className="hidden lg:block selectDisable absolute top-0 right-0 z-10 blur-2xl rounded-full opacity-5"
            src="/assets/vectors/gradient.png"
            width={1000}
            height={665}
            alt="Graphic image"
          />
          <Image
            style={{
              transform: `translate(-${scrollY * 0.05}px, -${
                scrollY * 0.05
              }px)`,
            }}
            className="hidden lg:block selectDisable absolute bottom-24 right-10 rotate-90"
            src="/assets/vectors/ellipse.svg"
            width={60}
            height={64}
            alt="Graphic image"
          />
        </div>
        {/* Graphic images-------------------------------------------------- ends here */}
      </MaxWidthWrapper>
    </section>
  );
}
