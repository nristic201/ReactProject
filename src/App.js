import React, { Component } from 'react'
import './App.css';
import WorkOutContainer from './containers/WorkOutContainer'
import FavoritesContainer from './containers/FavoritesContainer';
import FilterContainer from './containers/FilterContainer';
import ExercisesContainer from './containers/ExercisesContainer';
import CalendarContainer from './containers/CalendarContainer'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './containers/Login';
import SidebarMenu from './components/SidebarMenu'
import {connect} from 'react-redux'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Login} />
          <Route path='/home' render={()=>(<SidebarMenu user={this.props.user}/>)} />
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
