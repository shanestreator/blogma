import React, { Component } from 'react'
import { Query } from 'react-apollo'
import UpdatePost from '../Components/UpdatePost'
import { GET_POST } from '../GraphQL/Query/Queries'

export default class Post extends Component {
  render() {
    const { match } = this.props
    console.log('this.props: ', this.props)

    return (
      <div>
        <Query variables={{ id: match.params.id }} query={GET_POST}>
          {({ data, loading }) => {
            console.log('data: ', data)
            if (loading) return <p>Loading...</p>
            const { post, isEditMode } = data

            return (
              <div>
                {!isEditMode ? (
                  <h4>{post.title}</h4>
                ) : (
                  <React.Fragment>
                    <h3>Edit Post</h3>
                    <UpdatePost post={post} />
                  </React.Fragment>
                )}
              </div>
            )
          }}
        </Query>
      </div>
    )
  }
}
