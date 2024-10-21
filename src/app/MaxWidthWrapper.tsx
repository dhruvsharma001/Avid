import { cn } from "@/lib/utils";
import React from "react";

type TProps = {
  className?: string;
  children?: React.ReactNode;
};
export default function MaxWidthWrapper(props: TProps) {
  return (
    <div
      className={cn(
        "container mx-auto max-w-screen-2xl px-4 md:px-20 py-10 md:py-24 duration-300",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}
