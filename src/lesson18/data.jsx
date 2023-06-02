import React , {useEffect , useState} from 'react'


export const Index = () => {

  const [students, setStudents] = useState([])

 const getUsers = () => {
  return fetch('bu yerda backent link bolishi kerak' , {
    headers:{
      Authorization:`Bearer ${localStorage.getItem('token')}`
    }
  })
  .then(res => res.json())
  .then(res => setStudents(res?.dataList[0]))
 }

 const onDelate = (id) => {
  return fetch(`delte qilishimiz kerak bolgan data manzili/${id}`,{
    method:"DELETE",
    headers:{
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
  })
  .then(res => res.json())
  .then(res => {if(res.succes){getUsers()}})
 }

 const getData = () => {
  getUsers()
 }

  return (
    <>
    <button onClick={getData}>get Data</button>
      {
        students.map(({id , name , email}) => (
          <h1>{id} - {name} - {email} <button onClick={() => onDelate(id)}>delate</button> <button onClick={() => localStorage.setItem('id' , id)}>update</button></h1>
        ))
      }
    </>
  )
}

export default Index