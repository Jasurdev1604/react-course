import React , {useRef} from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const nameRef = useRef()
  const pwRef = useRef()
  const navigate = useNavigate();

  const onSave = () => {
    if(
      nameRef.current.value === 'jasurbek' &&
      pwRef.current.value === '1604'
    ){
      localStorage.setItem('token' , true)
      navigate('/contact')
    } else {
      localStorage.setItem('token' , false)
    }
  }

  return (
    <div>
      <label>
        <h3>Username:</h3>
        <input ref={nameRef} type="text" placeholder='username'/>
      </label>
      <label>
        <h3>Password:</h3>
        <input ref = {pwRef} type="password" placeholder='password'/>
      </label>
      <button onClick={onSave}>submit</button>
    </div>
  )
}

export default Login