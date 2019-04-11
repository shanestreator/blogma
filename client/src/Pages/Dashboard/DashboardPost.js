import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import { GET_POST } from '../../GraphQL/Query/Queries'

import DashboardUpdatePostModal from '../../Components/Dashboard/DashboardUpdatePostModal'

export default class DashboardPost extends Component {
  render() {
    const { match } = this.props

    return (
      <Query variables={{ id: match.params.id }} query={GET_POST}>
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>
          const { post } = data
          return (
            <React.Fragment>
              <div className="container-fluid home__background-image vh-100 px-0 mx-0">
                <div className="row light-overlay mw-100 mx-0">
                  <div
                    className="container text-white mt-3 p-2 rounded"
                    style={{
                      maxHeight: 'calc(100vh - 100px)',
                      overflowY: 'auto',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }}
                  >
                    <div className="sticky-top row px-3 d-flex justify-content-between">
                      <Link
                        className="button__background text-white border-0"
                        to="/dashboard"
                        style={{ textDecoration: 'none' }}
                      >
                        <i className="fas fa-arrow-left mr-1" />
                        Go Back
                      </Link>

                      <button
                        className="button__background text-white border-0"
                        type="button"
                        data-toggle="modal"
                        data-target="#exampleModalScrollable"
                      >
                        <i class="fas fa-edit mr-1" /> Edit Post
                      </button>
                    </div>

                    <div className="row d-flex justify-content-end mr-1 mt-5">
                      {post.published ? (
                        <h3>
                          <span
                            className="badge"
                            style={{
                              backgroundColor: 'rgba(40, 167, 69, .75)'
                            }}
                          >
                            Post Published
                          </span>
                        </h3>
                      ) : (
                        <h3>
                          <span className="badge">Not Published</span>
                        </h3>
                      )}
                    </div>

                    <div className="row d-flex justify-content-center">
                      <h1>{post.title}</h1>
                    </div>

                    <div className="row d-flex justify-content-center">
                      <p>Author | {post.user.name}</p>
                    </div>

                    <div className="row mt-4">
                      <div className="container">
                        <p>{post.body}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <DashboardUpdatePostModal post={post} />
            </React.Fragment>
          )
        }}
      </Query>
    )
  }
}
