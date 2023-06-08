import React , {createContext ,useReducer} from "react";
import {reducer , initialState} from './reducer'

export const StudentContext = createContext()

const StudentsList = ({children}) => {

    const data = useReducer(reducer , initialState)

    return (
        <StudentContext.Provider value = {data}>
                {children}
        </StudentContext.Provider>
    )
}

export default StudentsList