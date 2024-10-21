"use client";
import Image from "next/image";
// Hooks
import { useScroll } from "@/hooks/useScroll";
// Components
import { Button, useDisclosure } from "@nextui-org/react";
import MaxWidthWrapper from "@/app/MaxWidthWrapper";

import CustomDevelopmentModal from "./modals/CustomDevelopmentModal";
// Utils
import { carouselImages } from "./helpers";

export default function CreateCustomSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { scrollY } = useScroll();

  return (
    <section className="bg-avid-main-500">
      <MaxWidthWrapper className="relative flex flex-col items-center">
        <div className="text-center md:hidden duration-300">
          <h1 className="text-2xl md:text-5xl font-semibold">
            Want to create custom?
          </h1>
          <h6 className="mt-4 text-avid-gray-300 md:text-lg">
            We offer custom video creation services for your business. Click
            Contact Us to get started.
          </h6>
        </div>
        <div className="w-full flex gap-5 justify-center md:hidden duration-300">
          {/* <Button className="w-full" variant="bordered">
            Pricing
          </Button> */}
          <Button className="mt-10 w-full" color="primary" onClick={onOpen}>
            Contact Us
          </Button>
        </div>

        <div className="w-full hidden md:flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-5xl font-semibold">
              Want to create custom?
            </h1>
            <h6 className="mt-4 text-avid-gray-300 md:text-lg">
              We offer custom video creation services for your business. Click
              Contact Us to get started.
            </h6>
          </div>
          <div className="flex gap-5">
            {/* <Button
              className="px-10"
              variant="bordered"
              onClick={() => app.navigateToPricing()}
            >
              Pricing
            </Button> */}
            <Button className="px-10" color="primary" onClick={onOpen}>
              Contact Us
            </Button>
          </div>
        </div>
        <div className="hidden md:block w-full h-[1px] bg-[#334149] my-5 duration-300" />
        {/* <div className="py-10 overflow-hidden w-full">
          <ImageCarousel images={carouselImages} />
        </div> */}

        {/* Graphic images-------------------------------------------------- starts here */}
        {/* <div className="hidden lg:block">
          <Image
            className="selectDisable absolute top-10 right-0 blur-3xl rounded-full backdrop-blur-lg opacity-20"
            src="/assets/vectors/gradient.png"
            width={500}
            height={333}
            alt="Graphic image"
          />
          <Image
            style={{
              transform: `translate(${scrollY * 0.1}px)`,
            }}
            className="selectDisable absolute bottom-36 left-0"
            src="/assets/vectors/rectangle.svg"
            width={50}
            height={50}
            alt="Graphic image"
          />
          <Image
            className="selectDisable absolute bottom-20 left-40 z-10 blur-2xl rounded-full opacity-10"
            src="/assets/vectors/gradient.png"
            width={400}
            height={266}
            alt="Graphic image"
          />
        </div> */}
        {/* Graphic images-------------------------------------------------- ends here */}
      </MaxWidthWrapper>
      <CustomDevelopmentModal isOpen={isOpen} onClose={onClose} />
    </section>
  );
}
