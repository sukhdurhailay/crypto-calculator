import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #efefef;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

`;

const AppStyled = styled.div`
  width: 100%;
  display: flex;
`;

export default function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <AppStyled>
        <h1>CryptoCalc</h1>
      </AppStyled>
    </React.Fragment>
  );
}
