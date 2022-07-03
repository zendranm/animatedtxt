import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import {
	SvgChar,
	Element,
	CharOptions,
	FontOptions,
	LinecapOptions,
	defaultCharacter,
	getCharacterAndFontData,
	getFontData,
	CharacterAndFontData,
	isTypeofSvgChar,
} from './fonts/index';

interface SvgProps {
	color: string;
	size: number;
	fontWidth: number;
	linecap: LinecapOptions;
}

interface PathProps {
	delay: number;
	duration: number;
	length: number;
	key: number;
	cubicBezier?: [number, number, number, number];
}

interface ExtendedElement extends Element {
	speed: number;
	elementDuration: number;
}

interface ExtendedSvgChar extends SvgChar {
	elements: ExtendedElement[];
}

export interface CharacterProps {
	char: CharOptions | SvgChar;
	delay?: number;
	duration?: number;
	color?: string;
	size?: number;
	font?: FontOptions;
	cubicBezier?: PathProps['cubicBezier'];
}

const Character: React.FC<CharacterProps> = ({
	char,
	delay = 0,
	duration = 1,
	color = '#000000',
	size = 100,
	font = 'font1',
	cubicBezier,
}) => {
	const [character, setCharacter] = useState<ExtendedSvgChar>({
		...defaultCharacter,
		elements: [{ elementDelay: 0, shape: '', length: 0, speed: 0, elementDuration: 0 }],
	});
	const [fontWidth, setFontWidth] = useState<number>(1);
	const [linecap, setLinecap] = useState<LinecapOptions>('butt');

	useEffect(() => {
		const { chosenChar, fontWidth, linecap }: CharacterAndFontData = isTypeofSvgChar(char)
			? { chosenChar: char, ...getFontData(font) }
			: getCharacterAndFontData(char, font);
		const newChar = calculateAnimation(chosenChar, duration);
		setCharacter(newChar);
		setFontWidth(fontWidth);
		setLinecap(linecap);
	}, [char, duration, font]);

	const calculateAnimation = (char: SvgChar, animationTime: number) => {
		// Find the longest element in character
		let longestElement = 0;
		char.elements.forEach(element => {
			if (element.length > longestElement) {
				longestElement = element.length;
			}
		});

		// Calculate ratio (speed) of each element's length to the longest element
		const newElements = char.elements.map(element => ({
			...element,
			speed: element.length / longestElement,
		}));

		// Find element with animation that ends last
		let longestAnimation = newElements[0];
		newElements.forEach(element => {
			if (
				element.elementDelay + element.speed >
				longestAnimation.elementDelay + longestAnimation.speed
			) {
				longestAnimation = element;
			}
		});

		// Calculate the time of the end of the animation that ends last
		const lastEnd = (longestAnimation.elementDelay + longestAnimation.speed) * animationTime;

		// Calculate adjustment if animation longer than animationTime
		let alpha = 1;
		if (lastEnd > animationTime) {
			// Calculate time of element's animation which is too long
			const lasts = lastEnd - longestAnimation.elementDelay * animationTime;

			// Calculate allowed time that won't exceed animationTime
			const shouldLast = animationTime - longestAnimation.elementDelay * animationTime;

			alpha = shouldLast / lasts;
		}

		// Calculate each element's animation duration
		const extendedElements = newElements.map(element => ({
			...element,
			elementDuration: element.speed * animationTime * alpha,
		}));

		return { ...char, elements: extendedElements };
	};

	return (
		<Svg
			color={color}
			size={size}
			fontWidth={fontWidth}
			linecap={linecap}
			viewBox={`0 0 ${character.svgViewBox.width} ${character.svgViewBox.height}`}
		>
			{character.elements.map(
				({ elementDelay, shape, length, elementDuration }: ExtendedElement, index: number) => (
					<Path
						delay={delay + elementDelay * duration}
						duration={elementDuration}
						d={shape}
						length={length}
						key={index}
						cubicBezier={cubicBezier}
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

const animate = (length: any) => keyframes`
from {
  stroke-dashoffset: ${length};
}
to {
  stroke-dashoffset: 0;
}
`;

const Path = styled.path<PathProps>`
	fill: transparent;
	stroke-dasharray: ${(props: PathProps) => props.length};
	stroke-dashoffset: ${(props: PathProps) => props.length};
	animation: ${(props: PathProps) => animate(props.length)} 2s linear;
	animation-fill-mode: forwards; //Animated object stays instead of disappearing
	animation-duration: ${(props: PathProps) => props.duration}s; //Animation length (without delay)
	animation-delay: ${props => props.delay}s;
	animation-timing-function: ${(props: PathProps) =>
		props.cubicBezier ? `cubic-bezier(${props.cubicBezier})` : 'linear'};
`;
