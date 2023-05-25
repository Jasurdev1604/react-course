import React , {useState} from "react"

const Controlled = () => {
    const [name , setName] = useState('jasurbek')
    
    const onChange = ({target:{value}}) => {
        setName(value)
    }
    
    return(<>
    <h1>Controlled Component</h1>
    <h1>Name:{name}</h1>
    <input type="text" placeholder="name" onChange={onChange}/>
    </>)
}

export default Controlled