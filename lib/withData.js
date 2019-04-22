// Конфигурация клиента для GraphQL, с помощью которой мы можем делать запросы к серверу на фронтэнде.
import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import gql from 'graphql-tag';
import { endpoint } from '../config';
import { LOCAL_STATE_QUERY } from '../components/Cart';

const typeDefs = gql`
  extend type Query {
    cart: [ID!]!
  }
`;

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cart @client
  }
`;

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    cache: new InMemoryCache(),
    request: operation => {
      operation.setContext({
        fetchOptions: {
          // Это будет нужно для отслеживания текущего юзера
          credentials: 'include',
        },
        headers,
      });
    },
    clientState: {
      resolvers: {
        Mutation: {
          toggleCart(_, varibales, { cache }) {
            const { cartOpen } = cache.readQuery({
              query: LOCAL_STATE_QUERY,
            });
            const data = {
              data: { cartOpen: !cartOpen },
            };
            cache.writeData(data);
            return data;
          },
          addToCart(_, variables, { cache }) {
            const { cart } = cache.readQuery({
              query: GET_CART_ITEMS,
            });
            console.log('cart', cart);
            const data = {
              cart: [...cart, variables.id],
            };
            cache.writeQuery({ query: GET_CART_ITEMS, data });
            return data.cart;
          },
        },
      },
      typeDefs,
      defaults: {
        cartOpen: false,
        cart: [],
      },
    },
  });
}

// Отдаём хай-ордер компонент, нам нужно будет обернуть всё приложение в него.
export default withApollo(createClient);
