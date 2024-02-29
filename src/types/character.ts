import {
	LinecapOptions,
	CharOptions,
	FontOptions,
	SvgChar,
	Element,
} from './font';

export interface SvgProps {
	$color: string;
	$size: number;
	$fontWidth: number;
	$linecap: LinecapOptions;
}

export interface PathProps {
	$delay: number;
	$duration: number;
	$length: number;
	key: number;
	$cubicBezier?: [number, number, number, number];
	$isReversed: boolean;
}

export interface ExtendedElement extends Element {
	speed: number;
	elementDuration: number;
}

export interface ExtendedSvgChar extends SvgChar {
	elements: ExtendedElement[];
}

export interface CharacterProps {
	char: CharOptions | SvgChar;
	delay?: number;
	duration?: number;
	color?: string;
	size?: number;
	font?: FontOptions;
	cubicBezier?: PathProps['$cubicBezier'];
	isReversed?: boolean;
}
