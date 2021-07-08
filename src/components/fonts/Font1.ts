import { SvgChar } from './index';

export const defaultCharacter: SvgChar = {
	svgViewBox: { width: 0, height: 0 },
	elements: [{ elementDelay: 0, shape: '', length: 0 }],
};

export const charA: SvgChar = {
	svgViewBox: { width: 56, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 7 70 L 28 0 L 49 70',
			length: 213.04116821289062,
		},
		{ elementDelay: 0.5, shape: 'M 8 48 L 40 48', length: 32 },
	],
};

export const charB: SvgChar = {
	svgViewBox: { width: 52, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 8 0 L 8 64', length: 64 },
		{
			elementDelay: 0.0,
			shape: 'M 8 8 L 25 8 C 42 8 42 30 26 30 L 8 30 L 30 30 C 48 30 48 56 30 56 L 8 56',
			length: 158.12503051757812,
		},
	],
};

export const charC: SvgChar = {
	svgViewBox: { width: 64, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 49 15 A 24 24 0 1 0 49 49',
			length: 113.02982330322266,
		},
	],
};

export const charD: SvgChar = {
	svgViewBox: { width: 52, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 8 8 L 8 56 L 26 56 C 50 56 50 8 26 8 L 0 8',
			length: 158.94357299804688,
		},
	],
};

export const charH: SvgChar = {
	svgViewBox: { width: 48, height: 64 },
	elements: [
		{ elementDelay: 0.5, shape: 'M 8 64 L 8 0', length: 64 },
		{ elementDelay: 1.0, shape: 'M 40 64 L 40 0', length: 64 },
		{ elementDelay: 1.5, shape: 'M 8 32 L 40 32', length: 32 },
	],
};

export const charM: SvgChar = {
	svgViewBox: { width: 64, height: 64 },
	elements: [
		{
			elementDelay: 0.5,
			shape: 'M 8 64 L 8 0 L 32 32 L 56 0 L 56 64',
			length: 213.04116821289062,
		},
	],
};
