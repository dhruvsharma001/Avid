import React, { useEffect, useMemo, useState } from "react";
import { AnimatedText } from "remotion-animate-text";
import { TClipContentText } from "../../types";
import { spring, fade } from "../../animations";
import AnimateChild from "./AnimateChild";
import { useVideoConfig } from "remotion";
import { importFont } from "../fonts";

type TProps = {
  readonly content: TClipContentText;
  readonly clipDuration: number;
};
function getAnimation(type: string) {
  switch (type) {
    case "zoomIn":
      return spring;
    case "zoomOut":
      return spring;
    case "fadeIn":
      return fade;
    case "fadeOut":
      return fade;
    default:
      return spring;
  }
}
function ClipText(props: TProps) {
  const { content } = props;
  useEffect(() => {
    const importSelectedFont = async () => {
      if (!content.font) return;
      const fontModule = await importFont(content.font);
      if (!fontModule) return;
      const { loadFont } = fontModule as {
        loadFont: () => { fontFamily: string };
      };
      const { fontFamily } = loadFont() as { fontFamily: string };
      setFontFamily(fontFamily);
    };

    importSelectedFont();
  }, []);

  const [fontFamily, setFontFamily] = React.useState<string | undefined>(
    undefined
  );
  const { fps } = useVideoConfig();

  if (
    content.animation &&
    content.animation.type === ("animateText" as const)
  ) {
    return (
      <div style={{ ...content.style, fontFamily }}>
        <AnimatedText
          animation={getAnimation(content.animation?.animation)}
          duration={Math.floor((content.animation?.duration || 1) * fps)}
        >
          {content.data}
        </AnimatedText>
      </div>
    );
  }

  // https://tobiasahlin.com/moving-letters/
  if (content.animation?.type === "animejs")
    return (
      <>
        <AnimateChild
          animation={content.animation}
          clipDuration={props.clipDuration}
        >
          <div key={content.id} style={{ ...content.style, fontFamily }}>
            {content.data}
          </div>
        </AnimateChild>
      </>
    );

  return (
    <div key={content.id} style={{ ...content.style, fontFamily }}>
      {content.data}
    </div>
  );
}

export default ClipText;
