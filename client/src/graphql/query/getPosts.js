import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_POSTS = gql`
  query {
    posts {
      id
      title
      body
      published
      user {
        name
      }
    }
  }
`

export default () => {
  return (
    <Query query={GET_POSTS}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) {
          return `Error! ${error.message}`
        }

        return data.posts.map(post => {
          return (
            <div className="col-md-4 text-white" key={post.id}>
              <div
                className="card mb-4 shadow-sm"
                style={{
                  backgroundColor: 'rgba(23, 162, 184, .5)'
                }}
              >
                <img src="..." class="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">{post.body}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
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
  )
}
