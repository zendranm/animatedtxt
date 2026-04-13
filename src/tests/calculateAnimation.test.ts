import { describe, it, expect } from 'vitest';
import { calculateAnimation } from '@/utils/calculateAnimation';
import { charC, charE, charK } from '@/fonts/basicThin';
import { ExtendedElement } from '@/types/character';

describe('calculateAnimation', () => {
	it("For single-element characters, element's animation time equals character's animation time", () => {
		const char = charC;
		const animationTime = 1;
		const result = calculateAnimation(char, animationTime);

		expect(result.elements).toHaveLength(1);
		const [element] = result.elements;

		expect(element.elementDuration).eq(1);
	});

	it("For multi-element characters, sum of element's animation times equals character's animation time", () => {
		const char = charK;
		const animationTime = 1;
		const result = calculateAnimation(char, animationTime);

		const elements = result.elements;

		const lastFinishingElement = elements.reduce(
			(acc, curr) => {
				if (curr.elementDelay + curr.elementDuration > acc.elementDelay + acc.elementDuration) {
					acc = curr;
				}
				return acc;
			},
			{ elementDelay: 0, elementDuration: 0 } as ExtendedElement,
		);

		expect(lastFinishingElement.elementDelay + lastFinishingElement.elementDuration).eq(
			animationTime,
		);

		expect(elements).not.toHaveLength(0);
		elements.forEach(element => {
			expect(element.elementDelay + element.elementDuration).toBeLessThanOrEqual(animationTime);
		});
	});
});
