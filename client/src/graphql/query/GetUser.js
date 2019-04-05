import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_USER = gql`
  query {
    me {
      id
      name
    }
  }
`

export default () => {
  return (
    <Query query={GET_USER}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) {
          return `Error! ${error.message}`
        }

        return data.me.name.split(' ')[0]
      }}
    </Query>
  )
}
