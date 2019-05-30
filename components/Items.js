// Контейнер для товаров.
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Filter from './Filter';

import Item from './Item';
// Бэст практис - писать названия запросов капсом
export const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($category: String!, $sort: ItemOrderByInput) {
    items(where: { category: $category }, orderBy: $sort) {
      title
      id
      category
      image
      price
    }
  }
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  width: 290px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.tabletWidth}) {
    width: 668px;
  }

  @media (min-width: ${({ theme }) => theme.desktopWidth}) {
    width: 1050px;
  }
`;

export default class Items extends Component {
  state = {
    category: 'cheese',
    sort: 'price_ASC',
  };

  handleChange = newState => {
    this.setState({ ...newState });
  };

  render() {
    return (
      <>
        <Filter handleChange={this.handleChange} />
        <Query query={ALL_ITEMS_QUERY} variables={this.state}>
          {({ data, error, loading }) => {
            // У нас сразу есть три состояния:
            // 1. Загрузки:
            if (loading) return <p>Loading</p>;
            // 2. Ошибки:
            if (error) return <p>Error</p>;
            // 3. Когда все хорошо:
            if (data.items.length === 0) return <p>No items found.</p>;
            return (
              <div>
                <ItemsList>
                  {data.items.map(item => (
                    <Item item={item} key={item.id} />
                  ))}
                </ItemsList>
              </div>
            );
          }}
        </Query>
      </>
    );
  }
}
