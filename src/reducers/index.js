import { combineReducers } from 'redux';
import users from "./users";
import auth from "./auth.js";
import comments from "./comments";



export default combineReducers({
    users, auth, comments
})
