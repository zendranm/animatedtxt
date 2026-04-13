import type { Element, SvgChar } from '@/types/font';

export const makeChar = (elements: Element[]): SvgChar => ({
	svgViewBox: { width: 2, height: 64 },
	elements: elements.map(({ shape, length, elementDelay }) => ({
		shape: shape,
		length: length,
		elementDelay: elementDelay,
	})),
	offsets: { left: [0, 0, 0, 0, 0], right: [0, 0, 0, 0, 0] },
});
