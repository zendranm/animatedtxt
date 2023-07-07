// eslint-disable-next-line eslint-comments/disable-enable-pair -- comment is provided below
/* eslint-disable @typescript-eslint/no-loss-of-precision -- those lengths of svg elements match the actual svg elements */
import { SvgChar, LinecapOptions } from './index';

export const fontWidth = 8;
export const linecap: LinecapOptions = 'butt';

export const charA: SvgChar = {
	svgViewBox: { width: 52, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 3 68 L 26 0 L 49 68',
			length: 143.5688018798828,
		},
		{ elementDelay: 0.7, shape: 'M 10 48 L 42 48', length: 32 },
	],
	offsets: {
		left: [0.66, 0.48, 0.32, 0.15, 0],
		right: [0.66, 0.48, 0.32, 0.15, 0],
	},
};

export const charB: SvgChar = {
	svgViewBox: { width: 46, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 4 0 L 4 64', length: 64 },
		{
			elementDelay: 0.1,
			shape:
				'M 4 4 L 28 4 C 43 4 43 30 28 30 L 4 30 L 28 30 C 46 30 46 60 28 60 L 4 60',
			length: 179.7399444580078,
		},
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0.2, 0.11, 0.15, 0, 0.1],
	},
};

export const charC: SvgChar = {
	svgViewBox: { width: 50.5, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 48 9 A 28 28 0 1 0 48 55',
			length: 121.96086120605469,
		},
	],
	offsets: {
		left: [0.26, 0.04, 0, 0.04, 0.26],
		right: [0, 0.5, 1, 0.5, 0],
	},
};

export const charD: SvgChar = {
	svgViewBox: { width: 51, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 4 0 L 4 60 L 26 60 C 54 60 54 4 26 4 L 4 4',
			length: 182.10092163085938,
		},
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0.25, 0.03, 0, 0.03, 0.25],
	},
};

export const charE: SvgChar = {
	svgViewBox: { width: 46, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 4 0 L 4 64', length: 64 },
		{ elementDelay: 0.2, shape: 'M 4 4 L 46 4', length: 42 },
		{ elementDelay: 0.42, shape: 'M 4 32 L 40 32', length: 36 },
		{ elementDelay: 0.61, shape: 'M 4 60 L 46 60', length: 42 },
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0, 1, 0.25, 1, 0],
	},
};

export const charF: SvgChar = {
	svgViewBox: { width: 44, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 4 0 L 4 64', length: 64 },
		{ elementDelay: 0.3, shape: 'M 4 4 L 44 4', length: 40 },
		{ elementDelay: 0.6, shape: 'M 4 32 L 38 32', length: 34 },
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0, 1, 0.26, 1, 1],
	},
};

export const charG: SvgChar = {
	svgViewBox: { width: 52, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 48 9 A 28 28 0 1 0 48 55 L 48 35 L 35 35',
			length: 181.0298309326172,
		},
	],
	offsets: {
		left: [0.26, 0.04, 0, 0.04, 0.26],
		right: [0.05, 1, 0, 0, 0],
	},
};

export const charH: SvgChar = {
	svgViewBox: { width: 44, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 4 64 L 4 0', length: 64 },
		{ elementDelay: 0.3, shape: 'M 40 64 L 40 0', length: 64 },
		{ elementDelay: 0.7, shape: 'M 4 32 L 40 32', length: 36 },
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0, 0, 0, 0, 0],
	},
};

export const charI: SvgChar = {
	svgViewBox: { width: 8, height: 64 },
	elements: [{ elementDelay: 0.0, shape: 'M 4 64 L 4 0', length: 64 }],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0, 0, 0, 0, 0],
	},
};

export const charJ: SvgChar = {
	svgViewBox: { width: 34, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 30 0 L 30 47 A 1 1 0 0 1 4 47 L 4 40',
			length: 94.84649658203125,
		},
	],
	offsets: {
		left: [1, 1, 1, 0, 0.08],
		right: [0, 0, 0, 0, 0.08],
	},
};

export const charK: SvgChar = {
	svgViewBox: { width: 45.5, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 4 64 L 4 0', length: 64 },
		{ elementDelay: 0.1, shape: 'M 44 -5 L 4 44', length: 63.25345993041992 },
		{ elementDelay: 0.6, shape: 'M 16 29 L 44 69', length: 48.82622146606445 },
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0, 0.5, 0.8, 0.4, 0],
	},
};

export const charL: SvgChar = {
	svgViewBox: { width: 38, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 4 0 L 4 64', length: 64 },
		{ elementDelay: 0.68, shape: 'M 4 60 L 38 60', length: 34 },
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [1, 1, 1, 1, 0],
	},
};

export const charM: SvgChar = {
	svgViewBox: { width: 56, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 4 64 L 4 0 L 28 32 L 52 0 L 52 64',
			length: 208,
		},
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0, 0, 0, 0, 0],
	},
};

export const charN: SvgChar = {
	svgViewBox: { width: 48, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 4 64 L 4 0 L 44 64 L 44 0',
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
			shape: 'M 4 32 A 24 24 0 1 0 60 32 A 24 24 0 1 0 4 32',
			length: 175.95391845703125,
		},
	],
	offsets: {
		left: [0.2, 0.06, 0, 0.06, 0.2],
		right: [0.2, 0.06, 0, 0.06, 0.2],
	},
};

export const charP: SvgChar = {
	svgViewBox: { width: 44, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 4 0 L 4 64', length: 64 },
		{
			elementDelay: 0.2,
			shape: 'M 4 4 L 26 4 C 44 4 45 34 26 34 L 4 34',
			length: 89.81289672851562,
		},
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0.1, 0, 0.05, 1, 1],
	},
};

export const charQ: SvgChar = {
	svgViewBox: { width: 64, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 4 32 A 24 24 0 1 0 60 32 A 24 24 0 1 0 4 32',
			length: 175.95391845703125,
		},
		{
			elementDelay: 0.5,
			shape: 'M 40 40 L 61 61',
			length: 29.698484420776367,
		},
	],
	offsets: {
		left: [0.2, 0.06, 0, 0.06, 0.2],
		right: [0.2, 0.06, 0, 0.06, 0],
	},
};

export const charR: SvgChar = {
	svgViewBox: { width: 45, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 4 0 L 4 64', length: 64 },
		{
			elementDelay: 0.2,
			shape: 'M 4 4 L 26 4 C 44 4 45 34 26 34 L 4 34',
			length: 89.81289672851562,
		},
		{
			elementDelay: 0.77,
			shape: 'M 26 32 L 42 68',
			length: 39.39543151855469,
		},
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0.13, 0.04, 0.13, 0.26, 0],
	},
};

export const charS: SvgChar = {
	svgViewBox: { width: 44, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape:
				'M 40 19 C 40 -1 4 -1 4 19 C 4 33 16 32 22 32 C 28 32 40 31 40 45 C 40 65 4 65 4 45',
			length: 156.69471740722656,
		},
	],
	offsets: {
		left: [0.1, 0, 0.1, 0, 0.1],
		right: [0.1, 0, 0.1, 0, 0.1],
	},
};

export const charT: SvgChar = {
	svgViewBox: { width: 48, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 0 4 L 48 4', length: 48 },
		{ elementDelay: 0.35, shape: 'M 24 0 L 24 64', length: 64 },
	],
	offsets: {
		left: [0, 0.82, 0.82, 0.82, 0.82],
		right: [0, 0.82, 0.82, 0.82, 0.82],
	},
};

export const charU: SvgChar = {
	svgViewBox: { width: 44, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 4 0 L 4 42 A 1 1 0 0 0 40 42 L 40 0',
			length: 140.55661010742188,
		},
	],
	offsets: {
		left: [0, 0, 0, 0, 0.15],
		right: [0, 0, 0, 0, 0.15],
	},
};

export const charV: SvgChar = {
	svgViewBox: { width: 48, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 3 -6 L 24 64 L 45 -6',
			length: 146.16429138183594,
		},
	],
	offsets: {
		left: [0, 0.18, 0.33, 0.5, 0.66],
		right: [0, 0.18, 0.33, 0.5, 0.66],
	},
};

export const charW: SvgChar = {
	svgViewBox: { width: 56, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 4 -1 L 10 64 L 28 32 L 46 64 L 52 -1',
			length: 203.98291015625,
		},
	],
	offsets: {
		left: [0, 0.03, 0.07, 0.12, 0.18],
		right: [0, 0.03, 0.07, 0.12, 0.18],
	},
};

export const charX: SvgChar = {
	svgViewBox: { width: 50, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 1 -6 L 49 70', length: 89.8888168334961 },
		{ elementDelay: 0.3, shape: 'M 49 -6 L 1 70', length: 89.8888168334961 },
	],
	offsets: {
		left: [0, 0.31, 0.63, 0.3, 0],
		right: [0, 0.31, 0.63, 0.3, 0],
	},
};

export const charY: SvgChar = {
	svgViewBox: { width: 50, height: 64 },
	elements: [
		{
			elementDelay: 0.0,
			shape: 'M 1 -6 L 25 32 L 25 64',
			length: 76.94441223144531,
		},
		{ elementDelay: 0.55, shape: 'M 25 32 L 49 -6', length: 44.94440841674805 },
	],
	offsets: {
		left: [0, 0.31, 0.64, 0.82, 0.82],
		right: [0, 0.31, 0.64, 0.82, 0.82],
	},
};

export const charZ: SvgChar = {
	svgViewBox: { width: 48, height: 64 },
	elements: [
		{ elementDelay: 0.0, shape: 'M 0 4 L 48 4', length: 52 },
		{ elementDelay: 0.35, shape: 'M 47 4 L 1 60', length: 72.4706802368164 },
		{ elementDelay: 0.7, shape: 'M 0 60 L 48 60', length: 52 },
	],
	offsets: {
		left: [0, 1, 0.55, 0.1, 0],
		right: [0, 0.13, 0.55, 1, 0],
	},
};
