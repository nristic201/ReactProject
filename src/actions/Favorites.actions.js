export const FAVORITES_SAVE_REQUEST = 'FAVORITES_SAVE_REQUEST'
export const FAVORITES_SAVE_SUCCESS = 'FAVORITES_SAVE_SUCCESS'
export const ADD_TO_FAVORITES_REQ = 'ADD_TO_FAVORITES_REQ'
export const ADD_TO_FAVORITES_SUCC = 'ADD_TO_FAVORITES_SUCC'
export const LOAD_FAVORITES = 'LAOD_FAVORITES'
export const REMOVE_FROM_FAVORITES_REQ = 'REMOVE_FROM_FAVORITES_REQ'
export const REMOVE_FROM_FAVORITES_SUCC = 'REMOVE_FROM_FAVORITES_SUCC'

export const favoritesSaveRequest = (id, data) => {
    return {
        type: FAVORITES_SAVE_REQUEST,
        payload: {
            id: id,
            data: data
        }
    }
}
export const favoritesSaveSuccess = (data) => {
    return {
        type: FAVORITES_SAVE_SUCCESS,
        payload:data
    }
}

export const addToFavoritesReq = (id, data) => {
    return {
        type: ADD_TO_FAVORITES_REQ,
        payload: {
            id: id,
            data: data
        }
    }
}
export const addToFavoritesSucc = (data) => {
    return {
        type: ADD_TO_FAVORITES_SUCC,
        payload:data
    }
}

export const loadFavorites = (data) => {
    return {
        type:LOAD_FAVORITES,
        payload : data
    }
}
export const removeFromFavoritesReq = (id,name) => {
    return {
        type: REMOVE_FROM_FAVORITES_REQ,
        payload: {
            id: id,
            name: name
        }
    }
}

export const removeFromFavoritesSucc = (data) => {
    return {
        type: REMOVE_FROM_FAVORITES_SUCC,
        payload: data
    }
}