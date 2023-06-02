import React , {useRef} from 'react'


export const Index = () => {

  const getUser = () => { 
    return fetch('bu yerda backendga havola bolihis kerak' , {
      method:'POST',
      headers:{
        'Content-Type' : 'aplication/json'
      },
      body:JSON.stringify(
        {
          username:nameRef.current.value,
          password:pwRef.current.value
        }
      ),
    })
    .then(res => res.json())
    .then(res => localStorage.setItem('token', res?.data))
  }
 
  const nameRef = useRef()
  const pwRef = useRef()

  return (
    <>
      <div>
        username: <input ref = {nameRef} type="text" placeholder='username' />
      </div>
      <div>
        password: <input ref = {pwRef} type="password"placeholder='password' />
      </div>
      <div><button onClick={getUser}>login</button></div>
      <div><button onClick={() => localStorage.removeItem('token')}>logout</button></div>
    </>
  )
}

export default Index