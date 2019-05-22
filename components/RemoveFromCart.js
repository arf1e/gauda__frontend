import React from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const RemoveButton = styled.button`
  font-size: 20px;
  background: none;
  border: 0;
  &:hover {
    color: ${({ theme }) => theme.mainColor};
    cursor: pointer;
  }
`;

const REMOVE_FROM_CART_MUTATION = gql`
  mutation removeFromCart($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`;

export default class RemoveFromCart extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  // Запускается после того, как с сервера вернется респонс
  update = (cache, payload) => {
    console.log('Remove from cart');
    const data = cache.readQuery({ query: CURRENT_USER_QUERY });
    console.log(data);
    const cartItemId = payload.data.removeFromCart.id;
    data.me.cart = data.me.cart.filter(cartItem => cartItem.id !== cartItemId);
    cache.writeQuery({ query: CURRENT_USER_QUERY, data });
  };

  render() {
    const { id } = this.props;

    return (
      <Mutation
        mutation={REMOVE_FROM_CART_MUTATION}
        variables={{ id }}
        update={this.update}
        optimisticResponse={{
          __typename: 'Mutation',
          removeFromCart: {
            __typename: 'CartItem',
            id: this.props.id,
          },
        }}
      >
        {(removeFromCart, { loading, error }) => (
          <RemoveButton
            title="Delete Item"
            onClick={() => removeFromCart().catch(err => alert(err.message))}
            disabled={loading}
          >
            Delete Item
          </RemoveButton>
        )}
      </Mutation>
    );
  }
}
