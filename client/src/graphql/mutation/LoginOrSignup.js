import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

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

export default class LoginOrSignup extends Component {
  render() {
    const { login, email, password, name } = this.props.parentState
    // console.log('this.props: ', this.props.parentState)
    return (
      <Mutation
        mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
        variables={{ email, password, name }}
        onCompleted={data => this.props._confirm(data)}
      >
        {(mutation, result) => {
          const { data, client, loading, error, called } = result

          return (
            <button
              className={
                login
                  ? 'btn btn-info form-control py-1'
                  : 'btn btn-success form-control py-1'
              }
              onClick={mutation}
            >
              {login ? 'Login' : 'Create Acount'}
            </button>
          )
        }}
      </Mutation>
    )
  }
}