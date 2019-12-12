import { gql } from 'apollo-boost';

export default {
  GET_COMMENTS: gql`
    query Comments($typeId: String!, $type: CommentType!) {
      comments(typeId: $typeId, type: $type) {
        type
        message
        created_at
        user {
          name
          username
        }
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
