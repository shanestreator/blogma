import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
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

            <a
              className="nav-item nav-link d-flex justify-content-center"
              href="/login"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
    )
  }
}
