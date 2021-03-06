import { gql } from 'apollo-boost';

export default {
  ADD_IMAGE: gql`
    mutation addImage($_id: String, $image: ImageInput) {
      addImage(_id: $_id, input: $image) {
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
