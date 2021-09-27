import React, { useState, useEffect, ReactElement } from 'react';
import styled from 'styled-components';
import { FontOptions, getCharacter, OffsetsType } from './fonts/index';
import { CharacterProps } from './Character';

type ChildType = ReactElement<CharacterProps>;

type WrappedChildType = ReactElement<WrapperProps>;

type OffsetWrappedChildType = ReactElement<OffsetWrapperProps>;

export interface PhraseProps {
	children: ChildType[];
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
	const [characters, setCharacters] = useState<ChildType[] | OffsetWrappedChildType[]>(children);

	const wrapChildren = (children: ChildType[]): WrappedChildType[] =>
		children.map((child, index) => {
			const { chosenChar } = getCharacter(child.props.char, child.props.font ?? 'font1');
			const newChild: ChildType = React.cloneElement(child, {
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

	const addOffset = (children: WrappedChildType[]): OffsetWrappedChildType[] => {
		const newChildren: OffsetWrappedChildType[] = [];

		let rememberedSmallestSpaceLeft = 0;

		for (let i = 0; i < children.length; i += 1) {
			const firstChild = children[i].props;
			const fcWidth = firstChild.svgViewBox.width;
			const fcHeight = firstChild.svgViewBox.height;
			const fcSize = firstChild.size;
			const fcRightOffset = firstChild.offsets.right;
			const fcMargin = firstChild.margin;

			const scLeftOffset =
				i === children.length - 1 ? [0, 0, 0] : children[i + 1].props.offsets.left;

			let smallestSpaceSum = 1;
			let smallestSpaceRight = 0;
			let smallestSpaceLeft = 0;

			const fcActualWidth = (fcWidth / fcHeight) * fcSize;

			for (let j = 0; j < fcRightOffset.length; j += 1) {
				if (fcRightOffset[j] + scLeftOffset[j] < smallestSpaceSum) {
					smallestSpaceRight = fcRightOffset[j];
					smallestSpaceLeft = scLeftOffset[j];
					smallestSpaceSum = smallestSpaceRight + smallestSpaceLeft;
				}
			}

			const childWithOffset = (
				<OffsetWrapper
					offsetLeft={rememberedSmallestSpaceLeft * (fcActualWidth / 2)}
					offsetRight={smallestSpaceRight * (fcActualWidth / 2)}
					globalMargin={fcMargin}
					key={i}
				>
					{children[i]}
				</OffsetWrapper>
			);

			newChildren.push(childWithOffset);
			rememberedSmallestSpaceLeft = smallestSpaceLeft;
		}
		return newChildren;
	};

	useEffect(() => {
		const wrappedChildren = wrapChildren(children);
		const childrenWithOffset = addOffset(wrappedChildren);
		setCharacters(childrenWithOffset);
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
	offsets: OffsetsType;
	svgViewBox: any;
	size: number;
}

interface OffsetWrapperProps {
	offsetRight: number;
	offsetLeft: number;
	globalMargin: number;
}

const Content = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
`;

const Wrapper = styled.div<WrapperProps>``;

const OffsetWrapper = styled.div<OffsetWrapperProps>`
	${props => `margin-left: calc(${props.globalMargin / 2}px - ${props.offsetLeft}px);`}
	${props => `margin-right: calc(${props.globalMargin / 2}px - ${props.offsetRight}px);`}
	&:first-child {
		margin-left: 0;
	}
	&:last-child {
		margin-right: 0;
	}
`;
