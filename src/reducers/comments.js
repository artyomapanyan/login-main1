export default function comments(state = [], action){

    if(action.type === 'NEW_COMMENT'){
        return [
            ...state,
            action.payload
        ]
    }
    if(action.type === 'LIKE'){
        return [
            ...state.map((el) => {
                if(el.id === action.payload.id) {
                     el.like.push(action.payload.userId)
                }
                return el
            })
        ]
    }
    if(action.type === 'DIS_LIKE'){
        return [
            ...state.map((el) => {
                if(el.id === action.payload.id) {
                    el.like = el.like.filter(el1 => el1 !== action.payload.userId)
                }
                return el
            })
        ]
    }
    if(action.type === 'DELETE_COMMENT'){
        return [
            ...state.filter((obj) => obj.id !== action.payload.id)


        ]
    }
    if(action.type === 'UPDATE_COMMENT'){
        return [
            ...state.map((obj) => {
                if(obj.id === action.payload.id){
                    return {
                        ...obj,
                        ...action.payload
                    }
                }
                return obj
            })


        ]
    }
    return state;
}