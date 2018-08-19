export const FAVORITES_SAVE_REQUEST = 'FAVORITES_SAVE_REQUEST'
export const FAVORITES_SAVE_SUCCESS = 'FAVORITES_SAVE_SUCCESS'
export const ADD_TO_FAVORITES = 'add_to_favorites'
export const LOAD_FAVORITES = 'LAOD_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'

export const favoritesSaveRequest = (id, data) => {
    return {
        type: FAVORITES_SAVE_REQUEST,
        payload: {
            id: id,
            data: data
        }
    }
}
export const favoritesSaveSuccess = (id, data) => {
    return {
        type: FAVORITES_SAVE_SUCCESS,

    }
}

export const addToFavorites = (list, name) => {
    return {
        type: ADD_TO_FAVORITES,
        payload: {
            name: name,
            list: list
        }
    }
}
export const loadFavorites = (data) => {
    return {
        type:LOAD_FAVORITES,
        payload : data
    }
}
export const removeFromFavorites = (name) => {
    return {
        type: REMOVE_FROM_FAVORITES,
        payload: name

    }
}