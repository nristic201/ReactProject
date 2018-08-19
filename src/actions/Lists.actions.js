export const ADD_EXERCISE = 'add_exercise'
export const REMOVE_EXERCISE = 'remove_exercise'
export const ADD_TO_FAVORITES = 'add_to_favorites'
export const GYM_FETCH = 'GYM_FETCH'
export const GYM_FETCH_SUCCESS = 'GYM_FETCH_SUCCESS'
export const GYM_FETCH_FAIL = 'GYM_FETCH_FAIL'
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE'
export const FILTER_BY_NAME='filter_by_name'

export function addExercise(obj) {
    return {
        type: ADD_EXERCISE,
        payload: obj
    }
}
export function removeExercise(obj) {
    return {
        type: REMOVE_EXERCISE,
        payload: obj
    }
}
export function addToFavorites(list, name) {
    return {
        type: ADD_TO_FAVORITES,
        payload: {
            name: name,
            list: list
        }
    }
}
export const fetchExercises = () => {
    return {
        type: GYM_FETCH,
    }
}
export const fetchExercisesSUCCESS = (data) => {
    return {
        type: GYM_FETCH_SUCCESS,
        payload: data
    }
}

export const filterByType = criteria => {
    return {
        type: FILTER_BY_TYPE,
        payload: criteria
    }
}
export const filterByName = (name)=>{
    return {
        type: FILTER_BY_NAME ,
        payload: name
    }
}