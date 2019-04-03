import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import jwt_decode from 'jwt-decode'

import history from './history'
import store from './Redux/store'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import './App.css'

// Check for token
// if (localStorage.jwtToken) {
//   setAuthToken(localStorage.jwtToken)

//   const decoded = jwt_decode(localStorage.jwtToken)

//   store.dispatch(setCurrentUser(decoded))

//   const currentTime = Date.now() / 1000
//   if (decoded.exp < currentTime) {
//     store.dispatch(logoutUser())

//     // store.dispatch(clearCurrentProfile()) // Clear current profile

//     window.location.href = '/admin/login' // Redirect to login
//   }
// }

const client = new ApolloClient({
  uri: 'http://localhost:4000'
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <div className="container-fluid px-0">
            <Navbar />
            <Router history={history}>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
            </Router>
          </div>
        </ApolloProvider>
      </Provider>
    )
  }
}

export default App
