import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {dekriment , incByAmount, increment , decByAmount } from '../../Store/counterSlice/index'

export const index = () => {

    const counter = useSelector((state) => state.counterReducer.counter)

    const dispatch = useDispatch()

  return (
    <>
    <h1>Couter:{counter}</h1>
    <button onClick={() => dispatch(dekriment())}>minus</button>
    <button onClick={() => dispatch(increment())}>plus</button>
    <button onClick={() => dispatch(incByAmount(10))}>10</button>
    <button onClick={() => dispatch(decByAmount(10))}>-10</button>
    </>
  )
}

export default index