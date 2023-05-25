import React , {useState} from "react"

const Hooks = () => {

    const [state , setState] = useState(0);

    const [name , setName] = useState('jasurbek')

    const [data , setData] = useState({
        state:0,
        name:'jasurbek',
    })

    console.log(state);

    return(
        <div style={{flex:1}}>
            <h1>Count:{data.state}</h1>
            <h1>Name:{data.name}</h1>
            <input type="text" defaultValue={name} onChange={({target:{value}}) => setData({...data , name:value})} />
            <button onClick={() => setData({...data , state:data.state + 1})}>plus</button>
            <button onClick={() => setData({...data , state:data.state - 1})}>minus</button>
        </div>
    )
}

export default Hooks