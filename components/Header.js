/*
  Компонент, внутри которого собираются воедино все компоненты, необходимые на каждой странице.
*/
import styled from 'styled-components';
import Link from 'next/link';
import NProgress from 'nprogress';
import Router from 'next/router';
import Nav from './Nav';
import Cart from './Cart';
import Phone from './Phone';
import Auth from './Auth';
import Search from './Search';
import UserOptions from './UserOptions';
import Container from './styled/Container';
import Inner from './styled/Inner';
// Прогресс-бар
Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  // TODO: Сделать нормальный хэндлинг ошибок
  console.log('error');
  NProgress.done();
};

const HeaderBody = styled.header`
  background-color: #f8f9fa;
  width: 100%;

  .nav-link {
    font-weight: 400;
    font-size: 12px;
    padding: 0;
    margin: 0;
  }

  .container-fluid {
    padding: 0;
    margin: 0;
  }

  .logo {
    margin-left: 10%;
    width: 70%;
    height: 70%;
  }
  .navbar {
    padding: 0.8rem;
  }
  .navbar-nav li {
    margin-right: 20px;
  }
  @media (min-width: ${({ theme }) => theme.tabletWidth}) {
    padding: 15px 0;
  }

  @media (min-width: ${({ theme }) => theme.desktopWidth}) {
    .nav-link {
      font-size: 16px;
    }
    .phonediv {
      margin-left: 5%;
    }
  }
`;
class Header extends React.Component {
  state = {
    showMenu: false,
  };

  render() {
    return (
      <Container>
        <Inner>
          <HeaderBody className="bar navbar navbar-expand-md navbar-light bg-light sticky-top">
            <div className="container-fluid">
              <Link href="/">
                <a href="#" className="navbar-brand">
                  <img
                    src="/static/img/logo.png"
                    alt="logo"
                    className="logo"
                    width="100"
                    height="100"
                  />
                </a>
              </Link>
              <button
                className="navbar-toggler"
                data-toggle="collapse"
                onClick={() =>
                  this.setState({ showMenu: !this.state.showMenu })
                }
              >
                {this.state.showMenu ? (
                  <span className="navbar-toggler-icon" />
                ) : (
                  <span className="navbar-toggler-icon" />
                )}
              </button>
              <div
                className={`collapse navbar-collapse ${
                  this.state.showMenu ? 'show' : ''
                }`}
              >
                <Nav />
                <Search />
                <Phone />

                <Cart />
                <UserOptions />
              </div>
            </div>
          </HeaderBody>
        </Inner>
      </Container>
    );
  }
}

export default Header;
