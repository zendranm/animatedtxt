// eslint-disable-next-line eslint-comments/disable-enable-pair -- comment is provided below
/* eslint-disable @typescript-eslint/no-loss-of-precision -- those lengths of svg elements match the actual svg elements */
import { SvgChar, LinecapOptions } from '@/types/font';

export const fontWidth = 16;
export const linecap: LinecapOptions = 'butt';

export const charA: SvgChar = {
	svgViewBox: { width: 56, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 7 70 L 28 0 L 49 70',
			length: 146.16429138183594,
		},
		{ elementDelay: 0.7, shape: 'M 8 48 L 40 48', length: 32 },
	],
	offsets: {
		left: [0.55, 0.4, 0.3, 0.23, 0],
		right: [0.55, 0.4, 0.3, 0.23, 0],
	},
};

export const charB: SvgChar = {
	svgViewBox: { width: 52, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 8 0 L 8 64', length: 64 },
		{
			elementDelay: 0.1,
			shape:
				'M 8 8 L 30 8 C 45 8 45 30 30 30 L 8 30 L 30 30 C 48 30 48 56 30 56 L 8 56',
			length: 165.31085205078125,
		},
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0.2, 0.1, 0, 0, 0],
	},
};

export const charC: SvgChar = {
	svgViewBox: { width: 55, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 49 15 A 24 24 0 1 0 49 49',
			length: 113.02982330322266,
		},
	],
	offsets: {
		left: [0.3, 0.1, 0, 0.1, 0.3],
		right: [0, 0.2, 1, 0.2, 0],
	},
};

export const charD: SvgChar = {
	svgViewBox: { width: 52, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 8 0 L 8 56 L 26 56 C 50 56 50 8 26 8 L 8 8',
			length: 158.94357299804688,
		},
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0.3, 0.05, 0, 0.05, 0.3],
	},
};

export const charE: SvgChar = {
	svgViewBox: { width: 48, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 8 0 L 8 64', length: 64 },
		{ elementDelay: 0.2, shape: 'M 8 8 L 48 8', length: 40 },
		{ elementDelay: 0.42, shape: 'M 8 32 L 42 32', length: 34 },
		{ elementDelay: 0.61, shape: 'M 8 56 L 48 56', length: 40 },
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0, 0, 0.2, 0, 0],
	},
};

export const charF: SvgChar = {
	svgViewBox: { width: 48, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 8 0 L 8 64', length: 64 },
		{ elementDelay: 0.3, shape: 'M 8 8 L 48 8', length: 40 },
		{ elementDelay: 0.6, shape: 'M 8 32 L 42 32', length: 34 },
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0, 0, 0.2, 1, 1],
	},
};

export const charG: SvgChar = {
	svgViewBox: { width: 55, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 49 15 A 24 24 0 1 0 49 49 L 49 35 L 35 35',
			length: 141.0298309326172,
		},
	],
	offsets: {
		left: [0.3, 0.1, 0, 0.1, 0.3],
		right: [0, 0.1, 0, 0, 0],
	},
};

export const charH: SvgChar = {
	svgViewBox: { width: 48, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 8 64 L 8 0', length: 64 },
		{ elementDelay: 0.3, shape: 'M 40 64 L 40 0', length: 64 },
		{ elementDelay: 0.7, shape: 'M 8 32 L 40 32', length: 32 },
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0, 0, 0, 0, 0],
	},
};

export const charI: SvgChar = {
	svgViewBox: { width: 16, height: 64 },
	elements: [{ elementDelay: 0.0, shape: 'M 8 64 L 8 0', length: 64 }],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0, 0, 0, 0, 0],
	},
};

export const charJ: SvgChar = {
	svgViewBox: { width: 40, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 32 0 L 32 44 A 1 1 0 0 1 8 44 L 8 35',
			length: 90.70447540283203,
		},
	],
	offsets: {
		left: [1, 1, 0, 0, 0.2],
		right: [0, 0, 0, 0, 0.2],
	},
};

export const charK: SvgChar = {
	svgViewBox: { width: 54.5, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 8 64 L 8 0', length: 64 },
		{ elementDelay: 0.1, shape: 'M 48 -5 L 8 44', length: 63.25345993041992 },
		{ elementDelay: 0.6, shape: 'M 20 29 L 48 69', length: 48.82622146606445 },
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0, 0.4, 0.6, 0.4, 0],
	},
};

export const charL: SvgChar = {
	svgViewBox: { width: 40, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 8 0 L 8 64', length: 64 },
		{ elementDelay: 0.68, shape: 'M 8 56 L 40 56', length: 32 },
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [1, 1, 1, 0, 0],
	},
};

export const charM: SvgChar = {
	svgViewBox: { width: 64, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 8 64 L 8 0 L 32 32 L 56 0 L 56 64',
			length: 208,
		},
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0, 0, 0, 0, 0],
	},
};

export const charN: SvgChar = {
	svgViewBox: { width: 56, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 8 64 L 8 0 L 48 64 L 48 0',
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
			shape: 'M 8 32 A 24 24 0 1 0 56 32 A 24 24 0 1 0 8 32',
			length: 150.81761169433594,
		},
	],
	offsets: {
		left: [0.3, 0.1, 0, 0.1, 0.3],
		right: [0.3, 0.1, 0, 0.1, 0.3],
	},
};

export const charP: SvgChar = {
	svgViewBox: { width: 50, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 8 0 L 8 64', length: 64 },
		{
			elementDelay: 0.2,
			shape: 'M 8 8 L 30 8 C 46 8 46 32 30 32 L 8 32',
			length: 82.05984497070312,
		},
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0.1, 0, 0, 1, 1],
	},
};

export const charQ: SvgChar = {
	svgViewBox: { width: 64, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 8 32 A 24 24 0 1 0 56 32 A 24 24 0 1 0 8 32',
			length: 150.81761169433594,
		},
		{
			elementDelay: 0.5,
			shape: 'M 40 40 L 58 58',
			length: 25.45584487915039,
		},
	],
	offsets: {
		left: [0.3, 0.1, 0, 0.1, 0.3],
		right: [0.3, 0.1, 0, 0, 0],
	},
};

export const charR: SvgChar = {
	svgViewBox: { width: 50, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 8 0 L 8 64', length: 64 },
		{
			elementDelay: 0.2,
			shape: 'M 8 8 L 30 8 C 46 8 46 32 30 32 L 8 32',
			length: 82.05984497070312,
		},
		{
			elementDelay: 0.75,
			shape: 'M 26 32 L 42 68',
			length: 39.39543151855469,
		},
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0.1, 0, 0.1, 0.3, 0],
	},
};

export const charS: SvgChar = {
	svgViewBox: { width: 48, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape:
				'M 40 20 C 40 4 8 4 8 20 C 8 33 20 32 24 32 C 28 32 40 31 40 44 C 40 60 8 60 8 44',
			length: 135.67141723632812,
		},
	],
	offsets: {
		left: [0.2, 0, 0, 0, 0.2],
		right: [0.2, 0, 0, 0, 0.2],
	},
};

export const charT: SvgChar = {
	svgViewBox: { width: 48, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 0 8 L 48 8', length: 48 },
		{ elementDelay: 0.35, shape: 'M 24 0 L 24 64', length: 64 },
	],
	offsets: {
		left: [0, 0, 0.65, 0.65, 0.65],
		right: [0, 0, 0.65, 0.65, 0.65],
	},
};

export const charU: SvgChar = {
	svgViewBox: { width: 48, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 8 0 L 8 40 A 1 1 0 0 0 40 40 L 40 0',
			length: 130.27256774902344,
		},
	],
	offsets: {
		left: [0, 0, 0, 0, 0.2],
		right: [0, 0, 0, 0, 0.2],
	},
};

export const charV: SvgChar = {
	svgViewBox: { width: 56, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 7 -6 L 28 64 L 49 -6',
			length: 146.16429138183594,
		},
	],
	offsets: {
		left: [0, 0.2, 0.25, 0.5, 0.55],
		right: [0, 0.2, 0.25, 0.5, 0.55],
	},
};

export const charW: SvgChar = {
	svgViewBox: { width: 64, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 8 -1 L 14 64 L 32 32 L 50 64 L 56 -1',
			length: 203.98291015625,
		},
	],
	offsets: {
		left: [0, 0, 0.05, 0.1, 0.2],
		right: [0, 0, 0.05, 0.1, 0.2],
	},
};

export const charX: SvgChar = {
	svgViewBox: { width: 60, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 6 -6 L 54 70', length: 89.8888168334961 },
		{ elementDelay: 0.3, shape: 'M 54 -6 L 6 70', length: 89.8888168334961 },
	],
	offsets: {
		left: [0, 0.3, 0.5, 0.3, 0],
		right: [0, 0.3, 0.5, 0.3, 0],
	},
};

export const charY: SvgChar = {
	svgViewBox: { width: 60, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 6 -6 L 30 32 L 30 64',
			length: 76.94441223144531,
		},
		{ elementDelay: 0.55, shape: 'M 30 32 L 54 -6', length: 44.94440841674805 },
	],
	offsets: {
		left: [0, 0.25, 0.55, 0.7, 0.7],
		right: [0, 0.25, 0.55, 0.7, 0.7],
	},
};

export const charZ: SvgChar = {
	svgViewBox: { width: 52, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 0 8 L 52 8', length: 52 },
		{ elementDelay: 0.35, shape: 'M 49 8 L 3 56', length: 66.48307800292969 },
		{ elementDelay: 0.7, shape: 'M 0 56 L 52 56', length: 52 },
	],
	offsets: {
		left: [0, 0, 0.3, 0, 0],
		right: [0, 0, 0.3, 0, 0],
	},
};
