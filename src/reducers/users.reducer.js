import { SUCCESSFUL_LOGIN, FAILED_LOGIN } from "../actions/users.action";


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
        default: return state;
    }
}