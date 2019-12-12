import ApolloClient from '../../apollo';
import queries from './queries';
import mutations from './mutations';

export default class Comment {

  index = async ({ typeId }) => {
    let { data } = await ApolloClient
      .query({
        query: queries.GET_COMMENTS,
        variables: { typeId }
      })
    return data
  }

  add = async ({ typeId, comment, type }) => {
    let { data } = await ApolloClient
      .mutate({
        mutation: mutations.ADD_COMMENT,
        variables: { typeId, comment, type }
      })
    return data
  }

}
