import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./actionTypes";

const initial = {
    isAuth:false
}
export const userLoginReducer = (state=initial,{type})=>{
         switch (type) {
            case USER_LOGGED_IN: return {isAuth:true};
            case USER_LOGGED_OUT:return {isAuth:false};
         
            default: return {...state};
         }
}