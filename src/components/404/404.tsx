import Image from "next/image";
import React from "react";

export default function FoF(props: { text?: string }) {
  const { text } = props;
  return (
    <div className="flex flex-col justify-center items-center">
      <Image src="/404.svg" alt="404" width={500} height={500} />
      <div className="text-lg">{text || "Page Not found"}</div>
    </div>
  );
}
