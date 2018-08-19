import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ExercisesList } from '../components/exercisesList';
import { fetchExercises } from '../actions/Lists.actions';

class ExercisesContainer extends Component {

    componentWillMount() {
        this.props.fetchExercises()
    }
    render() {

        return this.props.filtered.length > 0 ?
            <div className='exercises-container'>
                <ExercisesList list={this.props.filtered} />
            </div>
            :
            <h3>No Results </h3>
    }
}
const mapStateToProps = (state) => {
    return {
        filtered: state.lists.filtered
    }
}
export default connect(mapStateToProps, { fetchExercises })(ExercisesContainer)