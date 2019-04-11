import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { UPDATE_POST } from '../../GraphQL/Mutation/Mutations'
import history from '../../history'
import UpdatePostForm from '../Update/UpdatePostForm'

export default class DashboardUpdatePostModal extends Component {
  state = {
    id: this.props.post.id,
    title: this.props.post.title,
    body: this.props.post.body,
    published: this.props.post.published
  }

  publish = () => {
    this.setState({ published: !this.state.published })
  }

  onChange = evt => {
    const { name, value } = evt.target

    this.setState({ [name]: value })
  }

  render() {
    const { title, body, published, id } = this.state
    const { post } = this.props
    return (
      <div
        className="modal fade"
        id="exampleModalScrollable"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalScrollableTitle"
        aria-hidden="true"
      >
        <Mutation mutation={UPDATE_POST}>
          {updatePost => (
            <div
              className="modal-dialog modal-dialog-scrollable modal-xl"
              role="document"
            >
              <div
                className="modal-content text-white"
                style={{
                  backgroundColor: 'rgba(23, 162, 184, .5)'
                }}
              >
                <form
                  onSubmit={evt => {
                    evt.preventDefault()

                    updatePost({
                      variables: {
                        id,
                        title,
                        body,
                        published
                      }
                    })
                      .then(() => {
                        const modal = document.getElementById(
                          'exampleModalScrollable'
                        )

                        modal.removeAttribute('aria-modal')
                        modal.setAttribute('style', 'display: none')
                        modal.setAttribute('class', 'modal fade')
                        modal.setAttribute('aria-hidden', 'true')

                        const [modalBack] = document.getElementsByClassName(
                          'modal-backdrop'
                        )

                        modalBack.parentNode.removeChild(modalBack)
                      })
                      .catch(error => console.log(error))
                  }}
                >
                  <div
                    className="modal-header"
                    style={{ borderBottomColor: 'rgba(23, 162, 184, .75)' }}
                  >
                    <h5
                      className="modal-title"
                      id="exampleModalScrollableTitle"
                    >
                      Edit Post
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span className="text-white" aria-hidden="true">
                        &times;
                      </span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <UpdatePostForm
                      parentState={this.state}
                      onChange={this.onChange}
                      publish={this.publish}
                    />
                  </div>
                  <div
                    className="modal-footer"
                    style={{ borderTopColor: 'rgba(23, 162, 184, .75)' }}
                  >
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="button__background"
                      // data-dismiss={setTimeout(() => {
                      //   return 'modal'
                      // }, 250)}
                    >
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </Mutation>
      </div>
    )
  }
}
