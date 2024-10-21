import {linearTiming, springTiming} from '@remotion/transitions';
import {slide} from '@remotion/transitions/slide';
import {fade} from '@remotion/transitions/fade';
import {wipe} from '@remotion/transitions/wipe';
import {flip} from '@remotion/transitions/flip';
import {TSlideTransition} from './types';
import {TransitionSeries} from '@remotion/transitions';

const getTiming = (duration: number, type: string = 'linear') => {
	if (type === 'spring') return springTiming({durationInFrames: 30 * duration});
	return linearTiming({durationInFrames: 30 * duration});
};

export const getTransitionComponent = (transition: TSlideTransition) => {
	switch (transition.type) {
		case 'fade':
			return (
				<TransitionSeries.Transition
					presentation={fade()}
					timing={getTiming(transition.duration || 1, transition.timing)}
				/>
			);
		case 'slide':
			return (
				<TransitionSeries.Transition
					presentation={slide()}
					timing={getTiming(transition.duration || 1, transition.timing)}
				/>
			);
		case 'wipe':
			return (
				<TransitionSeries.Transition
					presentation={wipe()}
					timing={getTiming(transition.duration || 1)}
				/>
			);
		case 'flip':
			return (
				<TransitionSeries.Transition
					presentation={flip()}
					timing={getTiming(transition.duration || 1)}
				/>
			);

		default:
			return undefined;
	}
};
