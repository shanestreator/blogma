import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import PostForm from '../Components/PostForm'
import { CREATE_POST } from '../GraphQL/Mutation/Mutations'

export default class NewPost extends Component {
  render() {
    return (
      <div className="container pt-5">
        <h4 className="mb-3">Create New Post</h4>
        <Mutation mutation={CREATE_POST}>
          {createPost => <PostForm onSubmit={createPost} />}
        </Mutation>
      </div>
    )
  }
}
