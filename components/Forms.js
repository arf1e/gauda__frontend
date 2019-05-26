/* eslint-disable react/no-multi-comp */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import StyledButton from './styled/StyledButton';
import DisplayError from './ErrorMessage';

import { CURRENT_USER_QUERY } from './User';
import { TOGGLE_AUTH_MUTATION } from './Auth';

const Form = styled.form`
  width: 290px;
  padding: 25px 42px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: white;
  display: flex;
  flex-direction: column;

  .form-title {
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    color: black;
    margin-bottom: 24px;
  }

  .input {
    border: none;
    border-bottom: 3px solid #5b5b5b;
    padding: 10px 5px 10px 10px;
    margin-top: 20px;
    transition: 225ms;

    &::placeholder {
      font-weight: bold;
      text-transform: uppercase;
      transition: 225ms;
    }

    &:focus {
      outline: none;
      border-bottom-color: ${({ theme }) => theme.mainColor};
    }

    &:focus::placeholder {
      color: ${({ theme }) => theme.mainColor};
    }
  }

  .controls {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }

  .redirect {
    margin-top: 20px;
    color: ${({ theme }) => theme.mainColor};
    cursor: pointer;
  }

  .forgot {
    color: ${({ theme }) => theme.mainColor};
    align-self: flex-end;
    margin-top: 15px;

    &:hover {
      text-decoration: underline;
    }
  }

  .success-message {
    display: block;
    border-left: 5px solid ${({ theme }) => theme.mainColor};
    font-weight: bold;
    padding: 10px;
  }

  @media (min-width: ${({ theme }) => theme.tabletWidth}) {
    width: 500px;

    .input {
      width: 300px;
    }

    .forgot {
      align-self: flex-start;
    }
  }
`;

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
    }
  }
`;

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

export class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation mutation={TOGGLE_AUTH_MUTATION}>
        {toggleAuth => (
          <Mutation
            mutation={SIGNIN_MUTATION}
            variables={this.state}
            refetchQueries={[
              {
                query: CURRENT_USER_QUERY,
              },
            ]}
          >
            {(signin, { error, loading, called }) => (
              <Form
                method="post"
                disabled={loading}
                onSubmit={async e => {
                  e.preventDefault();
                  const response = await signin();
                  if (response.data) toggleAuth();
                }}
              >
                <h4 className="form-title">Sign In</h4>
                {error && <DisplayError error={error} />}
                <input
                  disabled={loading}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input"
                  value={this.state.email}
                  onChange={this.saveToState}
                />
                <input
                  disabled={loading}
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
                <a href="#" onClick={this.props.toForgot} className="forgot">
                  Forgot Password?
                </a>
                <div className="controls">
                  <StyledButton>
                    {loading ? 'Loading...' : 'SIGN IN'}
                  </StyledButton>
                  <a onClick={this.props.toSignUp} className="redirect">
                    I don`t have an Account
                  </a>
                </div>
              </Form>
            )}
          </Mutation>
        )}
      </Mutation>
    );
  }
}

export class SignUp extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation mutation={TOGGLE_AUTH_MUTATION}>
        {toggleAuth => (
          <Mutation
            mutation={SIGNUP_MUTATION}
            variables={this.state}
            refetchQueries={[{ query: CURRENT_USER_QUERY }]}
          >
            {(signup, { error, loading, called }) => (
              <Form
                method="post"
                refetchQueries={[{ query: CURRENT_USER_QUERY }]}
                onSubmit={async e => {
                  e.preventDefault();
                  const response = await signup();
                  if (!error && response.data) toggleAuth();
                }}
              >
                <h4 className="form-title">Sign Up</h4>
                {error && <DisplayError error={error} />}
                <input
                  disabled={loading}
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input"
                  value={this.state.name}
                  onChange={this.saveToState}
                />
                <input
                  disabled={loading}
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input"
                  value={this.state.email}
                  onChange={this.saveToState}
                />
                <input
                  disabled={loading}
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
                <input
                  disabled={loading}
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="input"
                  value={this.state.confirmPassword}
                  onChange={this.saveToState}
                />
                <div className="controls">
                  <StyledButton>SIGN IN</StyledButton>
                  <a
                    href="#"
                    onClick={this.props.toSignIn}
                    className="redirect"
                  >
                    I already have an account
                  </a>
                </div>
              </Form>
            )}
          </Mutation>
        )}
      </Mutation>
    );
  }
}

export class Forgot extends React.Component {
  state = {
    email: '',
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation mutation={REQUEST_RESET_MUTATION} variables={this.state}>
        {(reset, { error, loading, called }) => (
          <Form
            method="post"
            disabled={loading}
            onSubmit={async e => {
              e.preventDefault();
              try {
                await reset();
                this.setState({ email: '' });
              } catch (e) {
                return null;
              }
            }}
          >
            <h4 className="form-title">Reset Password</h4>
            {!error && !loading && called && (
              <strong className="success-message">
                Success! Check your email!
              </strong>
            )}
            {error && <DisplayError error={error} />}
            <input
              disabled={loading}
              type="email"
              name="email"
              placeholder="Email"
              className="input"
              value={this.state.email}
              onChange={this.saveToState}
            />
            <div className="controls">
              <StyledButton>
                {loading ? 'Loading...' : 'REQUEST RESET'}
              </StyledButton>
              <a href="#" onClick={this.props.toSignIn} className="redirect">
                Go back
              </a>
            </div>
          </Form>
        )}
      </Mutation>
    );
  }
}
