import React from 'react'
import Login from './login'
import Data from './data'
import Add from './add'
import Update from './update'

export const index = () => {
  return (
    <>
    <Login/>
    <Data/>
    <Add/>
    <Update/>
    </>
  )
}

export default index