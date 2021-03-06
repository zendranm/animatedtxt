import * as basicThin from './basicThin';
import * as basicMedium from './basicMedium';
import * as basicBold from './basicBold';

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

export function isTypeofSvgChar(char: unknown): char is SvgChar {
	return (char as SvgChar).svgViewBox !== undefined;
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
const fontOptions = ['basic-thin', 'basic-medium', 'basic-bold', 'font1'] as const;
const linecapOptions = ['butt', 'round', 'square'] as const;

export type CharOptions = typeof charOptions[number];
export type FontOptions = typeof fontOptions[number];
export type LinecapOptions = typeof linecapOptions[number];

export const defaultCharacter: SvgChar = {
	svgViewBox: { width: 0, height: 0 },
	elements: [{ elementDelay: 0, shape: '', length: 0 }],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0, 0, 0, 0, 0],
	},
};

export interface CharacterAndFontData {
	chosenChar: SvgChar;
	fontWidth: number;
	linecap: LinecapOptions;
}

export const getCharacterAndFontData = (
	char: CharOptions,
	font: FontOptions,
): CharacterAndFontData => {
	let chosenFont;
	switch (font) {
		case 'basic-thin':
			chosenFont = basicThin;
			break;
		case 'basic-medium':
			chosenFont = basicMedium;
			break;
		case 'basic-bold':
		case 'font1':
			chosenFont = basicBold;
			break;
		default:
			chosenFont = basicBold;
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
		case 'Q':
			chosenChar = chosenFont.charQ;
			break;
		case 'R':
			chosenChar = chosenFont.charR;
			break;
		case 'S':
			chosenChar = chosenFont.charS;
			break;
		case 'T':
			chosenChar = chosenFont.charT;
			break;
		case 'U':
			chosenChar = chosenFont.charU;
			break;
		case 'V':
			chosenChar = chosenFont.charV;
			break;
		case 'W':
			chosenChar = chosenFont.charW;
			break;
		case 'X':
			chosenChar = chosenFont.charX;
			break;
		case 'Y':
			chosenChar = chosenFont.charY;
			break;
		case 'Z':
			chosenChar = chosenFont.charZ;
			break;
		default:
			chosenChar = defaultCharacter;
			break;
	}

	const { fontWidth, linecap } = chosenFont;

	return { chosenChar, fontWidth, linecap };
};

export const getFontData = (font: FontOptions): Omit<CharacterAndFontData, 'chosenChar'> => {
	let chosenFont;
	switch (font) {
		case 'basic-thin':
			chosenFont = basicThin;
			break;
		case 'basic-medium':
			chosenFont = basicMedium;
			break;
		case 'basic-bold':
		case 'font1':
			chosenFont = basicBold;
			break;
		default:
			chosenFont = basicBold;
			break;
	}

	const { fontWidth, linecap } = chosenFont;

	return { fontWidth, linecap };
};
