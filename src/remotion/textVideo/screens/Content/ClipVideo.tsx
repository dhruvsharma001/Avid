import React from "react";
import { Video } from "remotion";
import { TClipContentVideo } from "../../types";

type TProps = {
  content: TClipContentVideo;
};
export default function ClipVideo(props: TProps) {
  const { content } = props;

  return (
    <>
      <div>
        <Video
          src={content.data}
          style={{ ...content.style }}
          startFrom={content.startFrom}
          endAt={content.endAt}
          loop
          key={content.id}
        ></Video>
      </div>
    </>
  );
}
