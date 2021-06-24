import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import CharA from "./characters/CharA";
import CharB from "./characters/CharB";
import CharH from "./characters/CharH";

interface Props {
  char: typeof options[number];
}

const options = ["A", "B"] as const;

const Character = (props: Props) => {
  const [character, setCharacter] = useState<React.ReactElement>(<div />);

  useEffect(() => {
    if (props.char === "A") {
      setCharacter(<CharA />);
    } else if (props.char === "B") {
      setCharacter(<CharB />);
    } else if (props.char === "H") {
      setCharacter(<CharH />);
    } else {
      setCharacter(<div>Wrong character again</div>);
    }
  }, []);

  return (
    <Content>
      <Svg height="100%" width="100%" viewBox="0 0 64 64">
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

const Svg = styled.svg`
stroke: #000000;
stroke-width: 16;
stroke-dasharray: 100%;
stroke-dashoffset: 100%;
`