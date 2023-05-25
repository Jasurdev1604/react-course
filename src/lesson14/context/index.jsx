import StudentsList from "./StudentList"
import Counter from './Counter/context'
const Context = ({children}) => {
    return <>
        <StudentsList>
            <Counter>
                {children}
            </Counter>
        </StudentsList>
    </>
}


export default Context