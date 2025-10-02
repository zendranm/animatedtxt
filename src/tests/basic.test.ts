import { describe, it, expect } from 'vitest';
import { isTypeofSvgChar, defaultCharacter } from '@/utils/common';

describe('isTypeofSvgChar', () => {
	it('returns true for valid SvgChar-like object', () => {
		const valid = {
			svgViewBox: { width: 10, height: 20 },
			elements: [],
			offsets: { left: [0, 0, 0, 0, 0], right: [0, 0, 0, 0, 0] },
		};
		expect(isTypeofSvgChar(valid)).toBe(true);
	});

	it('returns false for invalid object', () => {
		expect(isTypeofSvgChar({})).toBe(false);
		expect(isTypeofSvgChar(null)).toBe(false);
		expect(isTypeofSvgChar(undefined)).toBe(false);
		expect(isTypeofSvgChar(123)).toBe(false);
		// also ensure our exported defaultCharacter passes the check
		expect(isTypeofSvgChar(defaultCharacter)).toBe(true);
	});
});
