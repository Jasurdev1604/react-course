import { useState , useReducer } from "react";
import Home from "./home";

const reducer = (state , action) => {
    switch (action.type) {
        case 'plus':
            return state + 1
        case 'minus':
            return state - 1
        case 'baymount':
            return state + action.payload
        default:
            return state
    }
}

const Index = () => {
    const [state , setState] = useState(0);

    const [name , setName] = useState('jasurbek')

    const [counter , dispatch] = useReducer(reducer , 0);

    return(
        <>
        <div style={{flex:1}}>
            <h1>Count:{state}</h1>
            <h1>Name:{name}</h1>
            <h1>Counter:{counter}</h1>

            <button onClick={() => dispatch({type:'plus'})}>plus</button>
            <button onClick={() => dispatch({type:'minus'})}>minus</button>
            <button onClick={() => dispatch({type:'baymount' , payload:5})}>5</button>
            <button onClick={() => dispatch({type:'baymount' , payload:50})}>50</button>

            <input type="text" defaultValue={name} onChange={({target:{value}}) => setName(value)} />
            <button onClick={() => setState(state + 1)}>plus</button>
            <button onClick={() => setState(state - 1)}>minus</button>
        </div>
        <Home/>
        </>
    )
}

export default Index