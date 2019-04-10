import { gql } from 'apollo-boost'

export const SIGNUP_MUTATION = gql`
  mutation createUser($email: String!, $password: String!, $name: String!) {
    createUser(data: { email: $email, password: $password, name: $name }) {
      token
    }
  }
`

export const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      token
    }
  }
`

export const CREATE_POST = gql`
  mutation createPost($title: String!, $body: String!, $published: Boolean!) {
    createPost(data: { title: $title, body: $body, published: $published }) {
      id
      title
      body
      published
    }
  }
`
export const UPDATE_POST = gql`
  mutation updatePost(
    $id: ID!
    $title: String
    $body: String
    $published: Boolean
  ) {
    updatePost(
      id: $id
      data: { title: $title, body: $body, published: $published }
    ) {
      id
      title
      body
      published
    }
  }
`
