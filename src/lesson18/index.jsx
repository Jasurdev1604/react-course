import React, { useEffect , useState } from "react";

const Index = () => {

    const [data , setData] = useState([])
    console.log(data);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json()).then(res => setData(res))
    } , [])
    return(<>
    {
        data.map(({id , name , body , email}) => {
           return <p key={id}>{id} - {name} - {email} - {body}</p>
        })
    }
    </>)
}

export default Index;