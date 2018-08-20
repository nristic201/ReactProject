import React from 'react'
import { addExercise } from '../actions/Workout.actions'
import { connect } from 'react-redux'
import ExerciseDisplay from '../components/ExerciseDisplay'

class Exercise extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick = () => {
        const obj = {
            ...this.state,
            ...this.props.data
        }
        this.props.addExercise(obj)
    }
    render() {
        return (
                <ExerciseDisplay data={this.props.data} onClick={this.handleClick} />
            )
    }
}

export default connect(null, { addExercise })(Exercise)
