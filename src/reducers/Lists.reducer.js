import { ADD_EXERCISE, REMOVE_EXERCISE } from "../actions/Workout.actions";
import { GYM_FETCH_SUCCESS, FILTER_BY_TYPE, FILTER_BY_NAME } from "../actions/Exercises.actions";

const initialState = {
    workout: [],
    exercises: [],
    filtered: []
}
export const ListsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_EXERCISE:
            {
                if (state.workout.find(el => (el.id === action.payload.id)) === undefined)
                    return {
                        ...state,
                        workout: [...state.workout, action.payload]
                    }
                return { ...state }
            }
        case REMOVE_EXERCISE:
            return {
                ...state,
                workout: state.workout.filter(el => (
                    el.name !== action.payload
                ))
            }

        case GYM_FETCH_SUCCESS: {
            return {
                ...state,
                exercises: action.payload,
                filtered: action.payload
            }
        }
        case FILTER_BY_TYPE:
            {
                if (action.payload === 'reset')
                    return {
                        ...state,
                        filtered: state.exercises
                    }
                return {
                    ...state,
                    filtered: state.exercises.filter(el => el.type === action.payload)
                }
            }
        case FILTER_BY_NAME: {
            if (action.payload.length > 0) {
                const a = state.exercises.filter(el => {
                    if (el.name.toLowerCase().includes(action.payload.toLowerCase()) > 0)
                        return el
                })
                console.log(action.payload, a)
                return {
                    ...state,
                    filtered: a
                }
            }
            return {
                ...state,
                filtered: state.exercises
            }
        }

        default: return state;
    }
}
