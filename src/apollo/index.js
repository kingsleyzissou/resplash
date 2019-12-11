import ApolloClient, { InMemoryCache } from 'apollo-boost';

export default new ApolloClient({
  uri: `${process.env.REACT_APP_URL}/graphql`,
  request: (operation) => {
    const token = localStorage.getItem('token')
    operation.setContext({
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },
  cache: new InMemoryCache({
    addTypename: false
  }),
});
