export default function auth(state = {
    user:{}
}, action){

    if(action.type === 'LOGIN'){
        return {
            user:action.payload
        }
    }
    if(action.type === 'LOGOUT'){
        return {}
    }
    if (action.type === 'UPDATE_USER') {
        return {
            user:action.payload
        };
    }

    return state;
}