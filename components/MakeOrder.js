import React from 'react';
import Container from './styled/Container';
import { CURRENT_USER_QUERY } from './User';
import PleaseSignIn from './PleaseSignIn';

export default class MakeOrder extends React.Component {
  render() {
    return (
      <PleaseSignIn>
        <Container>
          <h2>Make new order</h2>
        </Container>
      </PleaseSignIn>
    );
  }
}
