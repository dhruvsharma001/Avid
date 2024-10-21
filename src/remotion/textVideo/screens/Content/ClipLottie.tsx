import React from "react";

import { TClipContent, TClipContentLottie } from "../../types";
import { storage } from "@/firebase/firebase";
import { useDownloadURL } from "react-firebase-hooks/storage";
import { ref as storageRef } from "firebase/storage";
import { useAppearWithScaleAndBounce } from "../useAppearWithScaleAndBounce";
import LottieElement from "../LottieElement";
type TProps = {
  content: TClipContentLottie;
};
export default function ClipLottie(props: TProps) {
  const { content } = props;

  const { scaleValue } = useAppearWithScaleAndBounce();

  content.style = {
    ...content.style,
  };
  return (
    <>
      <LottieElement
        key={content.id}
        path={content.data}
        lottieProps={{
          style: content.style,
          ...content.lottieProps,
        }}
      />
    </>
  );
}
