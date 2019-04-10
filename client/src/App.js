import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import history from './history'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import NewPost from './Pages/NewPost'
import Dashboard from './Pages/Dashboard'
import Post from './Pages/Post'
import './App.css'

class App extends Component {
  render() {
    return (
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
    )
  }
}

export default App
