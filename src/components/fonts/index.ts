import * as font1 from './Font1';
// import * as font2 from './Font2';

export interface Element {
	elementDelay: number;
	shape: string;
	length: number;
}

export interface SvgChar {
	svgViewBox: { width: number; height: number };
	elements: Element[];
}

const charOptions = ['A', 'B', 'C', 'D', 'E', 'H', 'M'] as const;
const fontOptions = ['font1'] as const;

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
		// case 'font2':
		// 	chosenFont = font2;
		// 	break;
		default:
			chosenFont = font1;
			break;
	}

	let chosenChar;
	switch (char) {
		case 'A':
			chosenChar = chosenFont.charA;
			break;
		case 'B':
			chosenChar = chosenFont.charB;
			break;
		case 'C':
			chosenChar = chosenFont.charC;
			break;
		case 'D':
			chosenChar = chosenFont.charD;
			break;
		case 'E':
			chosenChar = chosenFont.charE;
			break;
		case 'H':
			chosenChar = chosenFont.charH;
			break;
		case 'M':
			chosenChar = chosenFont.charM;
			break;
		default:
			chosenChar = defaultCharacter;
			break;
	}

	const { fontWidth } = chosenFont;

	return { chosenChar, fontWidth };
};
