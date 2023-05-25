import React , {createContext, useReducer} from "react"
import {reducer , initialState} from '../Counter/reducer'

export const CounterContext = createContext()

const CounterC = ({children}) => {
    
    const data = useReducer(reducer , initialState)

    return(<>
    <CounterContext.Provider value = {data}>
        {children}
    </CounterContext.Provider>
    </>)
} 

export default CounterC