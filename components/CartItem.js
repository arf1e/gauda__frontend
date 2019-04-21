import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import styled from 'styled-components';

const ItemPic = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
`;

const CartItemBody = styled.article`
  display: flex;
  align-items: center;
  padding: 0 15px;
  border-bottom: 2px solid black;
`;

const GET_ITEM_QUERY = gql`
  query GET_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      title
      price
      category
      image
    }
  }
`;

const CartItem = ({ id }) => (
  <Query query={GET_ITEM_QUERY} variables={{ id }}>
    {({ data, loading }) =>
      !loading && (
        <CartItemBody>
          <ItemPic src={data.item.image} alt={data.item.title} />
          <h4>{data.item.title}</h4>
        </CartItemBody>
      )
    }
  </Query>
);

export default CartItem;
