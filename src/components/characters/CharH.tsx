import React from "react";
import styled from 'styled-components'

interface LineProps {
  delay: number;
};

const CharH = () => {
  return (
    <>
      <Line delay={0.5} x1="16" y1="0" x2="16" y2="64" />
      <Line delay={1.0} x1="48" y1="0" x2="48" y2="64" />
      <Line delay={1.5} x1="16" y1="32" x2="48" y2="32" />
    </>
  );
};

export default CharH;

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
