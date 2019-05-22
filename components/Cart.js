import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import CartBody from './styled/CartBody';
import CartItem from './CartItem';
import User from './User';
import StyledButton from './styled/StyledButton';

import cartTotalPrice from '../lib/cartTotalPrice';
import formatMoney from '../lib/formatMoney';

const LOCAL_STATE_QUERY = gql`
  query {
    cartOpen @client
    cart @client
  }
`;

const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`;

const Cart = () => (
  <User>
    {({ data: { me } }) => {
      if (!me) return null;
      return (
        <Mutation mutation={TOGGLE_CART_MUTATION}>
          {toggleCart => (
            <Query query={LOCAL_STATE_QUERY}>
              {({ data }) => (
                <CartBody shown={data.cartOpen}>
                  <header>
                    <h2>Cart</h2>
                    <p>
                      {me.cart.length} item{me.cart.length > 1 ? 's' : ''}
                    </p>
                    <button onClick={toggleCart} type="button">
                      &times;
                    </button>
                  </header>
                  <ul>
                    {me.cart.map(cartItem => (
                      <CartItem cartItem={cartItem} key={cartItem.id} />
                    ))}
                  </ul>
                  {me.cart.length > 0 && (
                    <footer>
                      <h4>Total: {formatMoney(cartTotalPrice(me.cart))}</h4>
                      <StyledButton>Proceed to order</StyledButton>
                    </footer>
                  )}
                </CartBody>
              )}
            </Query>
          )}
        </Mutation>
      );
    }}
  </User>
);

export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };
