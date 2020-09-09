import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Landing from './components/layout/Landing'
import Login from './components/auth/Login'
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import Register from './components/auth/Register'
import { Provider } from 'react-redux'
import store from './store'

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <section className="container">
        <Alert />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Login exact path="/login" component={Login} />
        </Switch>
      </section>
    </Router>
  </Provider>
)

export default App
