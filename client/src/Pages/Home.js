import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Navbar from '../Components/Navbar'
import GET_POSTS from '../graphql/query/getPosts'

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`

export default class Home extends Component {
  componentDidMount() {
    return (
      <Query query={IS_LOGGED_IN}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`
          return <Navbar data={data} />
        }}
      </Query>
    )
  }

  render() {
    return (
      <div className="container-fluid px-0 home__background-image vh-100">
        <div className="light-overlay mw-100">
          <div className="container text-white d-flex justify-content-center">
            <div className="row">
              <h3 className="col-12 pt-5">Posts</h3>
              <ul className="col-12 list-group">
                <Query query={GET_POSTS}>
                  {({ loading, error, data }) => {
                    if (loading) return 'Loading...'
                    if (error) {
                      return `Error! ${error.message}`
                    }
                    console.log('data: ', data)

                    return data.posts.map(post => {
                      return (
                        <li
                          key={post.id}
                          className="list-group-item"
                          style={{
                            maxWidth: '960px',
                            backgroundColor: 'rgba(255, 255, 255, .2)'
                          }}
                        >
                          <div className="row">
                            <div className="col-12">
                              <h5>{post.title}</h5>
                            </div>
                            <div className="col-12">
                              Author: {post.user.name}
                            </div>
                          </div>
                        </li>
                      )
                    })
                  }}
                </Query>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
