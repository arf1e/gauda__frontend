import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import { ALL_ITEMS_QUERY } from './Items';

export const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $price: Int!
    $category: String!
    $image: String!
    $largeImage: String!
    $description: String!
  ) {
    createItem(
      title: $title
      price: $price
      category: $category
      image: $image
      largeImage: $largeImage
      description: $description
    ) {
      id
      title
      price
      category
      image
      largeImage
      description
    }
  }
`;

export default class CreateItem extends Component {
  state = {
    title: 'Supah Cheese',
    category: 'cheese',
    price: 4500,
    description: '',
    image: null,
    largeImage: null,
    uploading: false,
  };

  update = (cache, payload) => {
    const data = cache.readQuery({ query: ALL_ITEMS_QUERY });
    data.items = [...data.items, payload.data.createItem];
    cache.writeQuery({ query: ALL_ITEMS_QUERY, data });
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
        body: data,
      }
    );
    const file = await res.json();
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url,
      uploading: false,
    });
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <Mutation
        mutation={CREATE_ITEM_MUTATION}
        variables={this.state}
        update={this.update}
      >
        {(createItem, { loading, error }) => (
          <form
            onSubmit={async e => {
              // Убрать html-евское поведение формы
              e.preventDefault();
              // Отправить запрос
              const res = await createItem();
              // Редирект на каталог
              Router.push({
                pathname: '/catalog',
              });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="file">
                Image
                <input
                  type="file"
                  id="file"
                  name="file"
                  placeholder="Upload an image"
                  required
                  onChange={this.uploadFile}
                />
                {this.state.image && (
                  <img
                    width={200}
                    src={this.state.image}
                    alt="upload preview"
                  />
                )}
              </label>
              <label htmlFor="title">
                Title
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="title"
                  required
                  onChange={this.handleChange}
                  value={this.state.title}
                />
              </label>
              <label htmlFor="price">
                Price
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Price"
                  required
                  onChange={this.handleChange}
                  value={this.state.price}
                />
              </label>
              <label htmlFor="category">
                Category
                <select
                  id="category"
                  name="category"
                  onChange={this.handleChange}
                >
                  <option value="cheese">Cheese</option>
                  <option value="wine">Wine</option>
                </select>
              </label>
              <label htmlFor="description">
                Description
                <textarea
                  name="description"
                  id="description"
                  onChange={this.handleChange}
                  value={this.state.description}
                />
              </label>
              <button type="submit" disabled={this.state.uploading}>
                Submit!
              </button>
            </fieldset>
          </form>
        )}
      </Mutation>
    );
  }
}
