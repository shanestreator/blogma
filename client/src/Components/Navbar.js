import React, { Component } from 'react'
import { connect } from 'react-redux'
import { JWT_TOKEN } from '../constants'

class Navbar extends Component {
  state = {
    loggedIn: false
  }

  render() {
    console.log('Navbar Props: ', this.props)

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
            {this.state.loggedIn ? (
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
                  this.context.logout()
                  localStorage.removeItem(JWT_TOKEN)
                }}
                href="/login"
              >
                Logout
              </a>
            )}
          </div>
        </div>
      </nav>
    )
  }
}

const mapState = ({ auth, errors }) => ({ auth, errors })

export default connect(null)(Navbar)
