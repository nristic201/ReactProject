export const USER_LOGIN = 'user_login'
export const SUCCESSFUL_LOGIN = 'successful_login'
export const FAILED_LOGIN = 'failed_login'
export const LOG_OUT = 'LOG_OUT'

export function loginUser(user) {
    return {
        type: USER_LOGIN,
        payload: user
    }
}
export function successfulLogin(data) {
    return {
        type: SUCCESSFUL_LOGIN,
        payload: data
    }
}

export function failedLogin() {
    return {
        type: FAILED_LOGIN
    }
}
export function LogOut() {
    return {
        type: LOG_OUT
    }
}