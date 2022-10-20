export default function users(state = [], action){

    if(action.type === 'register'){
        return [
            ...state,
            action.payload
        ]
    }
    if (action.type === 'UPDATE_USER') {
        return {
            ...state,
            users:[
                action.payload,
                ...state.users.filter((obj) => obj.id !== action.payload.id)
            ]
        };
    }



    return state;
}