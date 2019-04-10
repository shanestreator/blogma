import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-boost'
import { persistCache } from 'apollo-cache-persist'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const defaultState = {
  isAuthenticated: !!localStorage.getItem('token'),
  isEditMode: false
}

const cache = new InMemoryCache()

persistCache({
  cache,
  storage: window.localStorage
}).then(() => {
  const client = new ApolloClient({
    cache,
    uri: 'http://localhost:4000/',
    clientState: {
      defaults: defaultState,
      resolvers: {}
    },
    request: header => {
      const token = localStorage.getItem('token')

      header.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : ''
        }
      })
    }
  })

  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('root')
  )

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister()
})
