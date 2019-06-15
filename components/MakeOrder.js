import React from 'react';
import styled from 'styled-components';
import Container from './styled/Container';
import { CURRENT_USER_QUERY } from './User';
import PleaseSignIn from './PleaseSignIn';
import OrderBreadcrumbs from './OrderBreadcrumbs';
import OrderForm from './OrderForm';

export default class MakeOrder extends React.Component {
  state = {
    stage: 'address',
  };

  render() {
    const { stage } = this.state;
    return (
      <PleaseSignIn>
        <Container>
          <h1>Make new order</h1>
          <OrderBreadcrumbs stage={stage} />
          <OrderForm />
        </Container>
      </PleaseSignIn>
    );
  }
}
