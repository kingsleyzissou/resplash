import ApolloClient from '../../apollo';
import mutations from './mutations';

export default class Image {
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
}
