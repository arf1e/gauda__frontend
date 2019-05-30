import { Query, Mutation } from 'react-apollo';
import React from 'react';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import Error from './ErrorMessage';
import Table from './styled/Table';
import StyledButton from './styled/StyledButton';
import User from './User';
import Container from './styled/Container';

const ALL_USERS_QUERY = gql`
  query {
    users {
      id
      name
      email
      permissions
    }
  }
`;

const possiblePermissions = ['USER', 'ADMIN'];

const UPDATE_PERMISSIONS_MUTATION = gql`
  mutation updatePermissions($permissions: [Permission], $userId: ID!) {
    updatePermissions(permissions: $permissions, userId: $userId) {
      id
      permissions
      name
      email
      permissions
    }
  }
`;

const Permissions = props => (
  <Query query={ALL_USERS_QUERY}>
    {({ data, loading, error }) => (
      <Container>
        {error && <Error error={error} />}
        {data && (
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                {possiblePermissions.map(permission => (
                  <th key={permission}>{permission}</th>
                ))}
                <th>+</th>
              </tr>
            </thead>
            <tbody>
              {data.users &&
                data.users.map(user => <UserRow user={user} key={user.id} />)}
            </tbody>
          </Table>
        )}
      </Container>
    )}
  </Query>
);

class UserRow extends React.Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      id: PropTypes.string,
      permissions: PropTypes.array,
    }).isRequired,
  };

  state = {
    permissions: this.props.user.permissions,
  };

  togglePermission = (permission, updatePermissions) => {
    const { permissions } = this.state;
    if (permissions.includes(permission)) {
      this.setState({
        permissions: permissions.filter(el => el !== permission),
      });
    } else {
      this.setState({
        permissions: [...permissions, permission],
      });
    }
    updatePermissions();
  };

  render() {
    const { user } = this.props;
    const { permissions } = this.state;
    return (
      <Mutation
        mutation={UPDATE_PERMISSIONS_MUTATION}
        variables={{
          permissions: this.state.permissions,
          userId: this.props.user.id,
        }}
      >
        {(updatePermissions, { loading, error, called }) => (
          <>
            {error && (
              <tr>
                <td colSpan="5">
                  <Error error={error} />
                </td>
              </tr>
            )}
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              {possiblePermissions.map(permission => (
                <td key={permission}>
                  <label htmlFor={`${user.id}-permission-${permission}`}>
                    <input
                      type="checkbox"
                      value={permission}
                      checked={permissions.includes(permission)}
                      id={`${user.id}-permission-${permission}`}
                      onChange={() =>
                        this.togglePermission(permission, updatePermissions)
                      }
                    />
                  </label>
                </td>
              ))}
              <td>
                <StyledButton
                  type="button"
                  onClick={updatePermissions}
                  disabled={loading}
                >
                  Sav{loading ? 'ing...' : 'e'}
                </StyledButton>
              </td>
            </tr>
          </>
        )}
      </Mutation>
    );
  }
}

export default Permissions;
