import {combineReducers} from 'redux'
import usersReducer from './users.reducer';
import { ListsReducer } from './Lists.reducer';

const rootreducer = combineReducers({
    user:usersReducer,
    lists:ListsReducer
})

export default rootreducer