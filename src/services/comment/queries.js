import { gql } from 'apollo-boost';

export default {
  GET_COMMENTS: gql`
    query Comments($typeId: String!) {
      comments(typeId: $typeId) {
        comments {
          type
          message
          created_at
          user {
            name
            username
          }
        }
      }
    }
`,
}
