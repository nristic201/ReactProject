import React from 'react'
import  Day  from './Day';
export default class CalendarContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            month: 'August',
            days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            calendar: []
        }
    }
    componentWillMount() {
        this.doit();
    }
    doit = () => {
        for (let i = 1; i <= 31; i++) {
            let date = new Date('2018-08-' + i)
            this.setState(prevState => ({
                calendar: [...prevState.calendar, date]
            }))
        }
    }
    renderHeader = () => {
        let array = this.state.calendar.slice(0, 7)
        return array.map(el =>
            <div>{this.state.days[(el.getDay())]}</div>
        )
    }
    renderDays = () => {
        return this.state.calendar.map(el =>
            <Day data={el} />
        )
    }
    render() {
        return (
            <div className='calendar'>
                <div className='calendar-header'>{this.renderHeader()}</div>
                    <div className='calendar-week'>{this.renderDays()}</div>
            </div>
        )
    }
}