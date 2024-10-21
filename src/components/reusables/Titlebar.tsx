"use client";
import { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

type TProps = {
  title: string;
  showBackButton?: boolean;
};
export default function Titlebar({
  title,
  showBackButton = false,
  children,
}: PropsWithChildren<TProps>) {
  const router = useRouter();

  return (
    <div className="bg-avid-gray-200 flex flex-col md:flex-row justify-between md:items-center gap-3 p-3 rounded-xl my-4">
      <div className="flex gap-3 items-center">
        {showBackButton && (
          <IoMdArrowRoundBack
            className="text-xl hover:text-avid-accent cursor-pointer duration-300"
            onClick={() => router.back()}
          />
        )}
        <span className="text-avid-gray-300">{title}</span>
      </div>
      {children}
    </div>
  );
}
