export default function auth(state = {}, action){

    if(action.type === 'LOGIN'){
        return {
            ...action.payload
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