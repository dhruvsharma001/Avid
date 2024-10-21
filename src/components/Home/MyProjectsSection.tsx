"use client";
import Image from "next/image";
// Hooks
import { useScroll } from "@/hooks/useScroll";
// Components

import MaxWidthWrapper from "@/app/MaxWidthWrapper";
import ImageCarousel from "./ImageCarousel";

// Utils
import { carouselImages } from "./helpers";
import { useUserStore } from "@/stores/user";

import CardCarousel from "./CardCarousel";
import { useState } from "react";
function ProjectContent(props: { user: any }) {
  const { user } = props;
  return (
    <>
      {/* <div className="w-full hidden md:flex justify-between items-center">
        <div>
          <h1 className="text-xl md:text-5xl font-semibold">Recent Projects</h1>
        </div>
      </div>

      <div className="text-center md:hidden duration-300">
        <h1 className="text-xl md:text-5xl font-semibold">Recent Projects</h1>
      </div> */}
      <div className="hidden md:block w-full h-[1px] bg-[#334149] duration-300" />
      <div className=" overflow-hidden w-full">
        <CardCarousel user={user} noProjectFallback={VideoContent} />
      </div>
    </>
  );
}

const VideoContent = () => {
  const [muted, setMuted] = useState(true);
  return (
    <video
      src="https://storage.googleapis.com/avid-ec61f.appspot.com/public/video/Intro.mp4"
      className="cursor-pointer"
      muted={muted}
      autoPlay
      loop
      width={1280}
      height={720}
      onClick={() => {
        setMuted((muted) => !muted);
      }}
      controls={false}
    ></video>
  );
};
export default function MyProjectsSection() {
  const { scrollY } = useScroll();
  const { user } = useUserStore();

  //get user projects
  return (
    <section className="bg-avid-main-500">
      <MaxWidthWrapper className="relative flex flex-col items-center py-0 md:py-0">
        {!user ? <VideoContent /> : <ProjectContent user={user} />}

        {/* Graphic images-------------------------------------------------- starts here */}
        <div className="hidden lg:block">
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
        </div>
        {/* Graphic images-------------------------------------------------- ends here */}
      </MaxWidthWrapper>
    </section>
  );
}
