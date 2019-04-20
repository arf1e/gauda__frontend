// Конфигурация клиента для GraphQL, с помощью которой мы можем делать запросы к серверу на фронтэнде.
import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint } from '../config';
import { LOCAL_STATE_QUERY } from '../components/Cart';

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
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
          addToCart(_, { item }, { cache }) {
            const data = { item };
            const { cart } = cache.readQuery({ query: LOCAL_STATE_QUERY });
            console.log({ cache, data, cart, item });
            cache.writeData({
              data: { cart: [...cart, item] },
            });
            return data;
          },
        },
      },
      defaults: {
        cartOpen: false,
        cart: [],
      },
    },
  });
}

// Отдаём хай-ордер компонент, нам нужно будет обернуть всё приложение в него.
export default withApollo(createClient);
