import { CharacterAndFontData, FontOptions } from '@/types/font';
import * as basicBold from '@/fonts/basicBold';
import * as basicMedium from '@/fonts/basicMedium';
import * as basicThin from '@/fonts/basicThin';

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
