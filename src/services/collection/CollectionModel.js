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

  addImage = async ({ _id, image }) => {
    let { data } = await ApolloClient
      .mutate({
        mutation: mutations.ADD_IMAGE,
        variables: {
          _id, image
        }
      })
    return data
  }

  removeImage = async ({ _id, image }) => {
    let { data } = await ApolloClient
      .mutate({
        mutation: mutations.REMOVE_IMAGE,
        variables: {
          _id, image: image._id
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
