
import { LOAD_FAVORITES, REMOVE_FROM_FAVORITES_SUCC, ADD_TO_FAVORITES_SUCC } from "../actions/Favorites.actions";

const initialState=[]
export const FavoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_FAVORITES: return action.payload
        case REMOVE_FROM_FAVORITES_SUCC: return action.payload
        case ADD_TO_FAVORITES_SUCC: return action.payload
        default: return state;
    }
}