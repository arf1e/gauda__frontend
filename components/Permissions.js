import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ALL_USERS_QUERY = gql`
  query {
    users {
      id
    }
  }
`;

const Permissions = props => (
  <Query query={ALL_USERS_QUERY}>
    {({ data, loading, error }) => (
      <div>
        <p>data: {JSON.stringify(data)}</p>
        <p>penis</p>
      </div>
    )}
  </Query>
);

export default Permissions;
