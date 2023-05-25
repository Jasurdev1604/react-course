import { useState , useReducer } from "react"

const reducer = (state , {type , payload}) => {
    switch(type){
        case 'plus':
            return state + 1
        case 'minus':
            return state -1
        case 'baymount':
            return state + payload
        default :
            return state
    }
}

const Home = () => {

    const [state , setState] = useState(10);

    const [counter , dispatch] = useReducer(reducer , 0)

    const onSelected = (({target:{value}})=> {
        setState(Number(value))
    })

    return(<>
    <h1>Counter:{counter}</h1>

    <select onChange={onSelected} name="" id="">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
    </select>

    <button onClick={() => dispatch({type:'plus'})}>plus</button>
    <button onClick={() => dispatch({type:'minus'})}>minus</button>
    <button onClick={() => dispatch({type:'baymount' , payload:state})}>{state}</button>

    </>)
}

export default Home