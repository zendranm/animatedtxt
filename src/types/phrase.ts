import { ReactElement } from 'react';

import { CharacterProps } from './character';
import { SvgChar, OffsetsType } from './font';

interface WrapperProps {
	margin: number;
	offsets: OffsetsType;
	svgViewBox: SvgChar['svgViewBox'];
	size: number;
}

export type ChildType = ReactElement<CharacterProps>;

export type WrappedChildType = ReactElement<CharacterProps & WrapperProps>;

export type OffsetWrappedChildType = ReactElement<OffsetWrapperProps>;

export interface OffsetWrapperProps {
	$offsetRight: number;
	$offsetLeft: number;
	$globalMargin: number;
}
