import React, { ReactNode, useEffect, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js";
import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { TAnimation } from "../../types";
type TProps = {
  readonly animation: TAnimation;
  readonly children: ReactNode;
  readonly clipDuration: number;
};
export default function AnimateChild(props: TProps) {
  const { animation: animationProps } = props;
  const ref = useRef<HTMLDivElement>(null);
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const [animation, setAnimation] = useState<anime.AnimeInstance | null>(null);

  useEffect(() => {
    setAnimation(() => {
      if (animation) return animation;
      const opts = { ...animationProps.animation };

      const animationTimeline = anime({
        targets: ref.current,
        duration: (animationProps?.duration || 1) * 1000,
        ...opts,
      });
      return animationTimeline;
    });
  }, []);
  useEffect(() => {
    if (!animation) {
      return;
    }

    const seek = interpolate(
      frame,
      [0, props.clipDuration * fps],
      [0, animationProps.duration * 1000]
    );

    if (seek) animation.seek(seek);
  }, [animation, fps, frame, props.clipDuration, animationProps.duration]);
  if (!props.children) return <></>;

  return <div ref={ref}>{props.children}</div>;
}
