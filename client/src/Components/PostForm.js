import React, { Component } from 'react'
import PropTypes from 'prop-types'
import history from '../history'
import TextFieldGroup from '../Components/TextFieldGroup'
import TextAreaFieldGroup from '../Components/TextAreaFieldGroup'

export default class PostForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    post: PropTypes.object
  }

  static defaultProps = {
    post: {}
  }

  state = {
    id: this.props.post.id || '',
    title: this.props.post.title || '',
    body: this.props.post.body || '',
    published: this.props.post.published || false
  }

  onChange = evt => {
    const { name, value } = evt.target

    this.setState({ [name]: value })
  }

  render() {
    const { title, body, published, id } = this.state
    const { onSubmit } = this.props

    return (
      <form
        onSubmit={evt => {
          evt.preventDefault()

          onSubmit({
            variables: {
              id,
              title,
              body,
              published
            }
          })
            .then(() => {
              this.setState({
                title: '',
                body: '',
                published: false
              })
            })
            .catch(error => console.log(error))
        }}
      >
        <TextFieldGroup
          onChange={this.onChange}
          value={title}
          name="title"
          placeholder="Title"
        />

        <div className="my-4" />

        <TextAreaFieldGroup
          onChange={this.onChange}
          value={body}
          name="body"
          placeholder="Body"
        />

        <div className="form-check mb-3">
          <input
            checked={published}
            className="form-check-input"
            type="checkbox"
            onClick={() => {
              this.setState({ published: !published })
            }}
          />
          <label className="form-check-label">Publish Post</label>
        </div>

        <button
          className="button__background"
          type="submit"
          onClick={() => {
            setTimeout(() => {
              history.push('/dashboard')
            }, 500)
          }}
        >
          {id ? 'Update' : 'Submit'}
        </button>
      </form>
    )
  }
}
