import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Main from '../views/main';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fff;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  * {
    box-sizing: border-box;
  }

`;

const AppStyled = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 40px;
`;

export default function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <AppStyled>
        <Main />
      </AppStyled>
    </React.Fragment>
  );
}
