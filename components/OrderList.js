import React from 'react';
import { Query } from 'react-apollo';
import moment from 'moment';
import Link from 'next/link';
import styled from 'styled-components';
import gql from 'graphql-tag';
import Error from './ErrorMessage';
import formatMoney from '../lib/formatMoney';
import OrderItemStyles from './styled/OrderItemStyles';

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders(orderBy: createdAt_DESC) {
      id
      total
      createdAt
      items {
        id
        title
        price
        description
        quantity
        image
      }
    }
  }
`;

const OrderUl = styled.ul`
  display: grid;
  padding: 0;
  row-gap: 20px;
  @media (min-width: ${({ theme }) => theme.tabletWidth}) {
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
    column-gap: 20px;
  }
`;

const OrdersLayout = styled.div`
  width: 290px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.tabletWidth}) {
    width: 668px;
  }

  @media (min-width: ${({ theme }) => theme.desktopWidth}) {
    width: 1050px;
  }
`;

export default class OrderList extends React.Component {
  render() {
    return (
      <Query query={USER_ORDERS_QUERY}>
        {({ data: { orders }, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <Error error={error} />;
          console.log(orders);
          return (
            <OrdersLayout>
              <h2>My orders</h2>
              <OrderUl>
                {orders.map(order => (
                  <OrderItemStyles key={order.id}>
                    <Link
                      href={{
                        pathname: '/order',
                        query: { id: order.id }
                      }}
                    >
                      <a>
                        <p>
                          {order.items.reduce(
                            (acc, item) => acc + item.quantity,
                            0
                          )}{' '}
                          items
                        </p>
                        <p>{moment(order.createdAt).fromNow()}</p>
                        <p>{formatMoney(order.total)}</p>
                        <div className="images">
                          {order.items.map(item => (
                            <img
                              key={item.id}
                              src={item.image}
                              alt={item.title}
                            />
                          ))}
                        </div>
                      </a>
                    </Link>
                  </OrderItemStyles>
                ))}
              </OrderUl>
            </OrdersLayout>
          );
        }}
      </Query>
    );
  }
}
