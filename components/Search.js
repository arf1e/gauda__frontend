import React from 'react';
import Downshift, { resetIdCounter } from 'downshift';
import Router from 'next/router';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import debounce from 'lodash/debounce';
import { DropDown, DropDownItem, SearchStyles } from './styled/DropDown';

const SEARCH_ITEMS_QUERY = gql`
  query SEARCH_ITEMS_QUERY($input: String!) {
    items(
      where: {
        OR: [{ title_contains: $input }, { description_contains: $input }]
      }
    ) {
      id
      title
      image
    }
  }
`;

const routeToItem = item => {
  if (item) {
    Router.push({
      pathname: '/item',
      query: {
        id: item.id,
      },
    });
  }
};

class Search extends React.Component {
  state = {
    items: [],
    loading: false,
  };

  onChange = debounce(async (e, client) => {
    this.setState({ loading: true });
    if (e.target.value.length > 1) {
      const res = await client.query({
        query: SEARCH_ITEMS_QUERY,
        variables: { input: e.target.value },
      });
      this.setState({
        items: res.data.items,
        loading: false,
      });
    }
  }, 350);

  render() {
    resetIdCounter();
    return (
      <SearchStyles>
        <Downshift
          onChange={routeToItem}
          itemToString={item => (item === null ? '' : item.title)}
        >
          {({
            getInputProps,
            getItemProps,
            isOpen,
            inputValue,
            highlightedIndex,
          }) => (
            <div>
              <ApolloConsumer>
                {client => (
                  <input
                    type="search"
                    {...getInputProps({
                      type: 'search',
                      placeholder: 'Search for an Item',
                      id: 'search',
                      className: this.state.loading ? 'loading' : '',
                      onChange: e => {
                        if (e.target.value.length > 1) {
                          e.persist();
                          this.onChange(e, client);
                        }
                      },
                    })}
                  />
                )}
              </ApolloConsumer>
              {isOpen && (
                <DropDown>
                  {this.state.items.map((item, index) => (
                    <DropDownItem
                      {...getItemProps({
                        item,
                      })}
                      key={item.id}
                      highlighted={index === highlightedIndex}
                    >
                      <img width={50} src={item.image} alt={item.title} />
                      {item.title}
                    </DropDownItem>
                  ))}
                  {!this.state.items.length && !this.state.loading && (
                    <DropDownItem>Nothing found for {inputValue}</DropDownItem>
                  )}
                </DropDown>
              )}
            </div>
          )}
        </Downshift>
      </SearchStyles>
    );
  }
}

export default Search;
