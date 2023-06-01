import React , {useEffect , useState} from 'react'


export const Index = () => {

  const [data , setData] = useState([]);
  const [selection , setSelection] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(res => setData(res))
  } , [])

  const get = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then(res => setSelection(res))
  }

  console.log(selection);

  return (
    <>
      {
        data.map(({id , name , email , username}) => {
          return (
            <h2 key={id}>{id} - {name} - {username} - {email} <button onClick={() => get(id)} >get</button></h2>
          )
        })
      }
      <p>{selection.id} - {selection.name} - {selection.email}</p>
    </>
  )
}

export default Index