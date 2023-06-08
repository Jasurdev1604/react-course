import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {inc , dec , incBy , decBy} from './counterSlice'

export const Home = () => {

    const dispatch = useDispatch()
    const counter = useSelector((state) => state.counterSlice.counter)

  return (
    <>
        <h1>Count:{counter}</h1>
        <button onClick={() => dispatch(inc())}>minus</button>
        <button onClick={() => dispatch(dec())}>plus</button>
        <button onClick={() => dispatch(incBy(10))}>10</button>
        <button onClick={() => dispatch(decBy(10))}>-10</button>
    </>
  )
}

export default Home