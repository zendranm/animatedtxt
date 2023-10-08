// eslint-disable-next-line eslint-comments/disable-enable-pair -- comment is provided below
/* eslint-disable @typescript-eslint/no-loss-of-precision -- those lengths of svg elements match the actual svg elements */
import { SvgChar, LinecapOptions } from '@/types/font';

export const fontWidth = 2;
export const linecap: LinecapOptions = 'butt';

export const charA: SvgChar = {
	svgViewBox: { width: 48, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 0 67 L 24 0 L 48 67',
			length: 142.33763122558594,
		},
		{ elementDelay: 0.7, shape: 'M 7 48 L 41 48', length: 34 },
	],
	offsets: {
		left: [0.75, 0.55, 0.37, 0.2, 0],
		right: [0.75, 0.55, 0.37, 0.2, 0],
	},
};

export const charB: SvgChar = {
	svgViewBox: { width: 44, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 1 0 L 1 64', length: 64 },
		{
			elementDelay: 0.1,
			shape:
				'M 1 1 L 26 1 C 45 1 45 30 26 30 L 1 30 L 26 30 C 48 30 48 63 26 63 L 1 63',
			length: 197.9264678955078,
		},
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0.2, 0.12, 0.12, 0.02, 0.1],
	},
};

export const charC: SvgChar = {
	svgViewBox: { width: 55, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 54 10 A 31 31 0 1 0 54 54',
			length: 145.87860107421875,
		},
	],
	offsets: {
		left: [0.23, 0.04, 0, 0.05, 0.25],
		right: [0, 0.5, 1, 0.5, 0],
	},
};

export const charD: SvgChar = {
	svgViewBox: { width: 51, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 1 0 L 1 63 L 26 63 C 57 63 57 1 26 1 L 1 1',
			length: 199.46878051757812,
		},
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0.2, 0.05, 0.02, 0.05, 0.22],
	},
};

export const charE: SvgChar = {
	svgViewBox: { width: 41, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 1 0 L 1 64', length: 64 },
		{ elementDelay: 0.2, shape: 'M 1 1 L 41 1', length: 40 },
		{ elementDelay: 0.42, shape: 'M 1 32 L 35 32', length: 34 },
		{ elementDelay: 0.61, shape: 'M 1 63 L 41 63', length: 40 },
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0, 1, 0.28, 1, 0],
	},
};

export const charF: SvgChar = {
	svgViewBox: { width: 41, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 1 0 L 1 64', length: 64 },
		{ elementDelay: 0.3, shape: 'M 1 1 L 41 1', length: 40 },
		{ elementDelay: 0.6, shape: 'M 1 32 L 35 32', length: 34 },
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0, 1, 0.27, 1, 1],
	},
};

export const charG: SvgChar = {
	svgViewBox: { width: 55, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 54 10 A 31 31 0 1 0 54 54 L 54 35 L 35 35',
			length: 183.87860107421875,
		},
	],
	offsets: {
		left: [0.23, 0.04, 0, 0.05, 0.25],
		right: [0, 1, 0, 0, 0],
	},
};

export const charH: SvgChar = {
	svgViewBox: { width: 41, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 1 64 L 1 0', length: 64 },
		{ elementDelay: 0.3, shape: 'M 40 64 L 40 0', length: 64 },
		{ elementDelay: 0.7, shape: 'M 1 32 L 40 32', length: 39 },
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0, 0, 0, 0, 0],
	},
};

export const charI: SvgChar = {
	svgViewBox: { width: 2, height: 64 },
	elements: [{ elementDelay: 0.0, shape: 'M 1 64 L 1 0', length: 64 }],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0, 0, 0, 0, 0],
	},
};

export const charJ: SvgChar = {
	svgViewBox: { width: 30, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 29 0 L 29 49 A 1 1 0 0 1 1 49 L 1 44',
			length: 97.988525390625,
		},
	],
	offsets: {
		left: [1, 1, 1, 0, 0.05],
		right: [0, 0, 0, 0, 0.05],
	},
};

export const charK: SvgChar = {
	svgViewBox: { width: 39, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 1 64 L 1 0', length: 64 },
		{ elementDelay: 0.1, shape: 'M 41 -5 L 1 44', length: 63.25345993041992 },
		{ elementDelay: 0.6, shape: 'M 13 29 L 41 69', length: 48.82622146606445 },
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0.02, 0.5, 0.9, 0.45, 0],
	},
};

export const charL: SvgChar = {
	svgViewBox: { width: 37, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 1 0 L 1 64', length: 64 },
		{ elementDelay: 0.68, shape: 'M 1 63 L 37 63', length: 36 },
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [1, 1, 1, 1, 0],
	},
};

export const charM: SvgChar = {
	svgViewBox: { width: 50, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 1 64 L 1 0 L 25 32 L 49 0 L 49 64',
			length: 208,
		},
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0, 0, 0, 0, 0],
	},
};

export const charN: SvgChar = {
	svgViewBox: { width: 42, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 1 64 L 1 0 L 41 64 L 41 0',
			length: 203.4718475341797,
		},
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0, 0, 0, 0, 0],
	},
};

export const charO: SvgChar = {
	svgViewBox: { width: 64, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 1 32 A 24 24 0 1 0 63 32 A 24 24 0 1 0 1 32',
			length: 194.80616760253906,
		},
	],
	offsets: {
		left: [0.2, 0.05, 0, 0.05, 0.22],
		right: [0.2, 0.05, 0, 0.05, 0.22],
	},
};

export const charP: SvgChar = {
	svgViewBox: { width: 41, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 1 0 L 1 64', length: 64 },
		{
			elementDelay: 0.2,
			shape: 'M 1 1 L 23 1 C 45 1 46 34 23 34 L 1 34',
			length: 96.92881774902344,
		},
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0.05, 0, 0.1, 1, 1],
	},
};

export const charQ: SvgChar = {
	svgViewBox: { width: 64, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 1 32 A 24 24 0 1 0 63 32 A 24 24 0 1 0 1 32',
			length: 194.80616760253906,
		},
		{
			elementDelay: 0.5,
			shape: 'M 45 45 L 63 63',
			length: 25.45584487915039,
		},
	],
	offsets: {
		left: [0.2, 0.05, 0, 0.05, 0.22],
		right: [0.2, 0.05, 0, 0.05, 0],
	},
};

export const charR: SvgChar = {
	svgViewBox: { width: 41, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 1 0 L 1 64', length: 64 },
		{
			elementDelay: 0.2,
			shape: 'M 1 1 L 23 1 C 45 1 46 34 23 34 L 1 34',
			length: 96.92881774902344,
		},
		{
			elementDelay: 0.75,
			shape: 'M 25 34 L 41 70',
			length: 39.39543151855469,
		},
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0.05, 0, 0.1, 0.3, 0.06],
	},
};

export const charS: SvgChar = {
	svgViewBox: { width: 41, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape:
				'M 40 16 C 40 -4 1 -4 1 16 C 1 33 16 32 20 32 C 24 32 40 31 40 48 C 40 68 1 68 1 48',
			length: 168.1623992919922,
		},
	],
	offsets: {
		left: [0.02, 0, 0.1, 0, 0.02],
		right: [0.02, 0, 0.1, 0, 0.02],
	},
};

export const charT: SvgChar = {
	svgViewBox: { width: 44, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 0 1 L 44 1', length: 44 },
		{ elementDelay: 0.35, shape: 'M 22 0 L 22 64', length: 64 },
	],
	offsets: {
		left: [0, 0.95, 0.95, 0.95, 0.95],
		right: [0, 0.95, 0.95, 0.95, 0.95],
	},
};

export const charU: SvgChar = {
	svgViewBox: { width: 38, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 1 0 L 1 45 A 1 1 0 0 0 37 45 L 37 0',
			length: 146.556640625,
		},
	],
	offsets: {
		left: [0, 0, 0, 0, 0.05],
		right: [0, 0, 0, 0, 0.05],
	},
};

export const charV: SvgChar = {
	svgViewBox: { width: 40, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M -1 -7 L 20 64 L 41 -7',
			length: 148.0810546875,
		},
	],
	offsets: {
		left: [0, 0.2, 0.38, 0.55, 0.75],
		right: [0, 0.2, 0.38, 0.55, 0.75],
	},
};

export const charW: SvgChar = {
	svgViewBox: { width: 50, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 1 -1 L 7 64 L 25 32 L 43 64 L 49 -1',
			length: 203.98291015625,
		},
	],
	offsets: {
		left: [0, 0.03, 0.08, 0.14, 0.18],
		right: [0, 0.03, 0.08, 0.14, 0.18],
	},
};

export const charX: SvgChar = {
	svgViewBox: { width: 42, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M -3 -7 L 45 71', length: 91.58602142333984 },
		{ elementDelay: 0.3, shape: 'M 45 -7 L -3 71', length: 91.58602142333984 },
	],
	offsets: {
		left: [0, 0.36, 0.75, 0.36, 0],
		right: [0, 0.36, 0.75, 0.36, 0],
	},
};

export const charY: SvgChar = {
	svgViewBox: { width: 44, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M -3 -7 L 22 32 L 22 64',
			length: 78.32493591308594,
		},
		{ elementDelay: 0.55, shape: 'M 22 32 L 47 -7', length: 46.3249397277832 },
	],
	offsets: {
		left: [0, 0.38, 0.75, 0.95, 0.95],
		right: [0, 0.38, 0.75, 0.95, 0.95],
	},
};

export const charZ: SvgChar = {
	svgViewBox: { width: 46, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 0 1 L 46 1', length: 46 },
		{ elementDelay: 0.4, shape: 'M 46 1 L 0 63', length: 77.20103454589844 },
		{ elementDelay: 0.8, shape: 'M 0 63 L 46 63', length: 46 },
	],
	offsets: {
		left: [0, 1, 0.7, 0.28, 0],
		right: [0, 0.3, 0.74, 1, 0],
	},
};
