import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { SvgChar, Element } from './fonts/index';
import * as font1 from './fonts/Font1';

export interface CharacterProps {
	char: typeof options[number];
	delay?: number;
	duration?: number;
	color?: string;
	size?: number;
}

const options = ['A', 'B', 'C', 'H', 'M'] as const;

const Character = ({
	char,
	delay = 0,
	duration = 1,
	color = '#000000',
	size = 100,
}: CharacterProps) => {
	const [character, setCharacter] = useState<SvgChar>(font1.defaultCharacter);

	useEffect(() => {
		if (char === 'A') {
			setCharacter(font1.charA);
		} else if (char === 'B') {
			setCharacter(font1.charB);
		} else if (char === 'C') {
			setCharacter(font1.charC);
		} else if (char === 'H') {
			setCharacter(font1.charH);
		} else if (char === 'M') {
			setCharacter(font1.charM);
		} else {
			setCharacter(font1.defaultCharacter);
		}
	}, []);

	return (
		<Svg
			color={color}
			size={size}
			viewBox={`0 0 ${character.svgViewBox.width} ${character.svgViewBox.height}`}
		>
			{character.elements.map(({ elementDelay, shape, length }: Element, index: number) => (
				<Path
					delay={delay + elementDelay}
					duration={duration}
					d={shape}
					length={length}
					key={index}
				/>
			))}
		</Svg>
	);
};

export default Character;

interface SvgProps {
	color: string;
	size: number;
}

interface PathProps {
	delay: number;
	duration: number;
	length?: number;
	key: number;
}

const Svg = styled.svg<SvgProps>`
	stroke: ${(props: SvgProps) => props.color};
	height: ${(props: SvgProps) => props.size}px;
	stroke-width: 16;
`;

const animate = (length: any) => keyframes`
from {
  stroke-dashoffset: ${length ?? '100%'};
}
to {
  stroke-dashoffset: 0;
}
`;

const Path = styled.path<PathProps>`
	fill: transparent;
	stroke-dasharray: ${(props: PathProps) => props.length ?? '100%'};
	stroke-dashoffset: ${(props: PathProps) => props.length ?? '100%'};
	animation: ${(props: PathProps) => animate(props.length)} 2s linear;
	animation-fill-mode: forwards; //Animated object stays instead of disappearing
	animation-duration: ${(props: PathProps) => props.duration}s; //Animation length (without delay)
	animation-delay: ${props => props.delay}s;
`;
