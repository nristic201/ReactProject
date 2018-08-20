import { SUCCESSFUL_LOGIN, FAILED_LOGIN, LOG_OUT } from "../actions/users.action";


export default function(state = null, action)
{
    switch(action.type)
    {
        case SUCCESSFUL_LOGIN:
            return action.payload;
        case FAILED_LOGIN:
            return {
                msg: "wrong email/password"
            }
        case LOG_OUT: return null
        default: return state;
    }
}