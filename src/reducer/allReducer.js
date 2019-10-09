import counterReducer from './counter';
import authReducer from './auth';
import { combineReducers } from "redux";



const allReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer
})


export default allReducer;

