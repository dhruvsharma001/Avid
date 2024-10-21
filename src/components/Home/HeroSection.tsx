"use client";
import Image from "next/image";
import { useAppNavigation } from "@/hooks/navigation";
import { useScroll } from "@/hooks/useScroll";
import { Button, useDisclosure } from "@nextui-org/react";
import MaxWidthWrapper from "@/app/MaxWidthWrapper";
import { useEffect, useRef, useState } from "react";
import { Input } from "@nextui-org/react";
import { IoSearchCircleOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { nextFetch } from "@/lib/fetch";
import { API_ROUTES } from "@/constants";
import { auth } from "@/firebase/firebase";
import { signInAnonymously } from "firebase/auth";
import CreationOptionModal from "./CreationOptionModal";

export default function HeroSection() {
  const app = useAppNavigation();
  const inputRef = useRef<HTMLInputElement>(null);
  const { scrollY } = useScroll();
  const [muted, setMuted] = useState(true);
  const [inputValue, setInputValue] = useState<string>();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [searchPrompt, setSearchPrompt] = useState<string>();
  async function authenticateUserAnonymously() {
    signInAnonymously(auth)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async function handleCreate() {
    if (!inputRef.current || !inputRef.current.value)
      toast.error("Please enter a value to create a video");
    else {
      // if (!auth.currentUser) await authenticateUserAnonymously();
      setSearchPrompt(inputRef.current.value);
      onOpen();
    }
  }

  return (
    <section className="bg-avid-main-500">
      <MaxWidthWrapper className="relative flex flex-col md:flex-col-reverse items-center">
        {/* Graphic images-------------------------------------------------- starts here */}
        <div className="hidden lg:block">
          <Image
            className="selectDisable absolute -top-40 right-0 blur-3xl rounded-full backdrop-blur-lg opacity-10"
            src="/assets/vectors/gradient.png"
            width={500}
            height={333}
            alt="Graphic image"
          />
          <Image
            style={{
              transform: `translate(${scrollY * 0.1}px, -${scrollY * 0.1}px)`,
            }}
            className="selectDisable absolute top-60 left-10"
            src="/assets/vectors/ellipse.svg"
            width={50}
            height={54}
            alt="Graphic image"
          />
          <Image
            style={{
              transform: `translate(-${scrollY * 0.1}px, -${scrollY * 0.1}px)`,
            }}
            className="selectDisable absolute bottom-40 right-10"
            src="/assets/vectors/blue-triangle.svg"
            width={50}
            height={55}
            alt="Graphic image"
          />
          <Image
            style={{
              transform: `translate(-${scrollY * 0.05}px, -${
                scrollY * 0.05
              }px)`,
            }}
            className="selectDisable absolute top-60 left-20 z-10 opacity-5"
            src="/assets/vectors/grid.svg"
            width={500}
            height={500}
            alt="Graphic image"
          />

          <Image
            className="selectDisable absolute top-60 left-0 z-10 blur-2xl rounded-full opacity-5"
            src="/assets/vectors/gradient.png"
            width={750}
            height={750}
            alt="Graphic image"
          />
          <Image
            style={{
              transform: `translate(-${scrollY * 0.05}px, -${
                scrollY * 0.05
              }px)`,
            }}
            className="selectDisable absolute -bottom-36 right-0 z-10 opacity-5"
            src="/assets/vectors/grid.svg"
            width={500}
            height={500}
            alt="Graphic image"
          />
          <Image
            className="selectDisable absolute -bottom-40 left-1/2 -translate-x-1/2 z-10 bg-blend-soft-light blur-2xl rounded-full opacity-5"
            src="/assets/vectors/gradient.png"
            width={750}
            height={499}
            alt="Graphic image"
          />
        </div>
        {/* Graphic images-------------------------------------------------- ends here */}

        {/* <Image
          className="z-20 relative"
          src="/assets/home/hero.png"
          width={1000}
          height={608}
          alt="Homescreen of the avid application"
          priority
        /> */}
        {/* <ReactPlayer
          className="z-20 relative"
          width={1000}
          height={608}
          muted
          autoPlay
          controls={false}
          url="https://storage.googleapis.com/avid-ec61f.appspot.com/public/video/Intro.mp4"
        ></ReactPlayer> */}

        <div className="text-center mt-3 md:mb-16 max-w-[700px]">
          <div className="relative w-5 h-5 md:w-10 md:h-10">
            <Image
              src="/assets/vectors/star.svg"
              fill
              alt="Colorful shining star"
              priority
            />
          </div>
          <h1 className="text-2xl md:text-5xl font-semibold">
            Create adz in <span className="avid-text-gradient">seconds</span>
          </h1>
          <h6 className="mt-4 mb-7 text-avid-gray-300 md:text-lg">
            Focus on ideas and not editing. Discover the magic of creating
            dynamic adz automatically.
          </h6>
          <div>
            <div className="w-full  px-8 rounded-2xl flex justify-center items-center text-white shadow-lg pb-10">
              <Input
                ref={inputRef}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleCreate();
                  const { value } = e.target as HTMLInputElement;
                  if (value) {
                    setInputValue(value);
                  } else {
                    setInputValue(undefined);
                  }
                }}
                label="What do you want to create today ?"
                isClearable
                radius="lg"
                classNames={{
                  label: "text-black/50 dark:text-white/90",
                  input: [
                    "bg-transparent",
                    "text-black/90 dark:text-white/90",
                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                  ],
                  innerWrapper: "bg-transparent",
                  inputWrapper: [
                    "shadow-xl",
                    "bg-default-200/50",
                    "dark:bg-default/60",
                    "backdrop-blur-xl",
                    "backdrop-saturate-200",
                    "hover:bg-default-200/70",
                    "dark:hover:bg-default/70",
                    "group-data-[focused=true]:bg-default-200/50",
                    "dark:group-data-[focused=true]:bg-default/60",
                    "!cursor-text",
                  ],
                }}
                placeholder="I have a shoe store and I want to create a promo video for it ...."
                startContent={
                  <IoSearchCircleOutline className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                }
              />
            </div>
          </div>
          <div className="flex gap-5 justify-center ">
            <Button
              className={cn({
                "bg-avid-gradient text-white px-20 tracking-widest text-md ":
                  true,
                "opacity-50":
                  inputValue === undefined || inputValue.length === 0,
                "cursor-pointer":
                  inputValue != undefined && inputValue.length > 0,
              })}
              onPress={handleCreate}
              variant="shadow"
              disabled={!inputValue}
            >
              Create
            </Button>
            <Button
              className="w-full md:w-fit md:px-10 text-white px-20 tracking-widest text-md"
              onPress={() => app.navigateToTemplateListing()}
              variant="shadow"
            >
              Explore
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
      <CreationOptionModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        prompt={searchPrompt || ""}
        onCreate={(prompt, options) => {
          nextFetch(API_ROUTES.PROJECT.INIT, {
            method: "POST",
            body: JSON.stringify({ prompt: prompt, options: options }),
          }).then((res) => {
            if (res.ok) {
              //todo: store res.data.data.inputProps in editor store for non loggedIn users and direct them to /demo route with the config recieved from APi
              app.navigateToStudio(res.data.data.projectId);
            } else {
              toast.error("Failed to create project");
            }
          });
        }}
      />
    </section>
  );
}
