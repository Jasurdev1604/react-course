import React  from 'react'
import { useHistory , useParams} from 'react-router-dom'
const users = [
  {id:1 , name:'eshmat' , age:20 , status:'student'},
  {id:2 , name:'toshmat' , age:20 , status:'student'},
  {id:3 , name:'xolmat' , age:20 , status:'student'},
  {id:4 , name:'gulmat' , age:20 , status:'dofm'},
  {id:5 , name:'nemat' , age:20 , status:'student'},
  {id:6 , name:'none' , age:20 , status:'studeoibnt'},
  {id:7 , name:'jasur' , age:20 , status:'student'},
]

const Info = () => {
  const history = useHistory()
  const param = useParams()
  console.log(param);
  return (
    <>
      {
        users.map(({id , name}) => {
          return <h1>{id} - {name} - <button onClick={() => history.push(`/info/${id}`)}>more</button></h1>
        })
      }
    </>
  )
}

export default Info