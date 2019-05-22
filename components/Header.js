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
  .nav-link {
    font-weight: 400;
    font-size: 1.1em;
  }
  .logo {
    margin-top: 0;
    padding: 0;
    width: 70%;
    height: 70%;
  }
  .navbar {
    padding: 0.8rem;
  }
  .navbar-nav li {
    padding-right: 20px;
  }
`;
class Header extends React.Component {
  state = {
    showMenu: false,
  };

  render() {
    return (
      <HeaderBody className="bar navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <Link href="/">
            <a href="#" className="navbar-brand">
              <img src="/static/img/logo.png" alt="logo" className="logo" />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            onClick={() => this.setState({ showMenu: !this.state.showMenu })}
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
            <Cart />
            <Phone />
          </div>
        </div>
      </HeaderBody>
    );
  }
}

export default Header;
