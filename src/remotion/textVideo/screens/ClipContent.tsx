import React from "react";
import { TClipContent } from "../types";

import { Audio, staticFile } from "remotion";

import ClipImage from "./Content/ClipImage";
import ClipVideo from "./Content/ClipVideo";
import ClipLottie from "./Content/ClipLottie";
import ClipText from "./Content/ClipText";
import ClipGif from "./Content/ClipGif";

type TProps = {
  readonly content: TClipContent;
  readonly clipDuration: number;
};
const getComponent = (content: TClipContent, duration: number) => {
  switch (content.type) {
    case "text":
      return <ClipText content={content} clipDuration={duration} />;
    case "image":
      return <ClipImage content={content} clipDuration={duration} />;
    case "video":
      return <ClipVideo content={content} />;
    case "lottie":
      return <ClipLottie content={content} />;
    case "gif":
      return <ClipGif content={content} clipDuration={duration} />;
    default:
      return <ClipText content={content} clipDuration={duration} />;
  }
};
function ClipContent(props: TProps) {
  const { content } = props;

  return (
    <div>
      {content.audio && (
        <Audio
          key={content.id}
          src={staticFile(content.audio.source)}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
      )}
      {getComponent(content, props.clipDuration)}
    </div>
  );
}

export default ClipContent;
