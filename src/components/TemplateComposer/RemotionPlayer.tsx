"use client";
import { Player } from "@remotion/player";

import { useCallback, useEffect, useState } from "react";
import { CalculateMetadataFunction } from "remotion";
import { MainComposition } from "@/remotion/textVideo/Composition";

import { TInput } from "@/remotion/textVideo/types";
import { calculateMetadata } from "@/remotion/textVideo/Root";
import { DEFAULT_TEMPLATE_PROP } from "@/constants";

type TProps = {
  inputProps: { [key: string]: string | number | {} } | any;
  size: { width: number; height: number };
  options?: any;
};
type Props = any;

function RemotionPlayer(props: TProps) {
  const { inputProps, size } = props;

  const [PlayerComponent, setPlayerComponent] = useState<any>(null);
  type Metadata = {
    durationInFrames: number;
    compositionWidth: number;
    compositionHeight: number;
    fps: number;
    props: Props;
  };

  const [metadata, setMetadata] = useState<Metadata | null>(null);

  const calculateMetadataWrapper: CalculateMetadataFunction<TInput> =
    useCallback(
      async ({ props, abortSignal }) => {
        const res = await calculateMetadata({
          defaultProps: DEFAULT_TEMPLATE_PROP,
          props,
          abortSignal,
        });
        return res;
      },
      [props]
    );

  useEffect(() => {
    Promise.resolve(
      calculateMetadataWrapper({
        defaultProps: inputProps,
        props: inputProps,
        abortSignal: new AbortController().signal,
      })
    )
      .then((metadata) => {
        const { durationInFrames, width, height, fps, props } = metadata;
        setMetadata({
          durationInFrames: (durationInFrames as number) || 10 * 30,
          compositionWidth: size.width,
          compositionHeight: size.height,
          fps: fps as number,
          props: props as Props,
        });
      })
      .catch((err) => {
        console.log(`Error fetching metadata: ${err}`);
      });
  }, [inputProps, size, calculateMetadataWrapper]);

  if (!metadata) {
    return <div>Metadata or PlayerComponent are missing</div>;
  }

  return (
    <Player
      className="w-full h-full object-contain"
      component={MainComposition}
      // autoPlay
      style={{
        height: size.height,
      }}
      inputProps={{ ...inputProps, ...metadata.props }}
      loop
      {...metadata}
      {...props.options}
    />
  );
}

export default RemotionPlayer;
