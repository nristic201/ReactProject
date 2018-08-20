import React from 'react'
import { connect } from 'react-redux'
import WorkOutList from '../components/WorkOutList'
import { addToFavoritesReq } from '../actions/Favorites.actions';
import { Button, Input, Message } from 'semantic-ui-react';
import FavoritesContainer from './FavoritesContainer';
import ExercisesContainer from './ExercisesContainer';
import FilterContainer from './FilterContainer';
import { attachToCalendarReq } from '../actions/calendar.actions'
import { removeExercise } from '../actions/Workout.actions'

class WorkOutContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            error: null
        }
    }
    preventEmpty = () => {
        if (this.state.name.length === 0) {
            this.setState({
                error: 'ENTER LIST NAME'
            })
            return false
        }
        else if (this.props.workout.length === 0) {
            this.setState({
                error: 'EMPTY LIST'
            })
            return false
        }
        return true;
    }
    handleClick = () => {
        if (this.preventEmpty()) {
            const { workout, addToFavoritesReq, user } = this.props
            const obj = {
                name: this.state.name,
                list: workout
            }
            addToFavoritesReq(user.id, obj)
            this.setState({
                error: null
            })
        }
    }
    handleClick2 = () => {
        if (this.preventEmpty()) {
            this.props.attachToCalendarReq(
                this.props.user.id,
                {
                    date: new Date(),
                    name: this.state.name,
                    list: this.props.workout
                }
            )
            this.setState({
                error: null
            })
        }
    }
    handleKeyUp = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleClick3 = (name) => {
        this.props.removeExercise(name)
    }
    render() {
        return (
            <div>
                <FilterContainer />
                <div>
                    <div className='workout-container' >
                        <span> Today's WorkOutList
                            <Input placeholder='Enter List Name...' onKeyUp={this.handleKeyUp} />

                            {this.state.error && <Message negative>
                                {this.state.error}
                            </Message>}
                        </span>
                        <WorkOutList list={this.props.workout} onClick={this.handleClick3} />
                        <Button onClick={this.handleClick} content='Save To Favorites' />
                        <Button onClick={this.handleClick2} content='Attach To Calendar' />
                        {/* <CustomModal list={this.props.workout} confirm={this.handleClick2} /> */}
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
        user: state.user,
        favorites: state.favorites,
        calendarAttachments: state.calendarAttachments
    }
}

export default connect(mapStateToProps, { addToFavoritesReq, attachToCalendarReq, removeExercise })(WorkOutContainer)