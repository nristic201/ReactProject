export const ATTACH_TO_CALENDAR_DAY= 'ATTACH_TO_CALENDAR_DAY'


export const attachToCalendar = (list) =>{
    return {
        type : ATTACH_TO_CALENDAR_DAY,
        payload: list
    }
} 