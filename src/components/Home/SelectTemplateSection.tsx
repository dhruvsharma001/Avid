"use client";
import Image from "next/image";
import { useScroll } from "@/hooks/useScroll";
import MaxWidthWrapper from "@/app/MaxWidthWrapper";
import StepIndicator from "./StepIndicator";
import Step from "./Step";

export default function SelectTemplateSection() {
  const { scrollY } = useScroll();

  return (
    <section className="bg-avid-main-400">
      <MaxWidthWrapper className="relative flex flex-col items-center pb-0 md:pb-0">
        <StepIndicator step="01" />
        <Step className="mb-7 md:hidden" step="01" />
        <div className="text-center max-w-[400px]">
          <h1 className="text-2xl md:text-5xl font-semibold">
            Choose Template
          </h1>
          <h6 className="mt-4 mb-7 text-avid-gray-300 md:text-lg">
            Each template can have different styles and themes. Choose the one
            that best fits your needs.
          </h6>
        </div>
        <div className="relative z-30">
          <Image
            src="/assets/home/select-template.png"
            width={938}
            height={527}
            alt="Select template screen of the avid application"
            priority
          />
          <Image
            style={{
              transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.1}px)`,
            }}
            className="hidden lg:block absolute -top-72 -left-60"
            src="/assets/home/lady-listening.svg"
            width={574}
            height={685}
            alt="Graphic image"
          />
        </div>
        {/* Graphic images-------------------------------------------------- starts here */}
        <div className="hidden lg:block">
          <Image
            className="selectDisable absolute top-24 left-60 z-10"
            src="/assets/home/template-4.svg"
            width={300}
            height={382}
            alt="Graphic image"
          />
          <Image
            className="selectDisable absolute top-20 right-60 z-10"
            src="/assets/home/template-2.svg"
            width={300}
            height={363}
            alt="Graphic image"
          />
          <Image
            className="selectDisable absolute bottom-0 left-24 z-10"
            src="/assets/home/template-3.svg"
            width={200}
            height={311}
            alt="Graphic image"
          />
          <Image
            className="selectDisable absolute bottom-0 right-24 z-10"
            src="/assets/home/template-4.svg"
            width={200}
            height={254}
            alt="Graphic image"
          />
          <Image
            style={{
              transform: `translate(0, ${scrollY * 0.1}px)`,
            }}
            className="selectDisable absolute top-40 left-10"
            src="/assets/vectors/squiggle.svg"
            width={80}
            height={66}
            alt="Graphic image"
          />
          <Image
            style={{
              transform: `translate(-${scrollY * 0.05}px, 0)`,
            }}
            className="selectDisable absolute -bottom-10 right-10"
            src="/assets/vectors/circle.svg"
            width={60}
            height={60}
            alt="Graphic image"
          />
        </div>
        {/* Graphic images-------------------------------------------------- ends here */}
      </MaxWidthWrapper>
    </section>
  );
}
