/* eslint-disable react/no-multi-comp */
import React from 'react';
import styled from 'styled-components';
import { Query, Mutation } from 'react-apollo';
import Link from 'next/link';
import { ALL_ITEMS_QUERY } from './Items';
import Table from './styled/Table';
import Container from './styled/Container';
import formatMoney from '../lib/formatMoney';
import StyledButton from './styled/StyledButton';
import DeleteItem from './DeleteItem';

export default class AdminItems extends React.Component {
  render() {
    return (
      <Container>
        <Query query={ALL_ITEMS_QUERY}>
          {({ data, error, loading }) => (
            <Table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Update</th>
                  <th>Delete</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {data.items &&
                  data.items.map(item => <ItemRow item={item} key={item.id} />)}
              </tbody>
            </Table>
          )}
        </Query>
      </Container>
    );
  }
}

class ItemRow extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <tr>
        <td>
          <img src={item.image} height={100} />
        </td>
        <td>{item.title}</td>
        <td>{item.category}</td>
        <td>{formatMoney(item.price)}</td>
        <td>
          <Link href={{ pathname: '/update', query: { id: item.id } }}>
            <a>
              <StyledButton>Update</StyledButton>
            </a>
          </Link>
        </td>
        <td>
          <DeleteItem id={item.id}>Delete Item</DeleteItem>
        </td>
        <td>
          <Link href={{ pathname: '/item', query: { id: item.id } }}>
            <a>
              <StyledButton>View</StyledButton>
            </a>
          </Link>
        </td>
      </tr>
    );
  }
}
