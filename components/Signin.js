import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';

import { CURRENT_USER_QUERY } from './User';

const SIGNIN_MUTATION = gql`
  mutation SIGNUP_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
    }
  }
`;

export default class Signin extends Component {
  state = {
    password: '',
    email: '',
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[
          {
            query: CURRENT_USER_QUERY,
          },
        ]}
      >
        {(signin, { error, loading }) => (
          <form
            disabled={loading}
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              const response = await signin();
              this.setState({ email: '', password: '' });
            }}
          >
            <fieldset>
              <h2>Signin</h2>
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </label>
              <button type="submit">Sign In!</button>
            </fieldset>
          </form>
        )}
      </Mutation>
    );
  }
}
