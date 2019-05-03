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
  .cart{
  margin-bottom: 4rem;
  width:250px;
  height: 340px;
  text-align: center;
  padding: 20px;
}
.cart .name{
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 30px;
}
.cart .cost{
  font-size: 1.3rem;
  margin: 30px 0;
}
/* Для кнопки добавить в корзину */
.btn-primary{
  background-color: #6648b1;
  border: 1px solid ${props => props.theme.mainVioletColor};
  &:hover{
    background-color: ${props => props.theme.mainVioletColor};
    border: 1px solid ${props => props.theme.mainVioletColor};
  }
}
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
      <ItemCard className="cart border shadow-sm p-3 mb-5 bg-white rounded">
        <span>{item.category}</span>
        <h2 className="name">{item.title}</h2>
        {item.image && <img src={item.image} alt={item.title} width={366} />}
        <span className="cost">{item.price}</span>
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
