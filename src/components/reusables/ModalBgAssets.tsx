import Image from "next/image";
import React from "react";

export default function ModalBgAssets() {
  return (
    <>
      <Image
        className="selectDisable absolute top-0 right-0 blur-3xl rounded-full backdrop-blur-lg opacity-10"
        src="/assets/vectors/gradient.png"
        width={500}
        height={500}
        alt="Graphic image"
      />
      <Image
        className="selectDisable absolute bottom-0 left-0 blur-3xl rounded-full backdrop-blur-lg opacity-10"
        src="/assets/vectors/gradient.png"
        width={500}
        height={500}
        alt="Graphic image"
      />
    </>
  );
}
