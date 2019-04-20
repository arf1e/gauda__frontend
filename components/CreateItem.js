import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';

export const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $price: Int!
    $category: String!
  ) {
    createItem(title: $title, price: $price, category: $category) {
      id
    }
  }
`;

export default class CreateItem extends Component {
  state = {
    title: 'Supah Cheese',
    category: 'cheese',
    price: 4500,
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    console.log({ name, type, value });
    this.setState({ [name]: val });
  };

  render() {
    return (
      <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
        {(createItem, { loading, error }) => (
          <form
            onSubmit={async e => {
              // Убрать html-евское поведение формы
              e.preventDefault();
              // Отправить запрос
              const res = await createItem();
              // Редирект на каталог
              console.log(res);
              Router.push({
                pathname: '/catalog',
              });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
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
              <button type="submit">Submit!</button>
            </fieldset>
          </form>
        )}
      </Mutation>
    );
  }
}
