import React, { useEffect , useState } from "react";

const Index = () => {

    const [data , setData] = useState([])
    console.log(data);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json()).then(res => setData(res))
    } , [])
    return(<>
        <table border={1}>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>body</th>
            </tr>
                {
                    data.map(({id , name , email , body}) => {
                        return(
                            <tr>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{body}</td>
                            </tr>
                        )
                    })
                }
        </table>
    </>)
}

export default Index;