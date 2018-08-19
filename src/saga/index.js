import { USER_LOGIN, successfulLogin, failedLogin } from "../actions/users.action";
import { takeEvery, call, put,  } from 'redux-saga/effects'
import { fetchUserByEmail } from '../api_calls/api_calls'
import { GYM_FETCH, fetchExercisesSUCCESS } from "../actions/Lists.actions";
import {fetchGymExercises} from '../api_calls/api_calls'

export function* watcherUserLogin() {
    yield takeEvery(USER_LOGIN, workerUserLogin)
}
function* workerUserLogin(action) {
    const user = yield call(fetchUserByEmail, action.payload.email)
    if (user !== undefined && user !== null && (user.password === action.payload.password)) {
        yield put(successfulLogin(user))
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