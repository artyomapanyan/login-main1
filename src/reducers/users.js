export default function users(state = [], action){

    if(action.type === 'register'){
        return [
            ...state,
            action.payload
        ]
    }
    if (action.type === 'UPDATE_USER') {
        return [
                action.payload,
                ...state.filter((obj) => obj.id !== action.payload.id)

        ]
    }




    return state;
}