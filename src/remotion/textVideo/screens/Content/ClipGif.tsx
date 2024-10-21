import React, {useState} from 'react';
import {Gif} from '@remotion/gif';
import {TAnimation, TClipContent} from '../../types';
import {staticFile} from 'remotion';
import AnimateChild from './AnimateChild';
type TProps = {
	readonly content: TClipContent;
	readonly clipDuration: number;
};

export default function ClipGif(props: TProps) {
	const [hasError, setHasError] = useState(false);
	const {content} = props;

	const ImageComponent = hasError ? (
		<Gif
			key={content.id}
			src={staticFile('backup.gif')}
			style={{
				...content.style,
			}}
		/>
	) : (
		<Gif
			key={content.id}
			src={content.data}
			style={{
				...content.style,
			}}
			onError={(e) => {
				console.log(e);
				setHasError(true);
			}}
		/>
	);
	return (
		<>
			{content.animation ? (
				<AnimateChild
					animation={content.animation as TAnimation}
					clipDuration={props.clipDuration}
				>
					{ImageComponent}
				</AnimateChild>
			) : (
				ImageComponent
			)}
		</>
	);
}
