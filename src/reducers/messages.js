import moment from "moment";

export default function comments(state = [], action){

    if(action.type === 'NEW_MESSAGE'){
        return [
            ...state,
            action.payload
        ]
    }
    if(action.type === 'COMMENT_READ'){
        return [
            ...state.map((el) => {
                if(el.id === action.payload) {
                    el.read_at = moment().format('DD-MM-YYYY HH:mm:ss')
                }
                return el
            })
        ]
    }



    return state;
}