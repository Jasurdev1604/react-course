import {Modeme, Student} from '../context/StudentList'

const Body = () => {

    const [students , setStudents] = Student()
    const [mode] = Modeme();

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