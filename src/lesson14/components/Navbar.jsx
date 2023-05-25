import {Modeme, Student} from '../context/StudentList'

const Navbar = () => {
    const [students] = Student()

    const [mode , setMode] = Modeme()


    return (<div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        background:`${mode.bg}`,
        color:`${mode.cl}`
    }}>
        <h1>Home {students.length}</h1>
        <h1>About</h1>
        <h1>Contact</h1>
        <h1>Info</h1>
        <button onClick={() => setMode({bg:'blue' , cl:'white'})}>dark</button>
        <button onClick={() => setMode({bg:'white' , cl:'blue'})}>light</button>
    </div>)
}

export default Navbar