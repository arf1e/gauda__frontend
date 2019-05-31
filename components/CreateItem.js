import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import { ALL_ITEMS_QUERY } from './Items';
import formatMoney from '../lib/formatMoney';
import StyledButton from './styled/StyledButton';
import Error from './ErrorMessage';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 750px;
  padding: 10px;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.bs};

  fieldset {
    display: flex;
    flex-direction: column;
    width: 600px;

    strong {
      font-size: 18px;
    }
  }

  .imgPlaceholder {
    width: 200px;
    height: 200px;
    background-color: ${({ theme }) => theme.border};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .badge {
    width: 64px;
    height: 64px;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0;
    transition: 225ms;
    flex-direction: column;
    cursor: pointer;
    opacity: 0.7;

    &:active {
      transform: scale(1.05);
    }
  }

  .category {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .sort {
    display: flex;
    justify-content: space-between;

    & label {
      color: black;
      opacity: 0.6;
      padding: 5px 10px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

    & input:checked + label {
      opacity: 1;
      border-bottom: 3px solid ${({ theme }) => theme.mainColor};
    }
  }

  .category-icon {
    transition: 225ms;
    margin-bottom: 10px;

    & path {
      transition: 225ms;
    }
  }

  input[type='radio'] {
    display: none;
  }

  input:checked + .badge {
    background-color: ${({ theme }) => theme.mainColor};
    color: white;
    border-color: ${({ theme }) => theme.mainColor};
    opacity: 1;

    & .category-icon {
      fill: white;

      & path {
        fill: white;
      }
    }
  }

  .textInput {
    display: flex;
    flex-direction: column;

    input {
      border: none;
      border-bottom: 4px solid ${({ theme }) => theme.border};
      padding: 10px;
      font-size: 16px;

      &:active,
      &:focus {
        border-color: ${({ theme }) => theme.mainColor};
      }
    }
  }

  .textInput--price {
    input {
      width: 100px;
    }

    .priceOutput {
      margin-left: 15px;
      font-size: 20px;
    }
  }

  label {
    margin: 10px 0;
  }

  textarea {
    margin-top: 10px;
    border: 3px solid ${({ theme }) => theme.border};
    padding: 8px 13px;

    &:active,
    &:focus {
      border-color: ${({ theme }) => theme.mainColor};
    }
  }

  .categoryImage {
    display: flex;
    justify-content: space-between;
  }

  label[for='file'] {
    width: 220px;
    margin-left: auto;
  }

  label[for='category'] {
    width: 290px;
  }

  .category {
    margin-bottom: 0;
  }
`;

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
    title: '',
    category: 'cheese',
    price: 0,
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
    const val = name === 'price' ? parseInt(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    const { category } = this.state;
    return (
      <Mutation
        mutation={CREATE_ITEM_MUTATION}
        variables={this.state}
        update={this.update}
      >
        {(createItem, { loading, error }) => (
          <Form
            onSubmit={async e => {
              // Убрать html-евское поведение формы
              e.preventDefault();
              // Отправить запрос
              const res = await createItem();
              Router.back();
            }}
          >
            <h2>Create New Item</h2>
            {error && <Error error={error} />}
            <fieldset disabled={loading} aria-busy={loading}>
              <div className="categoryImage">
                <div className="textInfo">
                  <label htmlFor="category">
                    <strong>Category</strong>
                    <div className="category">
                      <input
                        type="radio"
                        name="category"
                        value="cheese"
                        id="cheese"
                        checked={category === 'cheese'}
                        onChange={e => this.handleChange(e)}
                      />
                      <label htmlFor="cheese" className="badge">
                        <ReactSVG
                          src="/static/svg/cheese.svg"
                          svgStyle={{ height: 24, width: 24 }}
                          svgClassName="category-icon"
                        />
                        CHEESE
                      </label>
                      <input
                        type="radio"
                        name="category"
                        value="wine"
                        id="wine"
                        checked={category === 'wine'}
                        onChange={e => this.handleChange(e)}
                      />
                      <label htmlFor="wine" className="badge">
                        <ReactSVG
                          src="/static/svg/wine.svg"
                          svgStyle={{ height: 24, width: 24 }}
                          svgClassName="category-icon"
                        />
                        WINE
                      </label>
                      <input
                        type="radio"
                        name="category"
                        value="butter"
                        id="butter"
                        checked={category === 'butter'}
                        onChange={e => this.handleChange(e)}
                      />
                      <label htmlFor="butter" className="badge">
                        <ReactSVG
                          src="/static/svg/butter.svg"
                          svgStyle={{ height: 24, width: 24 }}
                          svgClassName="category-icon"
                        />
                        BUTTER
                      </label>
                      <input
                        type="radio"
                        name="category"
                        value="tickets"
                        id="tickets"
                        checked={category === 'tickets'}
                        onChange={e => this.handleChange(e)}
                      />
                      <label htmlFor="tickets" className="badge">
                        <ReactSVG
                          src="/static/svg/tickets.svg"
                          svgStyle={{ height: 24, width: 24 }}
                          svgClassName="category-icon"
                        />
                        TICKETS
                      </label>
                    </div>
                  </label>
                  <label htmlFor="title" className="textInput">
                    <strong>Title</strong>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Item title"
                      required
                      onChange={this.handleChange}
                      value={this.state.title}
                    />
                  </label>
                  <label htmlFor="price" className="textInput textInput--price">
                    <strong>Price</strong>
                    <div>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Price"
                        required
                        onChange={e => this.handleChange(e)}
                        value={this.state.price}
                      />
                      <strong className="priceOutput">
                        {formatMoney(this.state.price)}
                      </strong>
                    </div>
                  </label>
                </div>
                <label htmlFor="file">
                  <strong>Image</strong>
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
                  {!this.state.image && (
                    <div className="imgPlaceholder">
                      <strong>Provide an image please!</strong>
                    </div>
                  )}
                </label>
              </div>
              <div>
                <label htmlFor="description" className="textInput">
                  <strong>Description</strong>
                  <textarea
                    name="description"
                    id="description"
                    placeholder="Item description"
                    onChange={this.handleChange}
                    value={this.state.description}
                  />
                </label>
              </div>
              <StyledButton type="submit" disabled={this.state.uploading}>
                Submit!
              </StyledButton>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}
