import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import Head from 'next/head';
import ReactSVG from 'react-svg';

const SingleItemStyles = styled.article`
  max-width: 1000px;
  margin: 100px auto;
  display: flex;
  border-radius: 5px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  padding: 30px;

  img {
    width: 50%;
    height: auto;
  }

  .description {
    padding: 15px;
    display: flex;
    flex-direction: column;
    margin-left: 30px;
  }

  .category {
    height: 40px;
    background-color: green;
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
    margin-top: 55px;
    color: black;
  }

  .controls {
    margin-top: auto;
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      category
      largeImage
      price
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
                <ReactSVG
                  src={`/static/svg/${item.category}.svg`}
                  svgStyle={{ height: 20, width: 20 }}
                  svgClassName="category-icon"
                  wrapper="span"
                  className="category"
                />
                <h3 className="price">{item.price}</h3>
                <p className="info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque provident eius vel assumenda fuga ex veniam porro enim
                  in commodi. Vel, incidunt vero dicta repellendus perspiciatis
                  iste amet doloremque mollitia.
                </p>
                <div className="controls">
                  <a href="#">Add To Cart</a>
                </div>
              </div>
            </SingleItemStyles>
          );
        }}
      </Query>
    );
  }
}
