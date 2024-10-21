import { Composition } from "remotion";
import { MainComposition } from "./Composition";

import { TInput, inputSchema } from "./types";
export const calculateMetadata = (props: {
  defaultProps: Record<string, unknown>;
  props: Record<string, unknown>;
  abortSignal: AbortSignal;
}) => {
  const { clips } = (props.props as TInput) || (props.defaultProps as TInput);

  if (!clips)
    return {
      durationInFrames: Math.ceil(1 * 30),
      fps: 30,
    };
  const seconds = clips.reduce(
    (acc: number, curr: { duration: number }) => acc + curr.duration,
    0
  );
  return {
    durationInFrames: Math.ceil(seconds * 30),
    fps: 30,
    width: props.props.width ? (props.props.width as number) : undefined,
    height: props.props.height ? (props.props.height as number) : undefined,
  };
};
export const RemotionRoot: React.FC = () => {
  return <></>;
};
