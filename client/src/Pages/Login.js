import React, { Component } from 'react'
import history from '../history'
import { JWT_TOKEN } from '../constants'
import TextFieldGroup from '../Components/TextFieldGroup'
import LoginOrSignup from '../Components/LoginOrSignup'

class Login extends Component {
  state = {
    login: true,
    email: '',
    password: '',
    name: ''
  }

  onChange = evt => {
    const { name, value } = evt.target

    this.setState({ [name]: value })
  }

  onSubmit = evt => {
    evt.preventDefault()
  }

  render() {
    const { login } = this.state

    return (
      <div className="vh-100 login__background-image d-flex">
        <div className="dark-overlay">
          <div className="py-3 py-sm-4 px-0 mx-0" />
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
                <h5 className="card-title text-center mb-0">
                  {login ? 'Login | Blogma' : 'Signup | Blogma'}
                </h5>
              </div>

              {login ? (
                <React.Fragment>
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
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className="col-12 login__input-field">
                    <TextFieldGroup
                      placeholder="Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                    />
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
                </React.Fragment>
              )}

              <div className="col-12 login__input-field">
                <LoginOrSignup
                  parentState={this.state}
                  _confirm={this._confirm}
                />
              </div>

              <div className="col-12 text-center">
                <button
                  className="btn btn-link text-white"
                  onClick={() => {
                    this.setState({ login: !login })
                  }}
                >
                  {login ? 'Sign up for Blogma' : 'Login to existing account'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  _confirm = async data => {
    const { token } = this.state.login ? data.login : data.createUser
    this._saveUserData(token)
    history.push('/dashboard')
  }

  _saveUserData = token => {
    localStorage.setItem(JWT_TOKEN, token)
  }
}

export default Login
