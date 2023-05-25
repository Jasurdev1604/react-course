import React , {useState} from "react";
import {users} from './mock'

const Index = () => {
    const [count , setCount] = useState(parseFloat(localStorage.getItem('count')) || 1)

    const [data , setData] = useState(JSON.parse(localStorage.getItem('base')) || users)

    console.log(data);
    
    const plus = () => {
        localStorage.setItem('count' , count + 1)
        setCount(count + 1)
    }
    const minus = () => {
        localStorage.setItem('count' , count - 1)
        setCount(count - 1)
    }

    const onDelete = (id) => {
        let res = data.filter((v) => v.id !== id)
        localStorage.setItem('base' , JSON.stringify(res))
        setData(res)
    }

    return(<>
    <h1>Count:{count}</h1>
    <button onClick={plus}>plus</button>
    <button onClick={minus}>minus</button>

    {
     data.map(({id , name , status}) => <h1 key={id}>{id} - {name} - {status} <button onClick={() => onDelete(id)}>delete</button></h1>)   
    }

    </>)
}

export default Index