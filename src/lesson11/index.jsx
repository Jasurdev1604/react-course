import { useState , useEffect } from "react";

const Index = () => {
    const [state , setState] = useState(0);

    const [name , setName] = useState('jasurbek')

    //!case 1 

    useEffect(() => { // componentda nima ozgarsa barchasida yuradi hardoim ishlaydi
        console.log('case 1');
    })

    //!case 2

    useEffect(() => { // componentga kirganda faqat bir marta yuradi 
        console.log('case 2');
    } , [])

    //!case 3

    useEffect(() => { // arrayning ichida korsatilgan stateni kuzatadi
        console.log('case 3');
    } , [name])

    return(
        <div style={{flex:1}}>
            <h1>Count:{state}</h1>
            <h1>Name:{name}</h1>
            <input type="text" defaultValue={name} onChange={({target:{value}}) => setName(value)} />
            <button onClick={() => setState(state + 1)}>plus</button>
            <button onClick={() => setState(state - 1)}>minus</button>
        </div>
    )
}

export default Index