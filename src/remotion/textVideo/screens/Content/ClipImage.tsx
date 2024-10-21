import React from "react";
import { Img } from "remotion";
import { TAnimation, TClipContent } from "../../types";
import { useAppearWithScaleAndBounce } from "../useAppearWithScaleAndBounce";
import AnimateChild from "./AnimateChild";

type TProps = {
  content: TClipContent;
  clipDuration: number;
};
export default function ClipImage(props: TProps) {
  const { content } = props;

  const ImageComponent = (
    <Img
      src={content.data}
      style={{
        ...content.style,
      }}
      key={content.id}
    />
  );
  return (
    <>
      {content.animation ? (
        <AnimateChild
          animation={content.animation as TAnimation}
          clipDuration={props.clipDuration}
        >
          {ImageComponent}
        </AnimateChild>
      ) : (
        ImageComponent
      )}
    </>
  );
}
