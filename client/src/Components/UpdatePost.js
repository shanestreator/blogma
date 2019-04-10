import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import PostForm from '../Components/PostForm'
import { UPDATE_POST } from '../GraphQL/Mutation/Mutations'

export default class UpdatePost extends Component {
  render() {
    const { post } = this.props
    return (
      <Mutation mutation={UPDATE_POST}>
        {updatePost => <PostForm post={post} onSubmit={updatePost} />}
      </Mutation>
    )
  }
}
