import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import DeleteItem from './DeleteItem';
import formatMoney from '../lib/formatMoney';
import AddToCart from './AddToCart';

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
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: 225ms;

  &:hover {
    transform: scale(1.02);
  }

  img {
    width: 100%;
    height: 250px;
    background-color: gray;
    order: -1;
    object-fit: cover;
    transition: 225ms;
  }

  .title {
    font-size: 18px;
    color: black;
    padding: 10px 15px;
  }

  .category {
    background-color: ${({ theme }) => theme.mainColor};
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    top: -10px;
    right: -10px;
  }

  .category-icon {
    fill: white;

    & path {
      fill: white;
    }
  }

  .info {
    padding: 15px 0;
    display: flex;
    flex-direction: column;

    strong {
      font-size: 24px;
      margin-bottom: 5px;
    }
  }
`;

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const { item } = this.props;
    return (
      <ItemCard>
        <Link href={{ pathname: 'item', query: { id: item.id } }}>
          <a>
            <h2 className="title">{item.title}</h2>
            {item.image && <img src={item.image} alt={item.title} />}
          </a>
        </Link>
        <ReactSVG
          src={`/static/svg/${item.category}.svg`}
          svgStyle={{ height: 20, width: 20 }}
          svgClassName="category-icon"
          wrapper="span"
          className="category"
          title={item.category}
        />
        <div className="info">
          <strong>{formatMoney(item.price)}</strong>
          <AddToCart id={item.id} />
        </div>
      </ItemCard>
    );
  }
}
