import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Landing from './components/layout/Landing'
import Login from './components/auth/Login'
import Navbar from './components/layout/Navbar'
import Register from './components/auth/Register'

const App = () => (
  <Router>
    <Navbar />
    <Route exact path="/" component={Landing} />
    <section className="container">
      <Switch>
        <Route exact path="/register" component={Register} />
        <Login exact path="/login" component={Login} />
      </Switch>
    </section>
  </Router>
)

export default App
