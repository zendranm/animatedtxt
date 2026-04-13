import { describe, it, expect } from 'vitest';
import { isTypeofSvgChar } from '@/utils/isTypeofSvgChar';
import { makeChar } from '@/tests/utils';

describe('isTypeofSvgChar', () => {
	it('returns true for valid SvgChar-like object', () => {
		const valid: unknown = makeChar([]);
		expect(isTypeofSvgChar(valid)).toBe(true);
	});

	it('returns false for invalid values', () => {
		expect(isTypeofSvgChar({})).toBe(false);
		expect(isTypeofSvgChar(null)).toBe(false);
		expect(isTypeofSvgChar(undefined)).toBe(false);
		expect(isTypeofSvgChar(123)).toBe(false);
		expect(isTypeofSvgChar('abc')).toBe(false);
	});
});
