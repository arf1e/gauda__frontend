/*
  Компонент-обертка для всех страниц в проекте
*/
import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Header from './Header';
import Meta from './Meta';

// Сюда все цвета
const theme = {
  mainColor: '#228B22',
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }

  a {
    text-decoration: none;
  }
`;

const StyledPage = styled.div``;

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

class Page extends React.Component {
  state = {};

  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
          <GlobalStyle />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
