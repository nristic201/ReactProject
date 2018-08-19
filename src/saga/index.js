import { USER_LOGIN, successfulLogin, failedLogin } from "../actions/users.action";
import { takeEvery, call, put,  } from 'redux-saga/effects'
import {fetchGymExercises, SaveToFavorites, fetchUserByEmail} from '../api_calls/api_calls'
import { GYM_FETCH, fetchExercisesSUCCESS } from "../actions/Exercises.actions";
import { FAVORITES_SAVE_REQUEST, loadFavorites } from "../actions/Favorites.actions";

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
    const data =yield call(SaveToFavorites,action.payload.id,action.payload.data)
}