import gql from 'graphql-tag'

export default gql`
  query {
    auth @client {
      auth
      email
      password
    }
  }
`
