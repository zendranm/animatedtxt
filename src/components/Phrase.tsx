import React, { useState, useEffect } from "react";
import styled from 'styled-components'

interface Props {
  children: JSX.Element[];
  margin?: number;
}

const Phrase = ({ children, margin = 0 }: Props) => {
  const [characters, setCharacters] = useState<JSX.Element[]>(children);

  useEffect(() => {
    const newChildren = children.map((child, index) => {
      return React.cloneElement(child, { margin: margin, key: index })
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
