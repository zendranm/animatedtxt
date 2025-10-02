import { ExtendedSvgChar } from '@/types/character';

export const reverseElements = (char: ExtendedSvgChar) => {
	const newElements = char.elements.map(element => {
		const newDelay =
			element.elementDuration + element.elementDelay === 1
				? 0
				: 1 - element.elementDelay - element.elementDuration;
		return {
			...element,
			elementDelay: newDelay,
		};
	});

	return { ...char, elements: newElements };
};
