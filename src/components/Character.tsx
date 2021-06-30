import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import { Element, defaultCharacter, charA, charE, charH, charM } from './fonts/Font1'

export interface CharacterProps {
  char: typeof options[number];
  delay?: number;
  duration?: number;
  color?: string;
  size?: number;
}

const options = ["A", "E", "H", "M"] as const;

const Character = ({ char, delay = 0, duration = 1, color = "#000000", size = 100 }: CharacterProps) => {
  const [character, setCharacter] = useState<Element[]>(defaultCharacter);

  useEffect(() => {
    if (char === "A") {
      setCharacter(charA);
    } else if (char === "E") {
      setCharacter(charE);
    } else if (char === "H") {
      setCharacter(charH);
    } else if (char === "M") {
      setCharacter(charM);
    }
    else {
      console.log("Wrong character")
      setCharacter(defaultCharacter)
    }
  }, []);

  return (
    <Content size={size}>
      <Svg color={color} height="100%" width="100%" viewBox="0 0 64 64">
        {character.map(({ elementDelay, shape, length }: Element, index: number) => {
          if (typeof shape !== "string") {
            return <Line delay={delay + elementDelay} duration={duration} x1={shape.x1} y1={shape.y1} x2={shape.x2} y2={shape.y2} key={index} />
          } else {
            return <Path delay={delay + elementDelay} duration={duration} d={shape} length={length} key={index} />
          }
        })}
      </Svg>
    </Content>
  );
};

export default Character;

interface ContentProps {
  size: number;
}

interface SvgProps {
  color: string;
}

interface LineProps {
  delay: number;
  duration: number;
  length?: number;
};

const Content = styled.div<ContentProps>`
height: ${(props: ContentProps) => props.size}px;
width: ${(props: ContentProps) => props.size}px;
`

const Svg = styled.svg<SvgProps>`
stroke: ${(props: SvgProps) => props.color};
stroke-width: 8;
stroke-dasharray: 100%;
stroke-dashoffset: 100%;
`

const Line = styled.line<LineProps>`
animation: dash linear;
animation-duration: ${(props: LineProps) => props.duration}s; //Animation length (without delay)
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
const Path = styled.path<LineProps>`
animation: anim linear;
animation-duration: ${(props: LineProps) => props.duration}s; //Animation length (without delay)
animation-fill-mode: forwards; //Animated object stays instead of disappearing
animation-delay: ${(props: LineProps) => props.delay}s;
stroke-dasharray: ${(props: LineProps) => props.length};
stroke-dashoffset: ${(props: LineProps) => props.length};
stroke-width: 8px;
fill: transparent;
@keyframes anim {
  from {
    stroke-dashoffset: ${(props: LineProps) => props.length};
  }
  to {
    stroke-dashoffset: 0;
  }
}
`