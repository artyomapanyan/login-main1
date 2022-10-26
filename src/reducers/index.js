import { combineReducers } from 'redux';
import users from "./users";
import auth from "./auth.js";
import comments from "./comments";
import messages from "./messages";




export default combineReducers({
    users, auth, comments, messages
})
