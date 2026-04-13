import { ExtendedSvgChar } from '@/types/character';
import { SvgChar } from '@/types/font';

// TODO: rename calculateAnimation (file and function) to something more meaningful
export const calculateAnimation = (char: SvgChar, animationTime: number): ExtendedSvgChar => {
	// Find the longest element in character
	let longestElement = 0;
	char.elements.forEach(element => {
		if (element.length > longestElement) {
			longestElement = element.length;
		}
	});

	// Calculate ratio (speed) of each element's length to the longest element
	const newElements = char.elements.map(element => ({
		...element,
		speed: element.length / longestElement,
	}));

	// Find element with animation that ends last
	let longestAnimation = newElements[0];
	newElements.forEach(element => {
		if (
			element.elementDelay + element.speed >
			longestAnimation.elementDelay + longestAnimation.speed
		) {
			longestAnimation = element;
		}
	});

	// Calculate the time of the end of the animation that ends last
	const lastEnd = (longestAnimation.elementDelay + longestAnimation.speed) * animationTime;

	// Calculate adjustment if animation longer than animationTime
	let alpha = 1;
	if (lastEnd !== animationTime) {
		// Calculate time of element's animation which is too long
		const lasts = lastEnd - longestAnimation.elementDelay * animationTime;

		// Calculate allowed time that won't exceed animationTime
		const shouldLast = animationTime - longestAnimation.elementDelay * animationTime;

		alpha = shouldLast / lasts;
	}

	// Calculate each element's animation duration
	const extendedElements = newElements.map(element => ({
		...element,
		elementDuration: element.speed * animationTime * alpha,
	}));

	return { ...char, elements: extendedElements };
};
