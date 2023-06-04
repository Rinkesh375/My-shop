import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { searchReducer } from "./redux/searchReducer/searchReducer";
import { singleProductReducer } from "./redux/singleProductReducer/singleProductReducer";
import { usersReducer } from "./redux/usersReducer/userReducer";
import { userLoginReducer } from "./redux/userLogin/userLoginReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({searchReducer,singleProductReducer,usersReducer,userLoginReducer})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))