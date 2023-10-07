export interface Element {
	elementDelay: number;
	shape: string;
	length: number;
}

type OffsetType = [number, number, number, number, number];

export type OffsetsType = { left: OffsetType; right: OffsetType };

export interface SvgChar {
	svgViewBox: { width: number; height: number };
	elements: Element[];
	offsets: OffsetsType;
}

const linecapOptions = ['butt', 'round', 'square'] as const;

const charOptions = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
] as const;

const fontOptions = [
	'basic-thin',
	'basic-medium',
	'basic-bold',
	'font1',
] as const;

export type CharOptions = (typeof charOptions)[number];
export type FontOptions = (typeof fontOptions)[number];
export type LinecapOptions = (typeof linecapOptions)[number];
