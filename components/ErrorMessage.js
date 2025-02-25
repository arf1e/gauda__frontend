import styled from 'styled-components';
import React from 'react';

import PropTypes from 'prop-types';

const ErrorStyles = styled.div`
  padding: 10px;
  background: white;
  margin: 20 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid ${({ theme }) => theme.mainVioletColor};
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 10;
    margin-left: 10;
    font-weight: bold;
  }
`;

const DisplayError = ({ error }) => {
  if (!error || !error.message) return null;
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i) => (
      <ErrorStyles key={i}>
        <p>
          <strong>Houston, we have a problem:</strong>
          <br />
          {error.message.replace('GraphQL error: ', '')}
        </p>
      </ErrorStyles>
    ));
  }
  return (
    <ErrorStyles>
      <p>
        <strong>Houston, we have a problem:</strong>
        <br />
        {error.message.replace('GraphQL error: ', '')}
      </p>
    </ErrorStyles>
  );
};

DisplayError.defaultProps = {
  error: {},
};

DisplayError.propTypes = {
  error: PropTypes.object,
};

export default DisplayError;
