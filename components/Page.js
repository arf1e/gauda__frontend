/*
  Компонент-обертка для всех страниц в проекте
*/
import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Header from './Header';
import Meta from './Meta';

// Сюда все цвета и вьюпорты
const theme = {
  mainColor: '#175842',
  mainYellowColor: '#f4c730',
  mainVioletColor: '#563d7c',
  mobileWidth: "320px",
  mobileOnlyWidth: "767px",
  tabletWidth : "768px",
  tableOnlyWidth: "1149px",
  desktopWidth: "1150px"
};


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Raleway:200,300,400,500|Roboto+Slab:100,300,400,700,800');
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    font-family: 'Raleway', sans-serif;
    font-weight: 200;
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
  margin: 0 auto;
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
