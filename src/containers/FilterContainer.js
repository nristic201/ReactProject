import React from 'react'
import { Input } from 'semantic-ui-react';
import {filterByType, filterByName } from '../actions/Exercises.actions'
import { connect } from 'react-redux'

class FilterContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search_value: ''
        }
        this.timer = 0

    }

    handleSearch = (e) => {
        const { value } = e.target
        clearTimeout(this.timer)
        this.timer = setTimeout(() => this.setState({
            search_value: value
        }, () => this.props.filterByName(this.state.search_value)), 1000)
    }
    //this.props.filterByName(this.state.search_value)
    render() {
        return (
            <div className='filter-container'>
                {/* <Checkbox
                        toggle
                        label='back'
                        value='back'
                        checked={this.state.checked}
                        onChange={this.handleChange}
                    />
                    <Checkbox
                        toggle
                        value='chest'
                        label='chest'
                        checked={this.state.checked}
                        onChange={this.handleChange}
                    /> */}
                <Input
                    icon='users'
                    iconPosition='left'
                    placeholder='Search exercises...'
                    onKeyUp={this.handleSearch} />
            </div>
        )
    }
}
// const mapStateToProps = (state) => ({
//     filtered: state.lists.filtered
// })
const mapDispatchToProps = (dispatch) => ({
    filterByType: (crit) => dispatch(filterByType(crit)),
    filterByName: (name) => dispatch(filterByName(name)),
})
export default connect(null, mapDispatchToProps)(FilterContainer)