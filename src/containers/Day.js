
import React from 'react'
import { Button, Popup, Menu, Label } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { attachToCalendar } from '../actions/calendar.actions'
class Day extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonStyle: {
                display: 'block'
            },
            labelStyle: {
                display: 'none'
            },
            todayWorkout: null
        }
    }
    componentWillMount() {
        const { date, name, list } = this.props.data
        this.setState({
            todayWorkout: this.props.data,
            labelStyle: {
                display: name ? 'block' : 'none'
            },
            buttonStyle: {
                display: name ? 'none' : 'block'
            }
        })
    }
    handleClick = (element) => {
        this.setState({
            buttonStyle: {
                display: 'none'
            },
            labelStyle: {
                display: 'block'
            },
            todayWorkout: element
        },
            () => this.props.attachToCalendar({
                ...this.state.todayWorkout,
                date: this.props.data.date
            })

        )
    }
    renderList = () => {
        if (this.props.favorites.length > 0) {
            return (
                this.props.favorites.map(el => (
                    <Menu.Item name='inbox'>
                        {/* promeni arrow */}
                        <Label color='teal' onClick={() => this.handleClick(el)}>Choose</Label>
                        {el.name}
                    </Menu.Item>
                ))
            )
        }
        else {
            return <h3>empty list</h3>
        }
    }
    render() {
        return (
            <div className='calendar-day'>
                {this.props.data.date.getDate()}
                <div className='day-content' >
                    <Popup trigger={<Button content='Add Workout' icon='add' style={this.state.buttonStyle} />}
                        flowing
                        hoverable
                    >
                        <Menu vertical>{this.renderList()}</Menu>
                    </Popup>
                    <Label style={this.state.labelStyle} color='teal' content={this.state.todayWorkout ? this.state.todayWorkout.name : 'none'} />
                </div>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        favorites: state.lists.favorites
    }
}
export default connect(mapStateToProps, { attachToCalendar })(Day)