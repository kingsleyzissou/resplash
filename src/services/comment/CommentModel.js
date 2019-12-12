import ApolloClient from '../../apollo';
import queries from './queries';
import mutations from './mutations';

export default class Comment {

  index = async ({ typeId, type }) => {
    let { data } = await ApolloClient
      .query({
        query: queries.GET_COMMENTS,
        variables: { typeId, type },
        fetchPolicy: 'network-only'
      })
    return data
  }

  add = async ({ typeId, comment, type }) => {
    let { data } = await ApolloClient
      .mutate({
        mutation: mutations.ADD_COMMENT,
        variables: { typeId, type, comment }
      })
    return data
  }

}
