import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';
import styled from 'styled-components';
import Head from 'next/head';
import ReactSVG from 'react-svg';
import Container from './styled/Container';

import FormatMoney from '../lib/formatMoney';
import AddToCart from './AddToCart';

const SingleItemStyles = styled.article`
  width: 290px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  padding: 5px;

  img {
    width: 100%;
    order: 2;
  }

  .description {
    display: flex;
    flex-direction: column;
    padding: 15px;
  }

  .badge {
    display: flex;
    align-items: center;
  }

  .badge__description {
    font-size: 1rem;
    color: black;
    margin-left: 10px;
  }

  .category {
    height: 40px;
    background-color: ${({ theme }) => theme.mainColor};
    color: white;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    .category-icon {
      path {
        fill: white;
      }
    }
  }

  .info {
    max-width: 300px;
    margin-top: 25px;
    color: black;
  }

  .controls {
    margin-top: auto;
  }

  .controls__cart {
    background-color: ${({ theme }) => theme.mainColor};
    color: white;
    padding: 10px 30px;
    display: inline-block;
    font-weight: bold;
    transition: 225ms;
    text-decoration: none;
  }

  .controls__cart:hover {
    background-color: ${({ theme }) => theme.mainSubColor};
  }

  .controls__cart:active {
    background-color: ${({ theme }) => theme.mainActiveColor};
  }

  @media (min-width: ${props => props.theme.tabletWidth}) {
    width: 540px;
    position: relative;
    padding: 15px;

    img {
      order: 0;
      object-fit: cover;
      height: 320px;
      width: 100%;
    }
  }

  @media (min-width: ${({ theme }) => theme.desktopWidth}) {
    width: 950px;
    flex-direction: row;
    padding: 30px;

    img {
      width: 450px;
      height: 450px;
      object-fit: contain;
      margin-right: 30px;
    }

    .info {
      max-width: 420px;
    }
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      category {
        id
        title
      }
      subcategory {
        id
        title
      }
      largeImage
      price
      description
      recommended {
        id
        title
        image
      }
    }
  }
`;

export default class SingleItem extends Component {
  render() {
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
        {({ error, loading, data }) => {
          if (error) return <p>Error!</p>;
          if (loading) return <p>Loading...</p>;
          const { item } = data;
          return (
            <SingleItemStyles>
              <Head>
                <title>{item.title} | Gouda </title>
              </Head>
              <img src={item.largeImage} alt={item.title} />
              <div className="description">
                <h1>{item.title}</h1>
                <div className="badge">
                  <ReactSVG
                    src={`/static/svg/${item.category.title}.svg`}
                    svgStyle={{ height: 20, width: 20 }}
                    svgClassName="category-icon"
                    wrapper="span"
                    className="category"
                    title="cheese"
                  />
                  <span className="badge__description">
                    {item.subcategory.title}
                  </span>
                </div>
                <p className="info">
                  {item.description ||
                    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque provident eius vel assumenda fuga ex veniam porro enim
                  in commodi. Vel, incidunt vero dicta repellendus perspiciatis
                  iste amet doloremque mollitia.`}
                </p>
                <div className="controls">
                  <h3 className="price">{FormatMoney(item.price)}</h3>
                  <AddToCart id={this.props.id} />
                </div>
              </div>
            </SingleItemStyles>
          );
        }}
      </Query>
    );
  }
}
