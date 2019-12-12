import { gql } from 'apollo-boost';

export default {
  ADD_COMMENT: gql`
    mutation addComment($typeId: String, $type: CommentType $comment: String) {
      addComment(typeId: $typeId, type: $type, input: $comment) {
        comments {
          message
        }
      }
    }
  `,
  REMOVE_IMAGE: gql`
    mutation removeImage($_id: String, $image: String) {
      removeImage(_id: $_id, image: $image) {
        _id
        images {
          description
          user {
            name
          }
        }
      }
    }
  `,
}
