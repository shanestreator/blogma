import React, { Component } from 'react'
import TextFieldGroup from '../TextFieldGroup'
import TextAreaFieldGroup from '../TextAreaFieldGroup'

export default class UpdatePostForm extends Component {
  render() {
    const { onChange, publish } = this.props
    const { title, body, published } = this.props.parentState

    return (
      <div>
        <TextFieldGroup
          onChange={onChange}
          value={title}
          name="title"
          placeholder="Title"
          label="Title"
        />

        <div className="my-4" />

        <TextAreaFieldGroup
          onChange={onChange}
          value={body}
          name="body"
          placeholder="Body"
          label="Body"
        />

        <div className="form-check mt-4">
          <input
            checked={published}
            className="form-check-input"
            type="checkbox"
            onClick={() => {
              publish()
            }}
          />
          <label className="form-check-label">Publish Post</label>
        </div>
      </div>
    )
  }
}
