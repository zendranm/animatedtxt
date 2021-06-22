import React from "react";
import styled from 'styled-components'

const Svg = styled.svg`
stroke: #000000;
stroke-width: 36;
`

type LineProp = {
  delay: number;
};

const Line = styled.line<LineProp>`
stroke-dasharray: 100%;
stroke-dashoffset: 100%;
animation: dash linear;
animation-duration: 5s; //Animation length (without delay)
animation-fill-mode: forwards; //Animated object stays instead of disappearing
animation-delay: ${(props: LineProp) => props.delay}s;

@keyframes dash {
  from {
    stroke-dashoffset: 100%;
  }
  to {
    stroke-dashoffset: 0;
  }
}
`

const CharH = () => {
  return (
    <div>
      <Svg viewBox="0 0 590 140">
        <Line delay={0.5} x1="20" y1="0" x2="20" y2="140" />
        <Line delay={1.0} x1="90" y1="0" x2="90" y2="140" />
        <Line delay={1.5} x1="20" y1="70" x2="90" y2="70" />
      </Svg>
    </div>
  );
};

export default CharH;
