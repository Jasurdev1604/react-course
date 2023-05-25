import React, { useContext } from "react";
import {CounterContext} from '../context/Counter/context'


const Count = () => {
    const [counter , dispatch] = useContext(CounterContext)
    return(<>
    <h1>Count : {counter.count}</h1>
    <button onClick={() => dispatch({type:'plus'})}>plus</button>
    <button onClick={() => dispatch({type:'minus'})}>minus</button>
    </>)
}

export default Count