import gql from 'graphql-tag'

export default gql`
  query {
    login {
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
