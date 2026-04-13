import { SvgChar } from '@/types/font';

export function isTypeofSvgChar(char: unknown): char is SvgChar {
	return (char as SvgChar)?.svgViewBox !== undefined;
}
