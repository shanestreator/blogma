import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { connect } from 'react-redux'
import { JWT_TOKEN } from '../constants'
import { logoutUser } from '../Redux/Actions/authActions'
import { GET_AUTH } from '../GraphQL/Query/Queries'

class Navbar extends Component {
  state = {
    loggedIn: false
  }

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
            const { isAuthenticated, token } = data
            console.log('auth: ', isAuthenticated, token)
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
                    <a
                      className="nav-item nav-link d-flex justify-content-center"
                      onClick={() => {
                        localStorage.removeItem(JWT_TOKEN)
                        this.props.logoutUser()
                      }}
                      href="/login"
                    >
                      Logout
                    </a>
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

const mapState = ({ auth, errors }) => ({ auth, errors })

export default connect(
  mapState,
  { logoutUser }
)(Navbar)
