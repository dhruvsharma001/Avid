import React from 'react';
import {Lottie, LottieAnimationData, LottieProps} from '@remotion/lottie';
import {useEffect, useState} from 'react';
import {cancelRender, continueRender, delayRender, staticFile} from 'remotion';

type TProps = {
	readonly path: string;
	readonly lottieProps: Omit<LottieProps, 'animationData'>;
};
function LottieElement(props: TProps) {
	const {path} = props;
	const [handle] = useState(() => delayRender('Loading Lottie animation'));

	const [animationData, setAnimationData] =
		useState<LottieAnimationData | null>(null);

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
	}, [handle]);

	if (!animationData) {
		return null;
	}

	return <Lottie animationData={animationData} {...props.lottieProps} />;
}

export default LottieElement;
