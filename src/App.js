import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Banner from './components/Banner';
import AiFramework from './components/AiFramework';

const AppContainer = styled.div`
background: #0B0E15;
max-width: 1440px;
width: 1440px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin: 0 auto;
color: #FFFFFF;
padding: 0;
font-family: 'Inter';
`;

function App() {
  return (
    <AppContainer>
      
      <Header />
      <Banner />
        <AiFramework />
    </AppContainer>
  );
}

export default App;
