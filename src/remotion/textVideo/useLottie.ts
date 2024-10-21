import { LottieAnimationData } from "@remotion/lottie";
import { useEffect, useState } from "react";
import { staticFile } from "remotion";
import { continueRender, delayRender, cancelRender } from 'remotion';
export function useLottie(path: string) {
    const [animationData, setAnimationData] =
        useState<LottieAnimationData | null>(null);
    const [handle] = useState(() => delayRender('Loading Lottie animation'));

    useEffect(() => {
        fetch(staticFile(path))
            .then((data) => data.json())
            .then((json) => {

                setAnimationData(json);
                continueRender(handle);
            })
            .catch((err) => {
                cancelRender(err);
            });
    }, [handle, path])

    return animationData
}