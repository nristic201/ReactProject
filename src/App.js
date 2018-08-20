import React, { Component } from 'react'
import './App.css';
import WorkOutContainer from './containers/WorkOutContainer'
import CalendarContainer from './containers/CalendarContainer'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './containers/Login';
import SidebarMenu from './components/SidebarMenu'
import {connect} from 'react-redux'
import SideBarContainer from './containers/SideBarContainer';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Login} />
          <Route path='/home' render={()=>(<SideBarContainer/>)} />
          <div id='main-content'>
            <Switch>
              <Route path='/home/workout' component={WorkOutContainer} />
              <Route path='/home/calendar' component={CalendarContainer} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user:state.user
  }
}
export default connect(mapStateToProps)(App);
