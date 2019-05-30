import { Query, Mutation } from 'react-apollo';
import Router from 'next/router';
import { CURRENT_USER_QUERY } from './User';
import { TOGGLE_AUTH_MUTATION } from './Auth';

const PleaseSignIn = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (!data.me) {
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              width: '100%',
              height: '100%',
            }}
          >
            <p style={{ fontSize: 40 }}>
              401 Error // You have to be signed in to access this page.
            </p>
          </div>
        );
      }
      return props.children;
    }}
  </Query>
);

export default PleaseSignIn;
