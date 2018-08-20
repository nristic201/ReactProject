import {combineReducers} from 'redux'
import usersReducer from './users.reducer';
import { ListsReducer } from './Lists.reducer';
import { CalendarReducer } from './Calendar.reducer';
import { FavoritesReducer } from './Favorites.reducer';

const rootreducer = combineReducers({
    user:usersReducer,
    lists:ListsReducer,
    calendarAttachments:CalendarReducer,
    favorites:FavoritesReducer
})

export default rootreducer