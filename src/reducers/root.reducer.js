import {combineReducers} from 'redux'
import usersReducer from './users.reducer';
import { ListsReducer } from './Lists.reducer';
import { CalendarReducer } from './Calendar.reducer';

const rootreducer = combineReducers({
    user:usersReducer,
    lists:ListsReducer,
    calendarAttachments:CalendarReducer
})

export default rootreducer