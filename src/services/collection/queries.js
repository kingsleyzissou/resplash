import { gql } from 'apollo-boost';

export default {
  GET_COLLECTION: gql`
  query Collection($_id: String!) {
    collection(_id: $_id) {
      _id
      name
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
