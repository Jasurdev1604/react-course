import React , {createContext ,useState} from "react";

export const StudentContext = createContext()

export const ModeContext = createContext()

const StudentsList = ({children}) => {

    const [students , setStudents] = useState([
        {id:1 , name:'eshamt' , surname:'eshmatov'},
        {id:2 , name:'toshmat' , surname:'toshmatov'},
        {id:3 , name:'gulmat' , surname:'gulmatov'},
        {id:4 , name:'xolmat' , surname:'xolmatov'},
        {id:5 , name:'axmat' , surname:'axmatov'},
        {id:6 , name:'shaxmat' , surname:'shaxmatov'},
        {id:7 , name:'pulmad' , surname:'pulmatov'},
    ])

    const [mode , setMode] = useState({bg:'white' , cl:'black'})

    return (
        <StudentContext.Provider value = {[students , setStudents]}>
            <ModeContext.Provider value = {[mode , setMode]}>
                {children}
            </ModeContext.Provider>
        </StudentContext.Provider>
    )
}

export default StudentsList