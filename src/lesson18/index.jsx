import React, { useEffect , useState } from "react";

const Index = () => {

    const [data , setData] = useState([])
    console.log(data);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').
        then(res => res.json()).then(res => setData(res))
    } , [])
    return(<>
    {
        data.map(({id , name , username , email}) => {
           return <p key={id}>{id} - {name} - {username} - {email}</p>
        })
    }
    </>)
}

export default Index;