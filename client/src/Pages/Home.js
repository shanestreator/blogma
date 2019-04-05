import React, { Component } from 'react'
import GetPosts from '../graphql/query/GetPosts'
import GetUser from '../graphql/query/GetUser'

export default class Home extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="container-fluid home__background-image vh-100 px-0 mx-0">
        <div className="row light-overlay mw-100 mx-0">
          <div className="col-12" style={{ maxHeight: '200px' }}>
            <p className="text-center text-white display-4 pt-5">
              Welcome to Blogma!
            </p>
          </div>

          <div className="col-12 mw-100">
            <div className="row">
              <GetPosts />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
