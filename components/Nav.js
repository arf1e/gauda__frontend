// Компонент для отрисовки меню
import Link from 'next/link';
import { Mutation, Query } from 'react-apollo';
import styled from 'styled-components';
import { TOGGLE_CART_MUTATION, LOCAL_STATE_QUERY } from './Cart';
import Auth, { TOGGLE_AUTH_MUTATION } from './Auth';
import User, { CURRENT_USER_QUERY } from './User';
import Signout from './Signout';
import CartCount from './CartCount';

const Navigation = styled.nav`
  .nav-link {
    cursor: pointer;  
  }
  .nav-item{
    margin-top:${props => props.theme.mobileMarginTopHeaderElement};
  }

  .navigation__link--cart {
    display: flex;
  }
  @media (min-width: ${props => props.theme.tabletWidth}) {
    .nav-item{
      margin-top:0%;
    }
  }
`;

const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <Navigation>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/catalog">
              <a className="nav-link">Cheese Farm</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About Us</a>
            </Link>
          </li>
        </ul>
      </Navigation>
    )}
  </User>
);

export default Nav;
