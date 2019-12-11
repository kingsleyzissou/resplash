import ApolloClient, { InMemoryCache } from 'apollo-boost';

let token = localStorage.getItem('token');

export default new ApolloClient({
  uri: "http://localhost:4000/graphql",
  headers: {
    Authorization: `Bearer ${token}`
  },
  cache: new InMemoryCache({
    addTypename: false
  })
});
