import { gql } from 'apollo-boost'

export const GET_AUTH = gql`
  query getAuth {
    isAuthenticated @client
  }
`

export const GET_ME = gql`
  query me {
    me {
      id
      name
      email
      posts {
        id
        title
        body
        published
      }
    }
  }
`

export const GET_POST = gql`
  query post($id: ID!) {
    post(id: $id) {
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

export const GET_POSTS = gql`
  query posts {
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
