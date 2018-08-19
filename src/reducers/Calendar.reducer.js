import { ATTACH_TO_CALENDAR } from "../actions/calendar.actions";

export const CalendarReducer = (state=[],action) =>{
    console.log('dal')
    switch(action.type){
        case ATTACH_TO_CALENDAR:
            return [...state,action.payload]
        
        default : return state
    }
}