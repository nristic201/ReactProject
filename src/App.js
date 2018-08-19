import React, { Component } from 'react'
import './App.css';
import WorkOutContainer from './containers/WorkOutContainer'
import FavoritesContainer from './containers/FavoritesContainer';
import FilterContainer from './containers/FilterContainer';
import ExercisesContainer from './containers/ExercisesContainer';


class App extends Component {
  render() {
    return (
      <div>
        <FilterContainer />
        <div>
          <WorkOutContainer />
          <FavoritesContainer />
        </div>
        <ExercisesContainer />
      </div>
    )
  }
}

export default App;
