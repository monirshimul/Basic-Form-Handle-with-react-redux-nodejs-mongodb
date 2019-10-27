import { combineReducers } from "redux";
import counterReducer from './counter';
import authReducer from './auth';
import AnotherReducer from './AnotherReducer';
import FormReducer from './FormReducer';



const allReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
    another: AnotherReducer,
    FormReducer
})


export default allReducer;

