import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import DeleteItem from './DeleteItem';

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(id: $id) @client
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
        {item.image && <img src={item.image} alt={item.title} width={366} />}
        <Link href={{ pathname: 'update', query: { id: item.id } }}>
          <a>Edit</a>
        </Link>
        <Mutation mutation={ADD_TO_CART_MUTATION} variables={{ id: item.id }}>
          {(AddToCart, { data }) => (
            <AddToCard onClick={() => AddToCart(item)}>Add to cart</AddToCard>
          )}
        </Mutation>
        <DeleteItem id={item.id}>Delete this item</DeleteItem>
      </ItemCard>
    );
  }
}
