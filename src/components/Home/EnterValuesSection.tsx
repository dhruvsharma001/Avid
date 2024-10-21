"use client";
import Image from "next/image";
import { useScroll } from "@/hooks/useScroll";
import MaxWidthWrapper from "@/app/MaxWidthWrapper";
import StepIndicator from "./StepIndicator";
import Step from "./Step";
import { cn } from "@/lib/utils";

export default function EnterValuesSection() {
  const { scrollY } = useScroll();

  return (
    <section className="bg-avid-main-500">
      <MaxWidthWrapper className="relative flex flex-col items-center">
        <StepIndicator step="02" />
        <Step className="mb-7 md:hidden" step="02" />
        <div className="text-center max-w-[400px] xl:mb-10">
          <h1 className="text-2xl md:text-5xl font-semibold">
            Customize Template
          </h1>
          <h6 className="mt-4 mb-7 text-avid-gray-300 md:text-lg">
            Fill in the required fields with your own text, images, audio and
            videos.
          </h6>
        </div>
        <div className="lg:-left-8 2xl:left-20 w-full h-full relative flex flex-col xl:flex-row justify-between items-center xl:items-stretch duration-300">
          <Image
            src="/assets/home/enter-values.png"
            width={750}
            height={445}
            className="relative z-20"
            alt="Enter values screen of the avid application"
            priority
          />
          <Image
            className="hidden lg:block selectDisable absolute -bottom-10 -left-12 z-10 blur-2xl rounded-full opacity-20"
            src="/assets/vectors/gradient.png"
            width={400}
            height={266}
            alt="Graphic image"
          />
          <div className="w-full flex flex-col gap-5 mt-10 xl:mt-0 justify-center xl:hidden duration-300">
            {Array(3)
              .fill(null)
              .map((elm, index) => (
                <ValueCard
                  key={index}
                  textValue="Title"
                  description="Enter your title here"
                />
              ))}
          </div>
          <div className="w-full hidden xl:flex relative z-50 flex-col justify-between">
            <ValueCard
              className="absolute -top-7 -left-16"
              textValue="Enter Location"
              description="Put in the location of your event"
            />
            <ValueCard
              className="absolute top-1/2 -translate-y-1/2 left-32 -mt-[14px]"
              textValue="Select Audio"
              description="Choose the audio for your video"
            />
            <ValueCard
              className="absolute bottom-0 left-20"
              textValue="Upload Image"
              description="Upload your image, video, audio and more"
            />
          </div>
        </div>
        <Image
          style={{
            transform: `translate(0, -${scrollY * 0.1}px)`,
          }}
          className="hidden lg:block selectDisable absolute bottom-0 left-10"
          src="/assets/vectors/purple-triangle.svg"
          width={60}
          height={66}
          alt="Graphic image"
        />
      </MaxWidthWrapper>
    </section>
  );
}

type TProps = {
  className?: string;
  textValue: string;
  description: string;
};
function ValueCard(props: TProps) {
  return (
    <div
      className={cn(
        "border border-avid-gray-400 rounded-xl p-4 bg-white/5 xl:text-center xl:max-w-sm w-full backdrop-blur-2xl",
        props.className
      )}
    >
      <h6 className="mb-2 font-semibold">{props.textValue}</h6>
      <p className="text-avid-gray-300">{props.description}</p>
    </div>
  );
}
