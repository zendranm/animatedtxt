import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import {
	ExtendedSvgChar,
	PathProps,
	ExtendedElement,
	SvgProps,
	CharacterProps,
} from '@/types/character';
import { LinecapOptions, CharacterAndFontData } from '@/types/font';
import { calculateAnimation, reverseElements } from '@/utils/characterUtils';
import {
	defaultCharacter,
	getCharacterAndFontData,
	getFontData,
	isTypeofSvgChar,
} from '@/utils/common';

const Character: React.FC<CharacterProps> = ({
	char,
	delay = 0,
	duration = 1,
	color = '#000000',
	size = 100,
	font = 'font1',
	cubicBezier,
	isReversed = false,
}) => {
	const [character, setCharacter] = useState<ExtendedSvgChar>({
		...defaultCharacter,
		elements: [
			{ elementDelay: 0, shape: '', length: 0, speed: 0, elementDuration: 0 },
		],
	});
	const [fontWidth, setFontWidth] = useState<number>(1);
	const [linecap, setLinecap] = useState<LinecapOptions>('butt');

	useEffect(() => {
		const { chosenChar, fontWidth, linecap }: CharacterAndFontData =
			isTypeofSvgChar(char)
				? { chosenChar: char, ...getFontData(font) }
				: getCharacterAndFontData(char, font);
		const newChar = calculateAnimation(chosenChar, duration);
		setCharacter(isReversed ? reverseElements(newChar) : newChar);
		setFontWidth(fontWidth);
		setLinecap(linecap);
	}, [char, duration, font, isReversed]);

	return (
		<Svg
			color={color}
			size={size}
			fontWidth={fontWidth}
			linecap={linecap}
			viewBox={`0 0 ${character.svgViewBox.width} ${character.svgViewBox.height}`}
		>
			{character.elements.map(
				(
					{ elementDelay, shape, length, elementDuration }: ExtendedElement,
					index: number,
				) => (
					<Path
						delay={delay + elementDelay * duration}
						duration={elementDuration}
						d={shape}
						length={length}
						key={index}
						cubicBezier={cubicBezier}
						isReversed={isReversed}
					/>
				),
			)}
		</Svg>
	);
};

export default Character;

const Svg = styled.svg<SvgProps>`
	stroke: ${(props: SvgProps) => props.color};
	height: ${(props: SvgProps) => props.size}px;
	stroke-width: ${(props: SvgProps) => props.fontWidth};
	stroke-linecap: ${(props: SvgProps) => props.linecap};
`;

const animate = (length: number, isReversed: boolean) => keyframes`
from {
	stroke-dashoffset: ${isReversed ? 0 : length};
}
to {
	stroke-dashoffset: ${isReversed ? length : 0};
}
`;

const Path = styled.path<PathProps>`
	fill: transparent;
	stroke-dasharray: ${(props: PathProps) => props.length};
	stroke-dashoffset: ${(props: PathProps) =>
		props.isReversed ? 0 : props.length};
	animation: ${(props: PathProps) => animate(props.length, props.isReversed)} 2s
		linear;
	animation-fill-mode: forwards; //Animated object stays instead of disappearing
	animation-duration: ${(props: PathProps) =>
		props.duration}s; //Animation length (without delay)
	animation-delay: ${props => props.delay}s;
	animation-timing-function: ${(props: PathProps) =>
		props.cubicBezier
			? `cubic-bezier(${props.cubicBezier.toString()})`
			: 'linear'};
`;
