import React from 'react'
import Day from './Day';
import { connect } from 'react-redux'
class CalendarContainer extends React.Component {
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
                calendar: [...prevState.calendar, date.toISOString()]
            }))
        }
    }
    renderHeader = () => {
        let array = this.state.calendar.slice(0, 7)
        console.log(array)
        return array.map(el =>{
            let s= new Date(el.slice(0,10))
            s=s.getDay()
            console.log(this.state.days[s])
            return <div>{this.state.days[s]}</div>
        }
        )
    }
    renderDays = () => {
        const ca = this.props.calendarAttachments
        return this.state.calendar.map(el => {
            let p = ca.filter(element => {
                return element.date.slice(0,10) === el.slice(0,10)
            });
            if (p.length > 0)
                return <Day data={p[0]}/>
            else return <Day data={{
                date:el,
                name:null,
                list:null
            }}/>
        }
        )
    }
    render() {
        return (
            <div className='calendar'>
                <h1 style={{margin: '0 auto'}}>{this.state.month}</h1>
                <div className='calendar-header'>{this.renderHeader()}</div>
                <div className='calendar-week'>{this.renderDays()}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        calendarAttachments: state.calendarAttachments
    }
}

export default connect(mapStateToProps)(CalendarContainer)
