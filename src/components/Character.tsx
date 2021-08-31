import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import {
	SvgChar,
	Element,
	CharOptions,
	FontOptions,
	LinecapOptions,
	defaultCharacter,
	getCharacter,
} from './fonts/index';

export interface CharacterProps {
	char: CharOptions;
	delay?: number;
	duration?: number;
	color?: string;
	size?: number;
	font?: FontOptions;
}

export interface ExtendedElement extends Element {
	speed: number;
	elementDuration: number;
}

export interface ExtendedSvgChar extends SvgChar {
	elements: ExtendedElement[];
}

const Character: React.FC<CharacterProps> = ({
	char,
	delay = 0,
	duration = 1,
	color = '#000000',
	size = 100,
	font = 'font1',
}) => {
	const [character, setCharacter] = useState<ExtendedSvgChar>({
		...defaultCharacter,
		elements: [{ elementDelay: 0, shape: '', length: 0, speed: 0, elementDuration: 0 }],
	});
	const [fontWidth, setFontWidth] = useState<number>(1);
	const [linecap, setLinecap] = useState<LinecapOptions>('butt');

	useEffect(() => {
		const { chosenChar, fontWidth, linecap } = getCharacter(char, font);
		const newChar = calculateAnimation(chosenChar, duration);
		setCharacter(newChar);
		setFontWidth(fontWidth);
		setLinecap(linecap);
	}, []);

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
		<TestParent>
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
						/>
					),
				)}
			</Svg>
			{character?.offsets && (
				<TestChild>
					<Side>
						{character.offsets.left.map(block => (
							<Block marginLeft={block} marginRight={0} />
						))}
					</Side>
					<Side>
						{character.offsets.left.map(block => (
							<Block marginLeft={0} marginRight={block} />
						))}
					</Side>
				</TestChild>
			)}
		</TestParent>
	);
};

export default Character;

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
}

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
`;

const TestParent = styled.div`
	background: violet;
	position: relative;
`;

const TestChild = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const Side = styled.div`
	width: 50%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Block = styled.div<{ marginLeft: number; marginRight: number }>`
	width: 100%;
	height: calc(100% / 3);
	border-style: solid;
	border-color: green;
	box-sizing: border-box;
	margin-left: ${props => props.marginLeft}px;
	margin-right: ${props => props.marginRight}%;
`;
