import React from 'react'
import Home from './Home'
import { Provider } from 'react-redux'
import {store} from './store'

export const index = () => {
  return (
    <Provider store = {store}>
        <Home/>
    </Provider>
  )
}

export default index