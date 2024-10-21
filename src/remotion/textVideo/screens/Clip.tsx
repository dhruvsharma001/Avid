import { Sequence } from "remotion";
import { TClip } from "../types";
import ClipContent from "./ClipContent";
import Background from "./Background";
import { getTransitionComponent } from "../transitionHelper";
import { TransitionSeries } from "@remotion/transitions";

type Screen2Props = {
  readonly clip: TClip;
  readonly duration: number;
};
function Clip(props: Screen2Props) {
  const { clip } = props;
  const { content: contents } = clip;

  if (!contents) return null;
  return (
    <div className="flex flex-col  text-center   ">
      {clip.background && (
        <Background background={clip.background} zIndex={-8} />
      )}

      {Array.isArray(contents) &&
        contents.map((content, contentIndex) => {
          return content.transition ? (
            <TransitionSeries>
              {content.transition &&
                content.transition.entry &&
                getTransitionComponent(content.transition.entry)}
              <TransitionSeries.Sequence
                key={contentIndex}
                durationInFrames={30 * clip.duration}
                layout="none"
              >
                <ClipContent
                  key={contentIndex}
                  content={content}
                  clipDuration={clip.duration}
                />
              </TransitionSeries.Sequence>
              {content.transition &&
                content.transition.exit &&
                getTransitionComponent(content.transition.exit)}
            </TransitionSeries>
          ) : (
            <Sequence
              key={contentIndex}
              from={content.delay * 30 || 0}
              layout="none"
            >
              <ClipContent
                key={contentIndex}
                content={content}
                clipDuration={clip.duration}
              />
            </Sequence>
          );
        })}
    </div>
  );
}

export default Clip;
