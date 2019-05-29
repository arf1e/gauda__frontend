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
  mainSubColor: '#124433',
  mainActiveColor: '#0d3024',
  mainYellowColor: '#f4c730',
  mainVioletColor: '#563d7c',
  mobileWidth: '320px',
  mobileOnlyWidth: '767px',
  tabletWidth: '768px',
  tableOnlyWidth: '1149px',
  desktopWidth: '1150px',
  mainColorRGB: '23,88,66',
  border: '#e5e5e5',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans Condensed';
    font-style: normal;
    font-weight: 300;
    src: url('static/fonts/condensed-light.ttf');
  }

  @font-face {
    font-family: 'Open Sans Condensed';
    font-style: normal;
    font-weight: 700;
    src: url('static/fonts/condensed-bold.ttf');
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    font-family: 'Open Sans Condensed';
    font-weight: 300;
    letter-spacing: 1px;
  }

  h1, h2, h3, h4, h5, h6, strong, b {
    font-weight: 700;
    text-transform: uppercase;
  }

  body {
    padding: 0;
    margin: 0;
    font-weight: 400;
    line-height: 1.5;
  }
  .textCheeseFarm {
    margin-bottom: 3rem;
    background: #EEF5FD;
    color: #545556;
    font-size: 20px;
    justify-content: center;
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
