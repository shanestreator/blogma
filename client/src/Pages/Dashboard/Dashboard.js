import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { GET_ME } from '../../GraphQL/Query/Queries'
import DashboardPosts from '../../Components/Dashboard/DashboardPosts'
import DashboardNewsFeed from '../../Components/Dashboard/DashboardNewsFeed'

class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid home__background-image vh-100 px-0 mx-0">
        <div className="row light-overlay mw-100 mx-0">
          <Query query={GET_ME} errorPolicy="all">
            {({ data, loading }) => {
              if (loading) return <p>Loading...</p>
              console.log('data: ', data)
              const { me } = data

              return (
                <div className="container-fluid text-white mt-5">
                  <div className="row d-flex justify-content-center">
                    <p className="display-4 pt-5">
                      Welcome, {me.name.split(' ')[0]}!
                    </p>
                  </div>

                  <div className="row mt-5">
                    <div className="col-6">
                      <DashboardPosts me={me} />
                    </div>

                    <div className="col-6">
                      <DashboardNewsFeed />
                    </div>
                  </div>
                </div>
              )
            }}
          </Query>
        </div>
      </div>
    )
  }
}

export default Dashboard
