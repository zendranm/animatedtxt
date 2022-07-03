import React, { useState, useEffect, useCallback, ReactElement } from 'react';
import styled from 'styled-components';
import { FontOptions, getCharacterAndFontData, OffsetsType, isTypeofSvgChar } from './fonts/index';
import { CharacterProps } from './Character';

type ChildType = ReactElement<CharacterProps>;

type WrappedChildType = ReactElement<CharacterProps & WrapperProps>;

type OffsetWrappedChildType = ReactElement<OffsetWrapperProps>;

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

interface PhraseProps {
	children: ChildType | ChildType[];
	margin?: number;
	duration?: number;
	color?: string;
	size?: number;
	font?: FontOptions;
	cubicBezier?: CharacterProps['cubicBezier'];
}

const Phrase: React.FC<PhraseProps> = ({
	children,
	margin = 0,
	duration = 1,
	color,
	size = 100,
	font = 'font1',
	cubicBezier,
}) => {
	const [characters, setCharacters] = useState<OffsetWrappedChildType[]>([]);

	const wrapChildren = useCallback(
		(children: ChildType[]): WrappedChildType[] =>
			children.map(child => {
				const { chosenChar } = isTypeofSvgChar(child.props.char)
					? { chosenChar: child.props.char }
					: getCharacterAndFontData(child.props.char, child.props.font ?? font);
				const newChild: WrappedChildType = React.cloneElement(child as React.ReactElement<any>, {
					duration: child.props.duration ?? duration,
					color: child.props.color ?? color,
					size,
					font,
					cubicBezier: child.props.cubicBezier ?? cubicBezier,
					margin,
					offsets: chosenChar.offsets,
					svgViewBox: chosenChar.svgViewBox,
				});

				return newChild;
			}),
		[color, cubicBezier, duration, font, margin, size],
	);

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

			let smallestSpaceSum = 2;
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
		const childrenArray = (Array.isArray(children) ? children : [children]) as ChildType[];
		const wrappedChildren = wrapChildren(childrenArray);
		const childrenWithOffset = addOffset(wrappedChildren);
		setCharacters(childrenWithOffset);
	}, [children, wrapChildren]);

	return <Content>{characters}</Content>;
};

export default Phrase;

const Content = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
`;

const OffsetWrapper = styled.div<OffsetWrapperProps>`
	display: inline-flex;
	${props => `margin-left: calc(${props.globalMargin / 2}px - ${props.offsetLeft}px);`}
	${props => `margin-right: calc(${props.globalMargin / 2}px - ${props.offsetRight}px);`}
	&:first-child {
		margin-left: 0;
	}
	&:last-child {
		margin-right: 0;
	}
`;
