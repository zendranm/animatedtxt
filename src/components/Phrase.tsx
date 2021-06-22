import React from "react";
import styled from 'styled-components'

const Content = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: flex-start;
align-items: center;
`

interface Props {
  children: React.ReactNode
}

const Phrase = (props: Props) => {
  return (
    <>
      <Content>
        {props.children}
      </Content>
    </>
  );
};

export default Phrase;
