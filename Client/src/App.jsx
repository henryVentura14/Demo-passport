import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom'
import './App.css'
import Login from './components/login/login'
import Dash from './components/dash/dash'

const App = () => {
  return (
    <div>
      <Router >
        <Route path='/' exact render={() => <Redirect to='/login' />} />
        <Route path='/login' exact component={Login} />
        <Route path='/dash' exact component={Dash} />
      </Router>
    </div>
  )
}

export default withRouter(App)
