import { gql } from 'apollo-boost';

export default {
  GET_COLLECTION: gql`
    query Collection($_id: String!) {
      collection(_id: $_id) {
        _id
        name
        user {
          _id
        }
        images {
          _id
          description
          alt_description
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
        comments {
          _id
          type
          message
          created_at
          user {
            name
            username
          }
          comments {
            _id
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
    }
`,
  GET_COLLECTIONS: gql`
    query Collections {
      collections {
        _id
        name
        subtitle
        description
        user {
          _id
          username
        }
        images {
          urls {
            regular
          }
        }
      }
    }
`,
  GET_USER_COLLECTIONS: gql`
    query userCollections {
      userCollections {
        _id
        name
        subtitle
        description
        user {
          _id
          username
        }
        images {
          urls {
            regular
          }
        }
      }
    }
`,
}
