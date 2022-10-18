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


    return state;
}