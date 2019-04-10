import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider, Query } from 'react-apollo'
import ApolloClient, { HttpLink, InMemoryCache, gql } from 'apollo-boost'
import { Provider } from 'react-redux'

import store from './Redux/store'
import history from './history'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import NewPost from './Pages/NewPost'
import Dashboard from './Pages/Dashboard'
import Post from './Pages/Post'
import './App.css'

const defaultState = {
  isAuthorized: false,
  token: null,
  isEditMode: false
}

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  clientState: {
    defaults: defaultState,
    resolvers: {}
  }
  // request: header => {
  //   const token = defaultState.auth.token

  //   header.setContext({
  //     headers: {
  //       authorization: token ? `Bearer ${token}` : ''
  //     }
  //   })
  // }
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <div className="container-fluid px-0">
            <Navbar />
            <Router history={history}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/post/new" component={NewPost} />
                <Route path="/post/:id" component={Post} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/Dashboard" component={Dashboard} />
              </Switch>
            </Router>
          </div>
        </ApolloProvider>
      </Provider>
    )
  }
}

export default App
