import { ATTACH_TO_CALENDAR_SUCC, LOAD_CALENDAR_ATTACHMENTS, REMOVE_FROM_CALENDAR_SUCC } from "../actions/calendar.actions";

export const CalendarReducer = (state = [], action) => {
    switch (action.type) {
        case ATTACH_TO_CALENDAR_SUCC:
            return action.payload
        case LOAD_CALENDAR_ATTACHMENTS:
            return action.payload
        case REMOVE_FROM_CALENDAR_SUCC:
            return action.payload
        default: return state
    }
}