import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import ReactSVG from 'react-svg';
import ButtonWrap from './styled/ButtonWrap';

import { CURRENT_USER_QUERY } from './User';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = props => (
  <Mutation
    mutation={SIGN_OUT_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
  >
    {signout => (
      <ButtonWrap onClick={signout}>
        <ReactSVG
          src="/static/svg/logout.svg"
          svgStyle={{ height: 20, width: 20 }}
        />
      </ButtonWrap>
    )}
  </Mutation>
);

export default Signout;
