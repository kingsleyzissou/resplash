import { gql } from 'apollo-boost';

export default {
  ADD_COLLECTION: gql`
    mutation addCollection($collection: CollectionInput) {
      addCollection(collection: $collection) {
        _id
        name
        subtitle
        description
        likes
      }
    }
  `,
}
