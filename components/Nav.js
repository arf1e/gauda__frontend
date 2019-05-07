// Компонент для отрисовки меню

import Link from 'next/link';
import { Mutation, Query } from 'react-apollo';
import styled from 'styled-components';
import { TOGGLE_CART_MUTATION, LOCAL_STATE_QUERY } from './Cart';

const Navigation = styled.nav``;

const Nav = () => (
  <Navigation>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link href="/catalog">
          <a className="nav-link">CheeseFarm</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/me">
          <a className="nav-link">Me</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/new">
          <a className="nav-link">Add Item</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/about">
          <a className="nav-link">About us</a>
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
);

export default Nav;
