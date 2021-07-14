import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontOptions } from './fonts/index';

export interface PhraseProps {
	children: JSX.Element[];
	margin?: number;
	color?: string;
	size?: number;
	duration?: number;
	font?: FontOptions;
}

const Phrase = ({
	children,
	margin = 0,
	color,
	size = 100,
	duration = 1,
	font = 'font1',
}: PhraseProps) => {
	const [characters, setCharacters] = useState<JSX.Element[]>(children);

	useEffect(() => {
		const newChildren = children.map((child, index) => {
			const newChild = React.cloneElement(child, {
				color: child.props.color ?? color,
				size,
				duration: child.props.duration ?? duration,
				font,
			});
			return (
				<Wrapper margin={margin} key={index}>
					{newChild}
				</Wrapper>
			);
		});
		setCharacters(newChildren);
	}, []);

	return (
		<>
			<Content>{characters}</Content>
		</>
	);
};

export default Phrase;

interface WrapperProps {
	margin: number;
}

const Content = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
`;

const Wrapper = styled.div<WrapperProps>`
	margin-left: ${(props: WrapperProps) => props.margin / 2}px;
	margin-right: ${(props: WrapperProps) => props.margin / 2}px;
	&:first-child {
		margin-left: 0;
	}
	&:last-child {
		margin-right: 0;
	}
`;
