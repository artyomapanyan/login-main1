export default function comments(state = [], action){

    if(action.type === 'NEW_COMMENT'){
        return [
            ...state,
            action.payload
        ]
    }
    return state;
}