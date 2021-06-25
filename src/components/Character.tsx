import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import { Element, defaultCharacter, charE, charH } from './fonts/Font1'

export interface CharacterProps {
  char: typeof options[number];
  color?: string;
  delay?: number;
  margin?: number;
}

const options = ["E", "H"] as const;

const Character = ({ char, color = "#000000", delay = 0, margin = 0 }: CharacterProps) => {
  const [character, setCharacter] = useState<Element[]>(defaultCharacter);

  useEffect(() => {
    if (char === "E") {
      setCharacter(charE);
    } else if (char === "H") {
      setCharacter(charH);
    } else {
      console.log("Wrong character")
      setCharacter(defaultCharacter)
    }
  }, []);

  return (
    <Content margin={margin}>
      <Svg color={color} height="100%" width="100%" viewBox="0 0 64 64">
        {character.map(({ type, elementDelay, x1, y1, x2, y2 }: Element, index: number) => {
          return <Line delay={delay + elementDelay} x1={x1} y1={y1} x2={x2} y2={y2} key={index} />
        })}
      </Svg>
    </Content>
  );
};

export default Character;

interface ContentProps {
  margin: number;
}

interface SvgProps {
  color: string;
}

interface LineProps {
  delay: number;
};

const Content = styled.div<ContentProps>`
height: 300px;
width: 300px;
margin-left: ${(props: ContentProps) => props.margin}px;
margin-right: ${(props: ContentProps) => props.margin}px;
`

const Svg = styled.svg<SvgProps>`
stroke: ${(props: SvgProps) => props.color};
stroke-width: 16;
stroke-dasharray: 100%;
stroke-dashoffset: 100%;
`

const Line = styled.line<LineProps>`
animation: dash linear;
animation-duration: 2s; //Animation length (without delay)
animation-fill-mode: forwards; //Animated object stays instead of disappearing
animation-delay: ${(props: LineProps) => props.delay}s;
@keyframes dash {
  from {
    stroke-dashoffset: 100%;
  }
  to {
    stroke-dashoffset: 0;
  }
}
`