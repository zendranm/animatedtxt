import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { SvgChar, Element, defaultCharacter, charA, charB, charH, charM } from './fonts/Font1';

export interface CharacterProps {
	char: typeof options[number];
	delay?: number;
	duration?: number;
	color?: string;
	size?: number;
}

const options = ['A', 'B', 'H', 'M'] as const;

const Character = ({
	char,
	delay = 0,
	duration = 1,
	color = '#000000',
	size = 100,
}: CharacterProps) => {
	const [character, setCharacter] = useState<SvgChar>(defaultCharacter);

	useEffect(() => {
		if (char === 'A') {
			setCharacter(charA);
		} else if (char === 'B') {
			setCharacter(charB);
		} else if (char === 'H') {
			setCharacter(charH);
		} else if (char === 'M') {
			setCharacter(charM);
		} else {
			setCharacter(defaultCharacter);
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
