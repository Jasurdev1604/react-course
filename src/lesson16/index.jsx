import React , {useState , useMemo} from "react";
import Parent from "./components/Parent";

const Index = () => {
    const [count, setCount] = useState(0)
    console.log('root render');

    const data = useMemo(() => {
        return {c:50}
    }, [])

    return(<>
    <Parent data = {data}/>
    <h1>Root Component</h1>
    <h1>Count:{count}</h1>
    <button onClick={() => setCount(count + 1)}>plus</button>
    <button onClick={() => setCount(count - 1)}>minus</button>
    </>)
}

export default Index