import gql from 'graphql-tag'

export default gql`
  query {
    posts {
      id
      title
      body
      published
      user {
        name
      }
    }
  }
`
