import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Dash from './components/Dash'

const App = () => {
  return (
    <Router >
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/login' />} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/dash' component={Dash} />
      </Switch>
    </Router>
  )
}

export default withRouter(App)
