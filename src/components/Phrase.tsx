import React, { useState, useEffect } from "react";
import styled from 'styled-components'

interface PhraseProps {
  children: JSX.Element[];
  margin?: number;
  color?: string;
  size?: number;
}

const Phrase = ({ children, margin = 0, color, size = 100 }: PhraseProps) => {
  const [characters, setCharacters] = useState<JSX.Element[]>(children);

  useEffect(() => {
    const newChildren = children.map((child, index) => {
      return React.cloneElement(child, { margin: margin, color: child.props.color ?? color, size: size, key: index })
    })
    setCharacters(newChildren);
  }, []);

  return (
    <>
      <Content>
        {characters}
      </Content>
    </>
  );
};

const Content = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: flex-start;
align-items: center;
`

export default Phrase;
