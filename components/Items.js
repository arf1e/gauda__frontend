// Контейнер для товаров.
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import styled from 'styled-components';

import Item from './Item';
// Бэст практис - писать названия запросов капсом
const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      title
      id
      category
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default class Items extends Component {
  render() {
    return (
      <Center>
        <p>Сыр</p>
        <Query query={ALL_ITEMS_QUERY}>
          {({ data, error, loading }) => {
            // У нас сразу есть три состояния:
            // 1. Загрузки:
            if (loading) return <p>Loading</p>;
            // 2. Ошибки:
            if (error) return <p>Error</p>;
            // 3. Когда все хорошо:
            return (
              <ItemsList>
                {data.items.map(item => (
                  <Item item={item} key={item.id} />
                ))}
              </ItemsList>
            );
          }}
        </Query>
      </Center>
    );
  }
}
