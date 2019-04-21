/*
  Компонент, внутри которого собираются воедино все компоненты, необходимые на каждой странице.
*/
import styled from 'styled-components';
import Link from 'next/link';
import Nav from './Nav';
import Cart from './Cart';

const HeaderBody = styled.header`
  .header__inner {
    width: 1050px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
  }

  .header__logo {
    margin-right: 40px;
  }
`;

const Header = () => (
  <HeaderBody className="bar">
    <div className="header__inner">
      <Link href="/">
        <a className="header__logo">Gouda</a>
      </Link>
      <Nav />
      <Cart />
    </div>
  </HeaderBody>
);

export default Header;
