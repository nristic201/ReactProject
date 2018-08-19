export const ATTACH_TO_CALENDAR= 'ATTACH_TO_CALENDAR'
export const SAVE_CALENDAR_ATTACHMENTS_REQ='SAVE_CALENDAR_ATTACHMENTS_REQ'
export const SAVE_CALENDAR_ATTACHMENTS_SUCC='SAVE_CALENDAR_ATTACHMENTS_SUCC'
export const LOAD_CALENDAR_ATTACHMENTS='LOAD_CALENDAR_ATTACHMENTS'

export const attachToCalendar = (obj) =>{
    return {
        type : ATTACH_TO_CALENDAR,
        payload: obj
    }
} 
export const saveCalendarAttachmentsReq = (id, data) => {
    return {
        type: SAVE_CALENDAR_ATTACHMENTS_REQ,
        payload: {
            id: id,
            data: data
        }
    }
}
export const saveCalendarAttachmentsSucc  = (data) => {
    return {
        type: SAVE_CALENDAR_ATTACHMENTS_SUCC,
        payload:data
    }
}
export const loadCalendarAttachments = (data) => {
    return {
        type:LOAD_CALENDAR_ATTACHMENTS,
        payload : data
    }
}