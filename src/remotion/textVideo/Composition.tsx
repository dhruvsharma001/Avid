import {
  AbsoluteFill,
  Audio,
  Sequence,
  prefetch,
  useVideoConfig,
} from "remotion";
import { z } from "zod";
// Import {loadFont} from '@remotion/google-fonts/Poppins';
import Clip from "./screens/Clip";
import { TClip, inputSchema } from "./types";
import Background from "./screens/Background";
import { prefetchAllAssets } from "./screens/Content/utils";
import { useEffect, useState } from "react";
import { TransitionSeries } from "@remotion/transitions";
import { getTransitionComponent } from "./transitionHelper";
import { getSignedUrl } from "@/firebase/utils";

export const MainComposition: React.FC<z.infer<typeof inputSchema>> = ({
  clips,
  backgroundMusic,
  background,
  colorPalette,
}) => {
  // Const {fontFamily} = loadFont();
  const { fps } = useVideoConfig();
  const [modifiedClips, setModifiedClips] = useState<TClip[]>();
  const [backgroundMusicSource, setBackgroundMusicSource] = useState<string>();
  useEffect(() => {
    const transformInput = async () => {
      const modClips = await prefetchAllAssets(clips);
      setModifiedClips(modClips);
      if (backgroundMusic && !backgroundMusic.source.startsWith("http")) {
        const res = await getSignedUrl(backgroundMusic.source);
        const pfObj = prefetch(res, {
          method: "blob-url",
          contentType: "audio/mp3",
        });
        const source = await pfObj.waitUntilDone();
        setBackgroundMusicSource(source);
      } else {
        if (backgroundMusic && backgroundMusic.source)
          setBackgroundMusicSource(backgroundMusic.source);
      }
    };
    transformInput();
  }, [clips]);

  if (!modifiedClips || (backgroundMusic && !backgroundMusicSource))
    return <div>Loading...</div>;
  const volume =
    backgroundMusic && backgroundMusic.volume
      ? Number((backgroundMusic.volume / 100).toPrecision(2))
      : 1;
  return (
    <AbsoluteFill
      className="items-center justify-center "
      style={{
        // FontFamily,
        color: colorPalette ? colorPalette.text : "black",
      }}
    >
      {background && background.type && (
        <Background background={background} zIndex={-9} />
      )}
      {modifiedClips &&
        modifiedClips.map((clip, index: number) => {
          const from =
            fps *
            clips.slice(0, index).reduce((acc, curr) => acc + curr.duration, 0);
          return (
            <Sequence
              key={index}
              className="  items-center  justify-center  h-full"
              // Style={{fontFamily}}
              from={from}
              durationInFrames={fps * clip.duration}
            >
              {clip.transition ? (
                <TransitionSeries className=" flex items-center  justify-center  h-full">
                  {clip.transition.entry &&
                    getTransitionComponent(clip.transition.entry)}
                  <TransitionSeries.Sequence
                    durationInFrames={fps * clip.duration}
                  >
                    {background && !background.type && (
                      <Background background={background} zIndex={-9} />
                    )}
                    <Clip clip={clip} duration={clip.duration} />
                  </TransitionSeries.Sequence>
                  {clip.transition.exit &&
                    getTransitionComponent(clip.transition.exit)}
                </TransitionSeries>
              ) : (
                <>
                  {background && !background.type && (
                    <Background background={background} zIndex={-9} />
                  )}
                  <Clip clip={clip} duration={clip.duration} />
                </>
              )}
            </Sequence>
          );
        })}

      {backgroundMusicSource && backgroundMusic && (
        <Audio
          loop={backgroundMusic.loop}
          src={backgroundMusicSource && backgroundMusicSource}
          volume={() => volume}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
      )}
    </AbsoluteFill>
  );
};
