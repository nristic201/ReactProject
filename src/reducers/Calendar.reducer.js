import { ATTACH_TO_CALENDAR_DAY } from "../actions/calendar.actions";


export const CalendarReducer = ({},action) =>{
    switch(action){
        case ATTACH_TO_CALENDAR_DAY:
        {
            return action.payload
        }
    }
}