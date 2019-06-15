import React from 'react';
import styled from 'styled-components';
import Breadcrumb from './Breadcrumb';

const Breadcrumbs = styled.article`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export default class OrderBreadcumbs extends React.Component {
  render() {
    const { stage } = this.props;
    return (
      <Breadcrumbs>
        <Breadcrumb title="1. Address" active={stage === 'address'} />
        <Breadcrumb title="2. Payment" active={stage === 'payment'} />
        <Breadcrumb title="3. Confirmation" active={stage === 'confirmation'} />
      </Breadcrumbs>
    );
  }
}
