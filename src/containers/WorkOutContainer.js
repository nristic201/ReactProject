import React from 'react'
import { connect } from 'react-redux'
import { WorkOutList } from '../components/WorkOutList'
import { addToFavorites } from '../actions/Lists.actions';
import { CustomModal } from '../components/CustomModal';
import { Button, Input } from 'semantic-ui-react';

class WorkOutContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }
    saveToFavorites = () => {
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
        return <div className='workout-container' >
            <h2> Today's WorkOutList </h2>
            <Input transparent placeholder='Enter List Name...' onKeyUp={this.handleKeyUp} />
            <WorkOutList list={this.props.workout} />
            <Button onClick={this.saveToFavorites} content='Save To Favorites' />
            <CustomModal list={this.props.workout} confirm={this.confirmTodayWorkout} />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        workout: state.lists.workout
    }
}

export default connect(mapStateToProps, { addToFavorites })(WorkOutContainer)