import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import { GET_POSTS } from '../GraphQL/Query/Queries'

export default class Home extends Component {
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
              <Query query={GET_POSTS}>
                {({ loading, error, data }) => {
                  if (loading) return 'Loading...'
                  if (error) {
                    return `Error! ${error.message}`
                  }
                  const { posts } = data

                  return posts.map(post => {
                    return (
                      <div className="col-md-4 text-white" key={post.id}>
                        <div
                          className="card mb-4 shadow-sm"
                          style={{
                            backgroundColor: 'rgba(23, 162, 184, .5)'
                          }}
                        >
                          <img src="..." className="card-img-top" alt="..." />
                          <div className="card-body">
                            <p className="card-text">{post.body}</p>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="btn-group">
                                <Link to={`/post/${post.id}`}>
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-outline-secondary"
                                  >
                                    View{post.title}
                                  </button>
                                </Link>
                                <button
                                  type="button"
                                  className="btn btn-sm btn-outline-secondary"
                                >
                                  Edit
                                </button>
                              </div>
                              <small className="text-muted">9 mins</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }}
              </Query>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
