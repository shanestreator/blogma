import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_USERS = gql`
  query {
    users {
      id
      name
    }
  }
`

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

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          <Query query={GET_POSTS}>
            {({ loading, error, data }) => {
              if (loading) return 'Loading...'
              if (error) {
                console.log('error: ', error)
                return `Error! ${error.message}`
              }
              console.log('data: ', data)

              return data.posts.map(post => {
                return (
                  <li key={post.id} className="list-group-item ">
                    <div className="row">
                      <div className="col-12">
                        <h5>{post.title}</h5>
                      </div>
                      <div className="col-12">Author: {post.user.name}</div>
                    </div>
                  </li>
                )
              })
            }}
          </Query>
        </ul>
      </div>
    )
  }
}
