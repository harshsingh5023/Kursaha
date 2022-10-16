import React from 'react';
import styled from 'styled-components';
import RightAiFrame from './RightAiFrame';
import LeftAiFrame from './LeftAiFrame';


const AiWrapper= styled.div`
margin: 70px 0;
background: #1C232B;
width: 100%;
display: flex;
position: relative;
margin: 50px;
`;


const AiFramework = () => {
  return (
    <AiWrapper>
        <LeftAiFrame />
        <RightAiFrame />
    </AiWrapper>
  )
}

export default AiFramework
