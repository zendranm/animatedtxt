import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import CharA from "./characters/CharA";
import CharB from "./characters/CharB";
import CharH from "./characters/CharH";

interface Props {
  char: typeof options[number];
  color?: string;
  delay?: number;
}

interface SvgProps {
  color: string;
}

const options = ["A", "B"] as const;

const Character = ({ char, color = "#000000", delay = 0 }: Props) => {
  const [character, setCharacter] = useState<React.ReactElement>(<div />);

  useEffect(() => {
    if (char === "A") {
      setCharacter(<CharA />);
    } else if (char === "B") {
      setCharacter(<CharB />);
    } else if (char === "H") {
      setCharacter(<CharH />);
    } else {
      setCharacter(<div>Wrong character again</div>);
    }
  }, []);

  return (
    <Content>
      <Svg color={color} height="100%" width="100%" viewBox="0 0 64 64">
        {character}
      </Svg>
    </Content>
  );
};

export default Character;

const Content = styled.div`
height: 300px;
width: 300px;
`

const Svg = styled.svg<SvgProps>`
stroke: ${(props: SvgProps) => props.color};
stroke-width: 16;
stroke-dasharray: 100%;
stroke-dashoffset: 100%;
`