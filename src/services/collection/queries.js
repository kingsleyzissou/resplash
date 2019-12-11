import { gql } from 'apollo-boost';

export default {
  GET_COLLECTION: gql`
  query Collection($_id: String!) {
    collection(_id: $_id) {
      _id
      name
      images {
        _id
        description
        alt_description
        likes
        urls {
          regular
          full
        }
        user {
          name
          username
          profile_image {
            medium
          }
        }
      }
    }
  }
`,
  GET_COLLECTIONS: gql`
  query Collections {
    collections {
      _id
      name
    }
  }
`,
}
