import { gql } from 'apollo-boost';

export default {
  ADD_COLLECTION: gql`
    mutation addCollection($collection: CollectionAdd) {
      addCollection(collection: $collection) {
        _id
        name
        subtitle
        description
        likes
      }
    }
  `,
  UPDATE_COLLECTION: gql`
    mutation updateCollection($_id: String, $collection: CollectionUpdate) {
      updateCollection(_id: $_id, input: $collection) {
        name
        subtitle
        description
        likes
      }
    }
  `,
  REMOVE_COLLECTION: gql`
    mutation removeCollection($_id: String) {
      removeCollection(collection: $collection)
    }
  `,
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
