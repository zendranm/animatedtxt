export interface Element {
	elementDelay: number;
	shape: string;
	length: number;
}

export interface SvgChar {
	svgViewBox: { width: number; height: number };
	elements: Element[];
}
