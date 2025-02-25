import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import cartTotalPrice from '../lib/cartTotalPrice';
import DisplayError from './ErrorMessage';
import User, { CURRENT_USER_QUERY } from './User';

const totalItems = cart =>
  cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);

const CREATE_ORDER_MUTATION = gql`
  mutation createOrder($token: String!) {
    createOrder(token: $token) {
      id
      charge
      total
      items {
        id
        title
      }
    }
  }
`;

export default class Payment extends React.Component {
  onToken = async (res, createOrder) => {
    NProgress.start();
    const order = await createOrder({
      variables: {
        token: res.id
      }
    }).catch(err => {
      alert(err.message);
    });
    Router.push({
      pathname: '/order',
      query: { id: order.data.createOrder.id }
    });
  };

  render() {
    return (
      <User>
        {({ data }) =>
          data.me && (
            <Mutation
              mutation={CREATE_ORDER_MUTATION}
              refetchQueries={[{ query: CURRENT_USER_QUERY }]}
            >
              {(createOrder, { error, loading, called }) => (
                <StripeCheckout
                  amount={cartTotalPrice(data.me.cart)}
                  name="Gouda"
                  description={`Order for ${totalItems(data.me.cart)} items`}
                  image="/static/img/logo.png"
                  token={res => this.onToken(res, createOrder)}
                  billingAddress
                  shippingAddress
                  stripeKey="pk_test_lBFHMEh6uPYqXDOGgdUUS4Ym00G3lKhcs8"
                >
                  {this.props.children}
                </StripeCheckout>
              )}
            </Mutation>
          )
        }
      </User>
    );
  }
}
