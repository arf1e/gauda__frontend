// Компонент для отрисовки меню

import Link from 'next/link';
import { Mutation, Query } from 'react-apollo';
import styled from 'styled-components';
import { TOGGLE_CART_MUTATION, LOCAL_STATE_QUERY } from './Cart';

const Navigation = styled.nav`
  .navigation__list {
    list-style: none;
    padding: 0;
    display: flex;
  }

  .navigation__element {
    margin-right: 20px;
  }
  .navigation__link{
    color:rgba(0,0,0,0.5);
    text-decoration:none;
    &:hover{
      color:rgba(0,0,0,0.7);
      font-weight:500;
    }
  }
`;

const Nav = () => (
  <Navigation>
    <ul className="navigation__list">
      <li className="navigation__element">
        <Link href="/catalog">
          <a className="navigation__link">CheeseFarm</a>
        </Link>
      </li>
      <li className="navigation__element">
        <Link href="/me">
          <a className="navigation__link">Me</a>
        </Link>
      </li>
      <li className="navigation__element">
        <Link href="/new">
          <a className="navigation__link">Add Item</a>
        </Link>
      </li>
      <li className="navigation__element">
        <Mutation mutation={TOGGLE_CART_MUTATION}>
          {toggleCart => (
            <Query query={LOCAL_STATE_QUERY}>
              {({ data }) => (
                <a onClick={toggleCart} className="navigation__link--cart">
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
