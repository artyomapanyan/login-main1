import { combineReducers } from 'redux';
import users from "./users";
import auth from "./auth.js";


export default combineReducers({
    users, auth
})
