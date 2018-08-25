export const ATTACH_TO_CALENDAR_REQ= 'ATTACH_TO_CALENDAR_REQ'
export const ATTACH_TO_CALENDAR_SUCC= 'ATTACH_TO_CALENDAR_SUCC'
export const REMOVE_FROM_CALENDAR_REQ= 'REMOVE_FROM_CALENDAR_REQ'
export const REMOVE_FROM_CALENDAR_SUCC= 'REMOVE_FROM_CALENDAR_SUCC'
export const LOAD_CALENDAR_ATTACHMENTS='LOAD_CALENDAR_ATTACHMENTS'

export const attachToCalendarSucc = (arr) =>{
    return {
        type : ATTACH_TO_CALENDAR_SUCC,
        payload: arr
    }
} 
export const attachToCalendarReq = (id, data) => {
    return {
        type: ATTACH_TO_CALENDAR_REQ,
        payload: {
            id: id,
            data: data
        }
    }
}
export const removeFromCalendarSucc = (obj) =>{
    return {
        type : REMOVE_FROM_CALENDAR_SUCC,
        payload: obj
    }
} 
export const removeFromCalendarReq = (id, data) => {
    return {
        type: REMOVE_FROM_CALENDAR_REQ,
        payload: {
            id: id,
            data: data
        }
    }
}


export const loadCalendarAttachments = (data) => {
    return {
        type:LOAD_CALENDAR_ATTACHMENTS,
        payload : data
    }
}