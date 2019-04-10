import React, { Component } from 'react'
import { ApolloConsumer, Query } from 'react-apollo'
import { JWT_TOKEN } from '../constants'
import { GET_AUTH } from '../GraphQL/Query/Queries'

class Navbar extends Component {
  render() {
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
        <Query query={GET_AUTH}>
          {({ data, loading }) => {
            if (loading) return 'Loading...'
            const { isAuthenticated } = data
            console.log('auth: ', isAuthenticated)
            return (
              <div
                className="col collapse navbar-collapse justify-content-end"
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav">
                  {isAuthenticated && (
                    <a
                      className="nav-item nav-link d-flex justify-content-center"
                      href="/dashboard"
                    >
                      Name
                    </a>
                  )}
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
                  {!isAuthenticated && (
                    <a
                      className="nav-item nav-link d-flex justify-content-center"
                      href="/login"
                    >
                      Login
                    </a>
                  )}

                  {isAuthenticated && (
                    <ApolloConsumer>
                      {client => (
                        <a
                          className="nav-item nav-link d-flex justify-content-center"
                          onClick={() => {
                            client.writeData({
                              data: { isAuthenticated: false }
                            })
                            localStorage.removeItem(JWT_TOKEN)
                          }}
                          href="/login"
                        >
                          Logout
                        </a>
                      )}
                    </ApolloConsumer>
                  )}
                </div>
              </div>
            )
          }}
        </Query>
      </nav>
    )
  }
}

export default Navbar
