import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontOptions, getCharacter } from './fonts/index';
import Character from './Character';

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
			const tmp = getCharacter(child.props.char, child.props.font).chosenChar.offsets;
			const tmp2 = getCharacter(child.props.char, child.props.font).chosenChar.svgViewBox;
			console.log(tmp);
			const newChild = (
				<Character
					char={child.props.char}
					color={child.props.color ?? color}
					size={size}
					duration={child.props.duration ?? duration}
					font={font}
				/>
			);
			return (
				<OffsetWrapper offsets={tmp} svgViewBox={tmp2} size={size} key={index}>
					<Wrapper margin={margin}>{newChild}</Wrapper>
				</OffsetWrapper>
			);
		});

	const addOffset = (children: JSX.Element[]) => {
		let firstChild: JSX.Element;
		let secondChild: JSX.Element;
		let smallestSpace: number = 1;
		const newChildren: JSX.Element[] = [];

		for (let i = 0; i < children.length - 1; i += 1) {
			firstChild = children[i];
			secondChild = children[i + 1];

			for (let j = 0; j < 3; j += 1) {
				const tmp1 = firstChild.props.offsets.right[j];
				const tmp2 = secondChild.props.offsets.left[j];

				smallestSpace = tmp1 + tmp2 < smallestSpace ? tmp1 + tmp2 : smallestSpace;
			}

			console.log('Offset: ', smallestSpace);

			const width =
				(firstChild.props.svgViewBox.width / firstChild.props.svgViewBox.height) *
				firstChild.props.size;

			console.log('width: ', width);

			console.log('(width / 2) * smallestSpace: ', (width / 2) * smallestSpace);

			const childWithOffset = <Test offset={(width / 2) * smallestSpace}>{firstChild}</Test>;

			newChildren.push(childWithOffset);
		}
		newChildren.push(children[children.length - 1]);

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

const OffsetWrapper = styled.div<{
	offsets: { left: [number, number, number]; right: [number, number, number] } | undefined;
	svgViewBox: any;
	size: number;
}>``;

const Test = styled.div<{ offset: number }>`
	margin-right: -${props => props.offset}px;
`;
