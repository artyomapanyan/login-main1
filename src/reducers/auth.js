export default function auth(state = {
    user:{}
}, action){

    if(action.type === 'LOGIN'){
        return {
            user:action.payload
        }
    }



    return state;
}