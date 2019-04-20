import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($item: String!) {
    addToCart(item: $item) @client
  }
`;

export const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $price: Int!
    $category: String!
  ) {
    createItem(title: $title, price: $price, category: $category) {
      id
    }
  }
`;

const ItemCard = styled.article`
  width: 400px;
  border: 2px solid black;
  margin-bottom: 20px;
  padding: 15px;
`;

const AddToCard = styled.button`
  background-color: ${props => props.theme.mainColor};
  border: none;
  padding: 10px 40px;
  color: white;
  font-weight: bold;
`;

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const { item } = this.props;
    return (
      <ItemCard>
        <span>{item.category}</span>
        <h2>{item.title}</h2>
        <Mutation mutation={ADD_TO_CART_MUTATION} variables={{ item: item.id }}>
          {(AddToCart, { data }) => (
            <AddToCard onClick={() => AddToCart(item.id)}>
              Add to cart
            </AddToCard>
          )}
        </Mutation>
      </ItemCard>
    );
  }
}
