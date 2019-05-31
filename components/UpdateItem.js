import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';
import Error from './ErrorMessage';
import Container from './styled/Container';
import StyledButton from './styled/StyledButton';
import { Response } from './Items';

const Form = styled.form`
  width: 750px;
  padding: 15px;
  margin: 0 auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  input[type='file'] {
    margin-bottom: 20px;
  }

  fieldset {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .inputs {
      display: flex;
      flex-direction: column;

      label {
        display: flex;
        flex-direction: column;

        input:not([type='file']) {
          border: none;
          border-bottom: 3px solid black;
          padding: 10px;
          font-weight: bold;

          &:active {
            border-color: ${({ theme }) => theme.mainColor};
          }
        }

        select {
          border: none;
          border-bottom: 3px solid black;
          background: none;
          padding: 10px;
          font-weight: bold;
          margin-bottom: 10px;
        }
      }
    }
  }
`;

export const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $id: ID!
    $title: String
    $price: Int
    $category: String
    $image: String
    $largeImage: String
  ) {
    updateItem(
      title: $title
      price: $price
      category: $category
      id: $id
      image: $image
      largeImage: $largeImage
    ) {
      id
      title
      category
      price
      image
      largeImage
    }
  }
`;

export const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      price
      category
      image
      largeImage
    }
  }
`;

export default class UpdateItem extends Component {
  state = {};

  updateItem = async (e, updateItemMutation) => {
    e.preventDefault();
    console.log('updating item!');
    console.log(this.state);
    const res = await updateItemMutation({
      variables: {
        id: this.props.id,
        ...this.state
      }
    });
    Router.push({
      pathname: '/admin'
    });
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  uploadFile = async e => {
    this.setState({ uploading: true });
    // 1. Файлы
    const { files } = e.target;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'gauda-images');
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/arf1e/image/upload',
      {
        method: 'POST',
        body: data
      }
    );
    const file = await res.json();
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url,
      uploading: false
    });
  };

  render() {
    return (
      <Container>
        {!this.props.id && (
          <div>
            <Error error={{ message: 'No item id was provided.' }} />
            <Link href={{ pathname: '/admin' }}>
              <a>
                <StyledButton style={{ margin: '20px 0', width: '200px' }}>
                  Go to Admin panel
                </StyledButton>
              </a>
            </Link>
          </div>
        )}
        <h1 style={{ textAlign: 'center', margin: '20px 0 40px 0' }}>
          Update Item
        </h1>
        <Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
          {({ data, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (!data || !data.item) return <p>No Item Found</p>;
            console.log(data);
            return (
              <Mutation mutation={UPDATE_ITEM_MUTATION} variables={this.state}>
                {(updateItem, { loading, error, called }) => (
                  <Form onSubmit={e => this.updateItem(e, updateItem)}>
                    <fieldset disabled={loading} aria-busy={loading}>
                      <div className="inputs">
                        <label htmlFor="title">
                          <strong>Title</strong>
                          <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="title"
                            required
                            onChange={this.handleChange}
                            defaultValue={data.item.title}
                          />
                        </label>
                        <label htmlFor="price">
                          <strong>Price</strong>
                          <input
                            type="number"
                            id="price"
                            name="price"
                            placeholder="Price"
                            required
                            onChange={this.handleChange}
                            defaultValue={data.item.price}
                          />
                        </label>
                        <label htmlFor="category">
                          <strong>Category</strong>
                          <select
                            id="category"
                            name="category"
                            onChange={this.handleChange}
                            defaultValue={data.item.category}
                          >
                            <option value="cheese">Cheese</option>
                            <option value="wine">Wine</option>
                            <option value="butter">Butter</option>
                            <option value="tickets">Tickets</option>
                          </select>
                        </label>
                        <input
                          type="file"
                          id="file"
                          name="file"
                          placeholder="Upload an image"
                          required={data.item.image === ''}
                          onChange={this.uploadFile}
                        />
                        <StyledButton
                          type="submit"
                          disabled={this.state.uploading}
                        >
                          Submit!
                        </StyledButton>
                      </div>
                      <div>
                        <img
                          src={this.state.image || data.item.image}
                          height={250}
                        />
                        {!called &&
                          Object.keys(this.state).filter(el =>
                            ['title', 'price', 'image', 'category'].includes(el)
                          ).length > 0 && (
                            <Response>
                              You have{' '}
                              {
                                Object.keys(this.state).filter(el =>
                                  [
                                    'title',
                                    'price',
                                    'image',
                                    'category'
                                  ].includes(el)
                                ).length
                              }{' '}
                              unsaved changes.
                            </Response>
                          )}
                        {called && <Response>All saved!</Response>}
                      </div>
                    </fieldset>
                  </Form>
                )}
              </Mutation>
            );
          }}
        </Query>
      </Container>
    );
  }
}
