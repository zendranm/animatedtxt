import * as font1 from './Font1';
import * as font2 from './Font2';

export interface Element {
	elementDelay: number;
	shape: string;
	length: number;
}

export interface SvgChar {
	svgViewBox: { width: number; height: number };
	elements: Element[];
}

const charOptions = ['A', 'B', 'C', 'D', 'H', 'M'] as const;
const fontOptions = ['font1', 'font2'] as const;

export type CharOptions = typeof charOptions[number];
export type FontOptions = typeof fontOptions[number];

export const defaultCharacter: SvgChar = {
	svgViewBox: { width: 0, height: 0 },
	elements: [{ elementDelay: 0, shape: '', length: 0 }],
};

export const getCharacter = (char: CharOptions, font: FontOptions) => {
	let chosenFont;
	switch (font) {
		case 'font1':
			chosenFont = font1;
			break;
		case 'font2':
			chosenFont = font2;
			break;
		default:
			chosenFont = font1;
			break;
	}

	switch (char) {
		case 'A':
			return chosenFont.charA;
		case 'B':
			return chosenFont.charB;
		case 'C':
			return chosenFont.charC;
		case 'D':
			return chosenFont.charD;
		case 'H':
			return chosenFont.charH;
		case 'M':
			return chosenFont.charM;
		default:
			return defaultCharacter;
	}
};
