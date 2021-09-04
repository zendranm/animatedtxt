import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontOptions, getCharacter } from './fonts/index';

export interface PhraseProps {
	children: JSX.Element[];
	margin?: number;
	color?: string;
	size?: number;
	duration?: number;
	font?: FontOptions;
}

const Phrase: React.FC<PhraseProps> = ({
	children,
	margin = 0,
	color,
	size = 100,
	duration = 1,
	font = 'font1',
}) => {
	const [characters, setCharacters] = useState<JSX.Element[]>(children);

	const wrapChildren = (children: JSX.Element[]) =>
		children.map((child, index) => {
			const { chosenChar } = getCharacter(child.props.char, child.props.font);
			const newChild = React.cloneElement(child, {
				color: child.props.color ?? color,
				size,
				duration: child.props.duration ?? duration,
				font,
			});

			return (
				<Wrapper
					margin={margin}
					offsets={chosenChar.offsets}
					svgViewBox={chosenChar.svgViewBox}
					size={size}
					key={index}
				>
					{newChild}
				</Wrapper>
			);
		});

	const addOffset = (children: JSX.Element[]) => {
		let firstChild: JSX.Element;
		let secondChild: any[];
		const newChildren: JSX.Element[] = [];

		let tmp2 = 0;

		for (let i = 0; i < children.length; i += 1) {
			firstChild = children[i];
			if (i === children.length - 1) {
				secondChild = [0, 0, 0];
			} else {
				secondChild = children[i + 1].props.offsets.left;
			}
			let smallestSpace: number = 1;

			let tmp1 = 0;
			let tmp3 = 0;

			const width1 =
				(firstChild.props.svgViewBox.width / firstChild.props.svgViewBox.height) *
				firstChild.props.size;

			for (let j = 0; j < firstChild.props.offsets.right.length; j += 1) {
				if (firstChild.props.offsets.right[j] + secondChild[j] < smallestSpace) {
					tmp1 = firstChild.props.offsets.right[j];
					tmp3 = secondChild[j];
					smallestSpace = tmp1 + tmp3;
				}
			}

			const childWithOffset = (
				<Test offsetLeft={tmp2 * (width1 / 2)} offsetRight={tmp1 * (width1 / 2)} key={i}>
					{firstChild}
				</Test>
			);

			newChildren.push(childWithOffset);
			tmp2 = tmp3;
		}

		return newChildren;
	};

	useEffect(() => {
		const newChildren = wrapChildren(children);
		const tmp = addOffset(newChildren);
		setCharacters(tmp);
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
	offsets: { left: [number, number, number]; right: [number, number, number] } | undefined;
	svgViewBox: any;
	size: number;
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

const Test = styled.div<{ offsetRight: number; offsetLeft: number }>`
	margin-left: -${props => props.offsetLeft}px;
	margin-right: -${props => props.offsetRight}px;
`;
