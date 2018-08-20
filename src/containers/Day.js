
import React from 'react'
import { Button, Popup, Menu, Label, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { attachToCalendarReq, removeFromCalendarReq } from '../actions/calendar.actions'
import { ShowList } from '../components/ShowList';
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
            todayWorkout: {
                date: this.state.todayWorkout.date,
                ...element
            }
        },
            () => this.props.attachToCalendarReq(
                this.props.user.id,
                this.state.todayWorkout
            )

        )
    }
    handleClick2 = () => {
        this.props.removeFromCalendarReq(
            this.props.user.id,
            this.state.todayWorkout
        )
        this.setState({
            ...this.state.todayWorkout,
            buttonStyle: {
                display: 'block'
            },
            labelStyle: {
                display: 'none'
            }
        })

    }
    renderList = () => {
        if (this.props.favorites.length > 0) {
            return (
                this.props.favorites.map(el => {
                    return <Menu.Item name='inbox'>
                        {/* promeni arrow */}
                        <Label color='teal' onClick={() => this.handleClick(el)}>Choose</Label>
                        {el.name}
                    </Menu.Item>
                }))
        }
        else {
            return <h3>empty list</h3>
        }
    }
    render() {
        let day = this.state.todayWorkout.date.slice(8, 10)
        return (
            <div className='calendar-day'>
                {day}
                <div className='day-content' >
                    <Popup trigger={<Button content='Add Workout' icon='add' style={this.state.buttonStyle} />}
                        flowing
                        hoverable
                    >
                        <Menu vertical>{this.renderList()}</Menu>
                    </Popup>

                    <Popup trigger={
                        <Label style={this.state.labelStyle} color='teal' >
                        <Button icon='minus' size='tiny' circular color='blue' onClick={this.handleClick2} />
                        {this.state.todayWorkout ? this.state.todayWorkout.name : 'none'}
                        </Label>}
                        flowing
                        hoverable
                    >
                        <Menu vertical>
                            <ShowList list={this.state.todayWorkout.list} />
                        </Menu>
                    </Popup>

                </div>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        favorites:state.favorites,
        user: state.user,
        calendarAttachments: state.calendarAttachments
    }
}
export default connect(mapStateToProps, { attachToCalendarReq, removeFromCalendarReq })(Day)