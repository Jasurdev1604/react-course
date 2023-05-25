import React, { memo , useCallback, useState} from "react";
import Child from "./Child";

const Parent = ({data}) => {
    const [count , setCount] = useState(100)
    console.log(data);
    console.log('parent render');

    const data1 = useCallback(() => {
        return {name:'jasurbek'}
    } , [])

    return(<>
    <Child data1 = {data1}/>
    <h2>Parent Component {count}</h2>
    <button onClick={() => setCount(count + 1)}>plus</button>
    <button onClick={() => setCount(count - 1)}>minus</button>
    </>)
}

export default memo(Parent)