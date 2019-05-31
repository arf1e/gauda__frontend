// Контейнер для товаров.
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Filter from './Filter';
import Error from './ErrorMessage';

import Item from './Item';
// Бэст практис - писать названия запросов капсом
export const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      title
      id
      category
      image
      price
    }
  }
`;

export const FILTERED_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($category: String, $sort: ItemOrderByInput) {
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
    width: auto;
    padding-top: 0;
    justify-content: space-between;
  }

  @media (min-width: ${({ theme }) => theme.desktopWidth}) {
  }
`;

const Container = styled.section`
  width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 70vh;

  @media (min-width: ${({ theme }) => theme.tabletWidth}) {
    width: 668px;
  }

  @media (min-width: ${({ theme }) => theme.desktopWidth}) {
    width: 1050px;
    display: grid;
    grid-template-columns: 190px 1fr;
    align-items: flex-start;
    grid-column-gap: 10px;
  }
`;

const Response = styled.div`
  margin: 60px auto;
  display: block;
  width: 290px;
  padding: 10px 15px;
  border-left: 5px solid ${({ theme }) => theme.violetColor};

  p {
    margin: 0;
  }

  &.loading {
    border-left-color: ${({ theme }) => theme.mainColor};
  }

  @media (min-width: ${({ theme }) => theme.tabletWidth}) {
    margin: 0;
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
      <Query query={FILTERED_ITEMS_QUERY} variables={this.state}>
        {({ data, error, loading, refetch }) => (
          <Container>
            <Filter handleChange={this.handleChange} />
            <div>
              {loading && <Response className="loading">Loading...</Response>}
              {error && <Error error={error} />}
              {data.items.length === 0 && <Response>No items found.</Response>}
              {data.items.length > 0 && (
                <ItemsList>
                  {data.items.map(item => (
                    <Item item={item} key={item.id} />
                  ))}
                </ItemsList>
              )}
            </div>
          </Container>
        )}
      </Query>
    );
  }
}

export { Response };
