import React , { useEffect } from 'react'
import axios from 'axios'

const index = () => {
  return (
    <>
    {
        useEffect(() => {
            axios({
                url:'https://jsonplaceholder.typicode.com/users',
                method:'GET',
                headers:{},
                body:{name:'jasurbek',age:19},
                timeout:3000,
            }).then(res => console.log(res)) 
        } , [])
    }
    </>
  )
}

export default index