import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Store/store'
import Navbar from './components/Navbar'
import Products from './components/Products'

export const index = () => {
  return (
    <Provider store={store}>
        <Navbar/>
        <Products/>
    </Provider>
  )
}

export default index