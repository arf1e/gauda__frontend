import React from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import ReactSVG from 'react-svg';
import User from './User';
import { TOGGLE_CART_MUTATION, LOCAL_STATE_QUERY } from './Cart';
import Auth, { TOGGLE_AUTH_MUTATION } from './Auth';
import CartCount from './CartCount';
import Signout from './Signout';
import ButtonWrap from './styled/ButtonWrap';

const UserBlock = styled.li`
  .navigation__link--cart {
    display: flex;
  }
  list-style-image: none;
  @media (min-width: ${({ theme }) => theme.tabletWidth}) {
    margin-left: auto;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    p {
      padding: 0;
      margin: 0 10px;
      position: relative;
      cursor: pointer;
    }

    .navigation__link--cart {
      display: flex;
    }

    .cart-icon {
      &:active {
        transform: scale(0.9);
      }
    }
  }

  @media (min-width: ${({theme}) => theme.desktopWidth}) {
    .username {
      margin: 0 15px;
    }
  }
`;

const UserOptions = () => (
  <User>
    {({ data: { me } }) => {
      if (!me)
        return (
          <UserBlock>
            <Mutation mutation={TOGGLE_AUTH_MUTATION}>
              {toggleAuth => (
                <ButtonWrap className="nav-link" onClick={toggleAuth}>
                  Sign In
                </ButtonWrap>
              )}
            </Mutation>
            <Auth />
          </UserBlock>
        );
      if (me) {
        return (
          <UserBlock>
            <Mutation mutation={TOGGLE_CART_MUTATION}>
              {toggleCart => (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <ButtonWrap
                  onClick={toggleCart}
                  className="navigation__link--cart nav-link"
                  type="button"
                >
                  <ReactSVG
                    src="/static/svg/cart.svg"
                    svgStyle={{ height: 20, width: 20 }}
                    svgClassName="cart-icon"
                  />
                  <CartCount
                    count={me.cart.reduce(
                      (acc, cartItem) => acc + cartItem.quantity,
                      0
                    )}
                  />
                </ButtonWrap>
              )}
            </Mutation>
            <strong className="username">{me.name}</strong>
            <Signout className="sign-out" />
          </UserBlock>
        );
      }
    }}
  </User>
);

export default UserOptions;
