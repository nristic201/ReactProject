import { USER_LOGIN, successfulLogin, failedLogin } from "../actions/users.action";
import { takeEvery, call, put,  } from 'redux-saga/effects'
import {fetchGymExercises, SaveInDatabase, fetchUserByEmail, SaveAttachmentsInDatabase, SaveFavoritesInDatabase} from '../api_calls/api_calls'
import { GYM_FETCH, fetchExercisesSUCCESS } from "../actions/Exercises.actions";
import { FAVORITES_SAVE_REQUEST, loadFavorites } from "../actions/Favorites.actions";
import { SAVE_CALENDAR_ATTACHMENTS_REQ, loadCalendarAttachments, ATTACH_TO_CALENDAR_REQ, attachToCalendarSucc, saveCalendarAttachmentsReq } from "../actions/calendar.actions";

export function* watcherUserLogin() {
    yield takeEvery(USER_LOGIN, workerUserLogin)
}
function* workerUserLogin(action) {
    const user = yield call(fetchUserByEmail, action.payload.email)
    if (user !== undefined && user !== null && (user.password === action.payload.password)) {
        yield put(successfulLogin(user))
        yield put(loadFavorites(user.favorites))
    }
    else {
        yield put(failedLogin())
    }
}

export function* watcherGymFetch() {
    yield takeEvery(GYM_FETCH, workerGymFetch)
}
function* workerGymFetch(action) {
    const data = yield call(fetchGymExercises)
    if (data.length>0) {
        yield put(fetchExercisesSUCCESS(data))
    }
}


export function* watcherSaveFavorites(){
    yield takeEvery(FAVORITES_SAVE_REQUEST,workerSaveFavorites)
}
function* workerSaveFavorites(action){
    const data =yield call(SaveFavoritesInDatabase,action.payload.id,action.payload.data)
}



export function* watcherSaveAttachments(){
    yield takeEvery(SAVE_CALENDAR_ATTACHMENTS_REQ,workerSaveAttachments)
}
function* workerSaveAttachments(action){
    console.log(action)
    const data =yield call(SaveAttachmentsInDatabase,action.payload.id,action.payload.data)
}

// export function* watcherAttachToCalendar(){
//     yield takeEvery(ATTACH_TO_CALENDAR_REQ,workerAttachToCalendar)
// }
// export function* workerAttachToCalendar(action){
//     yield put(attachToCalendarSucc(action.payload))
//     yield put(saveCalendarAttachmentsReq(action.payload.id,action.payload.data))
// }
