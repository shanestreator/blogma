import React, { Component } from 'react'
import { Query, ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag'
import { JWT_TOKEN } from '../constants'

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`

class Navbar extends Component {
  state = {
    authToken: null
  }

  componentWillMount() {
    const authToken = localStorage.getItem(JWT_TOKEN)

    if (authToken) {
      return this.setState({ authToken })
    } else {
      return this.setState({ authToken: null })
    }
  }

  render() {
    // const { authToken } = this.state
    // console.log('Navbar Render', this)

    return (
      <nav className="sticky-top navbar navbar-expand-md navbar-dark bg-info d-flex justify-content-between">
        <a className="col navbar-brand" href="/">
          Blogma
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="col collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a
              className="nav-item nav-link d-flex justify-content-center"
              href="/"
            >
              Home
            </a>

            <a
              className="nav-item nav-link d-flex justify-content-center"
              href="#"
            >
              About
            </a>

            <Query query={IS_LOGGED_IN}>
              {({ data }) => {
                console.log('data: ', data)
                return !data.isLoggedIn ? (
                  <a
                    className="nav-item nav-link d-flex justify-content-center"
                    href="/login"
                  >
                    Login
                  </a>
                ) : (
                  <a
                    className="nav-item nav-link d-flex justify-content-center"
                    onClick={() => {
                      localStorage.removeItem(JWT_TOKEN)
                    }}
                    href="/login"
                  >
                    Logout
                  </a>
                )
              }}
            </Query>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
