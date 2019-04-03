import gql from 'graphql-tag'

export default gql`
  mutation login($index: String!, $value: String!) {
    login(index: $index, value: $value) @client {
      auth
      email
      password
    }
  }
`
