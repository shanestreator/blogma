import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { GET_ME } from '../GraphQL/Query/Queries'

class Dashboard extends Component {
  render() {
    return (
      <Query query={GET_ME}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) {
            return `Error! ${error.message}`
          }

          return (
            <div className="container-fluid home__background-image vh-100 px-0 mx-0">
              <div className="row light-overlay mw-100 mx-0">
                <div className="col-12">
                  <p className="text-center text-white display-4 pt-5">
                    Welcome, {data.me.name.split(' ')[0]}!
                  </p>
                </div>
              </div>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default Dashboard
