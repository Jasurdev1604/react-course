import React , {useContext} from 'react'
import {ModeContext, StudentContext} from './context'

const Body = () => {

    const [students , setStudents] = useContext(StudentContext)

    const [mode] = useContext(ModeContext);

    const del = (id) => {
        let res = students.filter((e) => e.id !== id)
        setStudents(res)
    }

    return (<>
        {
            students.map(({id , surname , name}) => (<h1 style={{
                color:`${mode.cl}`,
                background:`${mode.bg}`
            }} key={id}>{id} - {name} - {surname} - <button onClick={() => del(id)}>del</button></h1>))
        }
    </>)
}

export default Body