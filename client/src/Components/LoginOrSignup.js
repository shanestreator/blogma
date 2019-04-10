import React, { Component } from 'react'
import { ApolloConsumer, Mutation } from 'react-apollo'
import { SIGNUP_MUTATION, LOGIN_MUTATION } from '../GraphQL/Mutation/Mutations'

export default class LoginOrSignup extends Component {
  render() {
    const { login, email, password, name } = this.props.parentState

    return (
      <Mutation
        mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
        variables={{ email, password, name }}
        onCompleted={data => this.props._confirm(data)}
      >
        {mutation => {
          return (
            <ApolloConsumer>
              {client => (
                <button
                  className={
                    login
                      ? 'btn btn-info form-control py-1'
                      : 'btn btn-success form-control py-1'
                  }
                  onClick={() => {
                    client.writeData({ data: { isAuthenticated: true } })
                    return mutation()
                  }}
                >
                  {login ? 'Login' : 'Create Acount'}
                </button>
              )}
            </ApolloConsumer>
          )
        }}
      </Mutation>
    )
  }
}
