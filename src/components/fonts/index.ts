import * as basicBold from '@/fonts/basicBold';
import * as basicMedium from '@/fonts/basicMedium';
import * as basicThin from '@/fonts/basicThin';
import {
	SvgChar,
	LinecapOptions,
	CharOptions,
	FontOptions,
} from '@/types/font';

export function isTypeofSvgChar(char: unknown): char is SvgChar {
	return (char as SvgChar).svgViewBox !== undefined;
}

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

// eslint-disable-next-line complexity -- TODO: instead of importing many objects and using switch to find correct char use dictionary like map
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

export const getFontData = (
	font: FontOptions,
): Omit<CharacterAndFontData, 'chosenChar'> => {
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
