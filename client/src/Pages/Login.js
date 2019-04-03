import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import TextFieldGroup from '../Components/TextFieldGroup'

export default class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  onChange = evt => {
    const { name, value } = evt.target

    this.setState({ [name]: value })
  }

  onSubmit = evt => {
    evt.preventDefault()

    const loginUser = gql`
      mutation {
        login(data: { email: "shane@gmail.com", password: "shane1234" }) {
          user {
            id
            name
            email
            password
          }
          token
        }
      }
    `
  }

  render() {
    return (
      <div className="vh-100 login__background-image">
        <div className="dark-overlay">
          <div className="py-3 py-sm-4" />
          <div
            className="container card text-white border-0 mt-5"
            style={{
              height: '400px',
              maxWidth: '720px',
              backgroundColor: 'rgba(23, 162, 184, .5)'
            }}
          >
            <form
              className="card-body row d-flex justify-content-center align-items-center"
              onSubmit={this.onSubmit}
            >
              <div className="col-12">
                <h5 className="card-title text-center mb-0">Login to Blogma</h5>
              </div>

              <div className="col-12 login__input-field">
                <TextFieldGroup
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>

              <div className="col-12 login__input-field">
                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>

              <div className="col-12 login__input-field">
                <button
                  type="submit"
                  className="btn btn-light form-control py-1"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
