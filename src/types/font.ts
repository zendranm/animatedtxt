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

export type CharOptions =
	| 'A'
	| 'B'
	| 'C'
	| 'D'
	| 'E'
	| 'F'
	| 'G'
	| 'H'
	| 'I'
	| 'J'
	| 'K'
	| 'L'
	| 'M'
	| 'N'
	| 'O'
	| 'P'
	| 'Q'
	| 'R'
	| 'S'
	| 'T'
	| 'U'
	| 'V'
	| 'W'
	| 'X'
	| 'Y'
	| 'Z';
export type FontOptions = 'basic-thin' | 'basic-medium' | 'basic-bold' | 'font1';
export type LinecapOptions = 'butt' | 'round' | 'square';

export interface CharacterAndFontData {
	chosenChar: SvgChar;
	fontWidth: number;
	linecap: LinecapOptions;
}
