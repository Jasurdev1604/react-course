import React , {useContext} from 'react'
import { StudentContext} from './context'

const Component = () => {

    const [state , dispatch] = useContext(StudentContext)

    return (<>
        <h1>Count:{state.count}</h1>
        <button onClick={() => dispatch({type:'minus'})}>minus</button>
        <button onClick={() => dispatch({type:'plus'})}>plus</button>
    </>)
}

export default Component