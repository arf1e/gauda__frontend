import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';

export const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $id: ID!
    $title: String
    $price: Int
    $category: String
  ) {
    updateItem(title: $title, price: $price, category: $category, id: $id) {
      id
      title
      category
      price
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
        ...this.state,
      },
    });
    console.log('update');
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (!data.item) return <p>No Item Found</p>;
          console.log(data);
          return (
            <Mutation mutation={UPDATE_ITEM_MUTATION} variables={this.state}>
              {(updateItem, { loading, error }) => (
                <form onSubmit={e => this.updateItem(e, updateItem)}>
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
                        defaultValue={data.item.title}
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
                        defaultValue={data.item.price}
                      />
                    </label>
                    <label htmlFor="category">
                      Category
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
                    <button type="submit" disabled={this.state.uploading}>
                      Submit!
                    </button>
                  </fieldset>
                </form>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}
