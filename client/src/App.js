import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { withClientState } from 'apollo-link-state'
import { ApolloLink } from 'apollo-link'

import './App.css'

import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'

const cache = new InMemoryCache()

const defaultState = {
  auth: {
    __typename: 'auth',
    auth: false,
    email: '',
    password: ''
  }
}

const stateLink = withClientState({
  cache,
  defaults: defaultState
})

const client = new ApolloClient({
  link: ApolloLink.from([
    stateLink,
    new HttpLink({
      uri: 'http://localhost:4000'
    })
  ]),
  cache
})

console.log('client: ', client)

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container-fluid px-0">
          <Navbar />
          <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Router>
        </div>
      </ApolloProvider>
    )
  }
}

export default App
