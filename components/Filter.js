/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import StyledButton from './styled/StyledButton';

const FilterStyles = styled.form`
  width: 320px;
  margin: 0 auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 12px 15px;

  h2 {
    margin-bottom: 20px;
  }

  h3 {
    font-size: 14px;
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

  .apply {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.desktopWidth}) {
    width: 190px;

    .category {
      flex-wrap: wrap;
    }

    .sort {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default class Filter extends React.Component {
  state = {
    category: 'cheese',
    by: 'title',
    kind: 'ASC',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  applyFilters = () => {
    const { category, by, kind } = this.state;
    this.props.handleChange({ category, sort: `${by}_${kind}` });
  };

  render() {
    const { category, by, kind } = this.state;
    return (
      <FilterStyles
        onSubmit={e => {
          e.preventDefault();
          this.applyFilters();
        }}
      >
        <h2>Filters</h2>
        <h3>Category:</h3>
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
        <h3>Sort:</h3>
        <div className="sort">
          <div className="by">
            <input
              type="radio"
              name="by"
              value="price"
              id="price"
              checked={by === 'price'}
              onChange={this.handleChange}
            />
            <label htmlFor="price">
              <strong>Price</strong>
            </label>
            <input
              type="radio"
              name="by"
              value="title"
              id="title"
              checked={by === 'title'}
              onChange={this.handleChange}
            />
            <label htmlFor="title">
              <strong>Title</strong>
            </label>
          </div>
          <div className="kind">
            <input
              type="radio"
              name="kind"
              value="ASC"
              id="kind_price"
              onChange={this.handleChange}
              checked={kind === 'ASC'}
            />
            <label htmlFor="kind_price">
              <strong>ASC</strong>
            </label>
            <input
              type="radio"
              name="kind"
              value="DESC"
              id="kind_title"
              onChange={this.handleChange}
              checked={kind === 'DESC'}
            />
            <label htmlFor="kind_title">
              <strong>DESC</strong>
            </label>
          </div>
        </div>
        <StyledButton style={{ margin: '0 auto' }} className="apply">
          APPLY
        </StyledButton>
      </FilterStyles>
    );
  }
}
