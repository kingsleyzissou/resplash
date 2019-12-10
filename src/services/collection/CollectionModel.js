import ApolloClient from '../../apollo';
import queries from './queries';
import mutations from './mutations';

export default class Collection {

  create = async ({ user, name, subtitle, description }) => {
    const collection = {
      user: user._id, name, subtitle, description, comments: [], images: [], likes: 0
    }
    let { data } = await ApolloClient
      .mutate({
        mutation: mutations.ADD_COLLECTION,
        variables: {
          collection
        }
      })
    return data
  }

  index = async () => {
    let { data } = await ApolloClient
      .query({
        query: queries.GET_COLLECTIONS,
      })
    return data
  }

  show = async ({ _id }) => {
    let { data } = await ApolloClient
      .query({
        query: queries.GET_COLLECTION,
        variables: { _id }
      })
    return data
  }

}
