import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {paths} from '../../utils/index'

export const Param = () => {
    const p = useParams()
    
    const [user , setUser] = useState({})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${p.id}`)
        .then(res => res.json())
        .then(res => setUser(res))
    } , [p.id])

  return (
    <>
    <h1>{user.id}</h1>
    <h1>{user.name}</h1>
    <h1>{user.username}</h1>
    <h1>{user.email}</h1>
    </>
  )
}

export default Param