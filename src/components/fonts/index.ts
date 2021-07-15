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
	'R',
] as const;
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
		case 'F':
			chosenChar = chosenFont.charF;
			break;
		case 'G':
			chosenChar = chosenFont.charG;
			break;
		case 'H':
			chosenChar = chosenFont.charH;
			break;
		case 'I':
			chosenChar = chosenFont.charI;
			break;
		case 'J':
			chosenChar = chosenFont.charJ;
			break;
		case 'K':
			chosenChar = chosenFont.charK;
			break;
		case 'L':
			chosenChar = chosenFont.charL;
			break;
		case 'M':
			chosenChar = chosenFont.charM;
			break;
		case 'N':
			chosenChar = chosenFont.charN;
			break;
		case 'O':
			chosenChar = chosenFont.charO;
			break;
		case 'P':
			chosenChar = chosenFont.charP;
			break;
		case 'R':
			chosenChar = chosenFont.charR;
			break;
		default:
			chosenChar = defaultCharacter;
			break;
	}

	const { fontWidth } = chosenFont;

	return { chosenChar, fontWidth };
};
