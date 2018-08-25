import React from 'react'
import { Input, Menu } from 'semantic-ui-react';
import { filterByType, filterByName } from '../actions/Exercises.actions'
import { connect } from 'react-redux'

class FilterContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search_value: ''
        }
        this.timer = 0

    }
    handleClick = (ev) => {
        const text=ev.target.innerHTML
        console.log(ev.target.innerHTML)
        this.props.filterByType(text)
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
                <Menu secondary>
                    <Menu.Item><Input
                        icon='users'
                        iconPosition='left'
                        placeholder='Search exercises...'
                        onKeyUp={this.handleSearch} />
                    </Menu.Item>
                    <Menu.Item  onClick={this.handleClick}>
                        back
                    </Menu.Item >
                    <Menu.Item onClick={this.handleClick}>
                        chest
                    </Menu.Item>
                    <Menu.Item onClick={this.handleClick} >
                        biceps
                    </Menu.Item>
                    <Menu.Item onClick={this.handleClick} >
                        reset
                    </Menu.Item>
                </Menu>
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