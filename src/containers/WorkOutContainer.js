import React from 'react'
import { connect } from 'react-redux'
import { WorkOutList } from '../components/WorkOutList'
import { addToFavorites } from '../actions/Favorites.actions';
import { CustomModal } from '../components/CustomModal';
import { Button, Input } from 'semantic-ui-react';
import FavoritesContainer from './FavoritesContainer';
import ExercisesContainer from './ExercisesContainer';
import FilterContainer from './FilterContainer';

class WorkOutContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }
    handleClick = () => {
        const { workout, addToFavorites } = this.props
        addToFavorites(workout, this.state.name)
        
    }
    confirmTodayWorkout = () => {

    }
    handleKeyUp = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    render() {
        return (
            <div>
                <FilterContainer />
                <div>
                    <div className='workout-container' >
                        <h2> Today's WorkOutList </h2>
                        <Input transparent placeholder='Enter List Name...' onKeyUp={this.handleKeyUp} />
                        <WorkOutList list={this.props.workout} />
                        <Button onClick={this.handleClick} content='Save To Favorites' />
                        <CustomModal list={this.props.workout} confirm={this.confirmTodayWorkout} />
                    </div>
                    <FavoritesContainer />
                </div>
                <ExercisesContainer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        workout: state.lists.workout,
        user:state.user
    }
}

export default connect(mapStateToProps, { addToFavorites })(WorkOutContainer)