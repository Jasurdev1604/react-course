import { useState } from "react"

const WithUpdate = (Components) => {
    const Updated = () => {
        const [count , setCount] = useState(0);
        const inc = () => {
            setCount((prev) => prev + 1)
        }
        return <Components count={count} setCount = {inc}/>
    }
    return Updated
}

export default WithUpdate