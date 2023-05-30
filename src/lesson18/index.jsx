import React, { useEffect , useState } from "react";

const Index = () => {

    const [data , setData] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments' , {
            method:'GET',
        })
        .then(res => res.json()).then(res => setData(res))
    } , [])
    return(<>
        <table border={1}>
            <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>body</th>
            </tr>
            </thead>
            <tbody>
            {
                data.map(({id , name , email , body}) => {
                        return(
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{body}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>)
}

export default Index;