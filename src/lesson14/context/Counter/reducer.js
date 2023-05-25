
export const initialState = {count:0}
export const reducer = (state , {type}) => {
    switch(type){
        case 'plus':
            return {...state , count:state.count + 1}
        case 'minus':
            return {...state , count:state.count - 1}
        default :
            return state
    }
}