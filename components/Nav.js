// Компонент для отрисовки меню
import Link from 'next/link';
import { Mutation, Query } from 'react-apollo';
import styled from 'styled-components';
import { TOGGLE_CART_MUTATION, LOCAL_STATE_QUERY } from './Cart';
import User, { CURRENT_USER_QUERY } from './User';
import Signout from './Signout';

const Navigation = styled.nav`
  .nav-link {
    cursor: pointer;
  }
`;
const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <Navigation>
        <ul className="navbar-nav ml-auto">
          {me && (
            <>
              <li className="nav-item">
                <a className="nav-link">{me.name}</a>
              </li>
              <li className="nav-item">
                <Signout />
              </li>
            </>
          )}
          {!me && (
            <li className="nav-item">
              <Link href="/signup">
                <a className="nav-link">Sign In</a>
              </Link>
            </li>
          )}
          <li className="nav-item">
            <Link href="/catalog">
              <a className="nav-link">CheeseFarm</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/new">
              <a className="nav-link">Add Item</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About Us</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/faq">
              <a className="nav-link">F.A.Q</a>
            </Link>
          </li>
          <li className="nav-item">
            <Mutation mutation={TOGGLE_CART_MUTATION}>
              {toggleCart => (
                <Query query={LOCAL_STATE_QUERY}>
                  {({ data }) => (
                    <a
                      onClick={toggleCart}
                      className="navigation__link--cart nav-link"
                    >
                      Cart {data.cart.length > 0 && `(${data.cart.length})`}
                    </a>
                  )}
                </Query>
              )}
            </Mutation>
          </li>
        </ul>
      </Navigation>
    )}
  </User>
);

export default Nav;
