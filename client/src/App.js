import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { Provider } from 'react-redux'

import store from './Redux/store'
import history from './history'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import './App.css'

const token = localStorage.getItem('token')

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  headers: {
    Authorization: `Bearer ${token}`
  }
})

class App extends Component {
  state = {
    auth: {
      token: null,
      loggedIn: false
    }
  }

  signup = () => {
    console.log('signup')
  }

  login = token => {
    console.log('token: ', token)
    if (token) {
      this.setState({ auth: { token, loggedIn: true } })
      history.push(`/dashboard`)
    }
  }

  logout = () => {
    this.setState({ auth: { token: null, loggedIn: false } })
  }

  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <div className="container-fluid px-0">
            <Navbar />
            <Router history={history}>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/Dashboard" component={Dashboard} />
            </Router>
          </div>
        </ApolloProvider>
      </Provider>
    )
  }
}

export default App
