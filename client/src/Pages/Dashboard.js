import React, { Component } from 'react'
import GetUser from '../graphql/query/GetUser'

class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid home__background-image vh-100 px-0 mx-0">
        <div className="row light-overlay mw-100 mx-0">
          <div className="col-12">
            <p className="text-center text-white display-4 pt-5">
              Welcome, <GetUser />!
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
