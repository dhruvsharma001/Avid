import React from "react";
import { TBackground } from "../types";
import { AbsoluteFill, Video } from "remotion";
import { PUBLIC_CDN_ROOT } from "@/constants";
import { getSignedUrl } from "@/firebase/utils";
type TProps = {
  background: TBackground;
  zIndex: number;
};
function Background(props: TProps) {
  const { background, zIndex } = props;

  if (!background) return null;

  if (background.type === "video") {
    return (
      <AbsoluteFill
        style={{
          zIndex: zIndex,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Video src={background.value} />
      </AbsoluteFill>
    );
  } else if (background.type === "image") {
    return (
      <AbsoluteFill
        style={{
          backgroundImage: `url(${background.value})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: zIndex,
        }}
      />
    );
  } else if (background.type === "color") {
    return (
      <AbsoluteFill
        style={{
          background: background.value || undefined,
          zIndex: zIndex,
        }}
      />
    );
  }
}

export default Background;
