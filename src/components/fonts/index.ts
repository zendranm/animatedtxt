import * as font1 from './Font1';

export interface Element {
	elementDelay: number;
	shape: string;
	length: number;
}

export interface SvgChar {
	svgViewBox: { width: number; height: number };
	elements: Element[];
}

const options = ['A', 'B', 'C', 'D', 'H', 'M'] as const;

export type charOptions = typeof options[number];

export const defaultCharacter: SvgChar = {
	svgViewBox: { width: 0, height: 0 },
	elements: [{ elementDelay: 0, shape: '', length: 0 }],
};

export const getCharacter = (char: charOptions) => {
	switch (char) {
		case 'A':
			return font1.charA;
		case 'B':
			return font1.charB;
		case 'C':
			return font1.charC;
		case 'D':
			return font1.charD;
		case 'H':
			return font1.charH;
		case 'M':
			return font1.charM;
		default:
			return defaultCharacter;
	}
};
