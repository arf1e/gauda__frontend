import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import CartBody from './styled/CartBody';
import CartItem from './CartItem';

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
  <Mutation mutation={TOGGLE_CART_MUTATION}>
    {toggleCart => (
      <Query query={LOCAL_STATE_QUERY}>
        {({ data }) => (
          <CartBody shown={data.cartOpen}>
            <h2>Cart</h2>
            <button onClick={toggleCart}>&times;</button>
            {data.cart.map(id => (
              <CartItem key={`${id} + ${Math.random() * Date.now()}`} id={id} />
            ))}
          </CartBody>
        )}
      </Query>
    )}
  </Mutation>
);

export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };
