import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {users} from './base'

export const Param = () => {
  const [user , setUser] = useState({})
  const param = useParams();
  console.log(param);
  useEffect(() => {
    setUser(users[param.id - 1])
  } , [param.id])
  return (
    <table border={1}>
      <tr>
        <th style={{padding:'5px 10px'}}>№</th>
        <th style={{padding:'5px 10px'}}>Name</th>
        <th style={{padding:'5px 10px'}}>Age</th>
        <th style={{padding:'5px 10px'}}>Status</th>
        <th style={{padding:'5px 10px'}}>Hobbi</th>
      </tr>
      <tr>
        <td style={{padding:'5px 10px'}}>{user.id}</td>
        <td style={{padding:'5px 10px'}}>{user.name}</td>
        <td style={{padding:'5px 10px'}}>{user.age}</td>
        <td style={{padding:'5px 10px'}}>{user.status}</td>
        <td style={{padding:'5px 10px'}}>{user.hobbi}</td>
      </tr>
    </table>
  )
}

export default Param