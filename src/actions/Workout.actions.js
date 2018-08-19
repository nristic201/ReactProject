export const ADD_EXERCISE = 'add_exercise'
export const REMOVE_EXERCISE = 'remove_exercise'



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
