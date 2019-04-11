import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DashboardPosts extends Component {
  render() {
    const { me } = this.props

    return (
      <React.Fragment>
        <h4>Your Posts</h4>
        <ul className="list-group">
          {me.posts.map(post => {
            return (
              <Link className="text-white" to={`/dashboard/post/${post.id}`}>
                <li
                  className="list-group-item d-flex justify-content-between"
                  style={{
                    backgroundColor: 'rgba(23, 162, 184, .5)'
                  }}
                >
                  <div>{post.title}</div>
                  <div>
                    <span class="badge border ml-3">
                      {post.published ? 'Published' : 'Pending'}
                    </span>
                  </div>
                </li>
              </Link>
            )
          })}
        </ul>
      </React.Fragment>
    )
  }
}
