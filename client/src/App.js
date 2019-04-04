import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'
import jwt_decode from 'jwt-decode'

import history from './history'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import { JWT_TOKEN } from './constants'
import './App.css'

// const errorLink = onError(({ graphQLErrors }) => {
//   if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message))
// })

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'http://localhost:4000/'
})
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(JWT_TOKEN)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})
const client = new ApolloClient({
  cache,
  link: authLink.concat(link)
})
cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem('token')
  }
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container-fluid px-0">
          <Navbar />
          <Router history={history}>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Router>
        </div>
      </ApolloProvider>
    )
  }
}

export default App
