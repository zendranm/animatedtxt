import { describe, it, expect } from 'vitest';
import { reverseElements } from '@/utils/reverseElements';
import { calculateAnimation } from '@/utils/calculateAnimation';
import { makeChar } from '@/tests/utils';
import type { ExtendedSvgChar } from '@/types/character';

describe('reverseElements', () => {
	it('reverses delays so that delay + duration mirrors around 1', () => {
		const base: ExtendedSvgChar = calculateAnimation(
			makeChar([
				{ elementDelay: 0.0, length: 10, shape: 'M 1 64 L 1 0' }, // duration will be 1 when animationTime=1
				{ elementDelay: 0.2, length: 5, shape: 'M 1 64 L 1 0' }, // duration 0.5 when animationTime=1
			]),
			1,
		);

		const reversed = reverseElements(base);
		const [orig0, orig1] = base.elements;
		const [rev0, rev1] = reversed.elements;

		// If delay + duration === 1 -> new delay becomes 0
		expect(orig0.elementDelay + orig0.elementDuration).toBeCloseTo(1, 6);
		expect(rev0.elementDelay).toBeCloseTo(0, 6);

		// Otherwise: newDelay = 1 - oldDelay - duration
		const expected1 = 1 - orig1.elementDelay - orig1.elementDuration;
		expect(rev1.elementDelay).toBeCloseTo(expected1, 6);
	});

	it('isRevered prop in Char has higher priority than in Phrase', () => {
		// Both default and intentionally added
		// <Phrase isReversed={true} ><Char /></Phrase>
		// <Phrase isReversed={true} ><Char isReversed={false} /></Phrase>
		// <Phrase isReversed={false} ><Char isReversed={true} /></Phrase>
		// <Phrase><Char isReversed={true} /></Phrase>
	});
});
