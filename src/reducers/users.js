export default function users(state = [], action){

    if(action.type === 'register'){
        return [
            ...state,
            action.payload
        ]
    }



    return state;
}