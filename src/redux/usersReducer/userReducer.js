import { USERS_GET_DATA, USERS_GET_DATA_SUCCESS } from "./actionTypes";
const initial = {
    users:[]
}

export const usersReducer = (state=initial,{type,payload})=>{
    switch (type) {
        case USERS_GET_DATA_SUCCESS: return {...state,users:[...payload]};
        default: return {...state};
    }
}


