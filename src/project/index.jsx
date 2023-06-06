import React from 'react'
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Houses from './Houses'
import Params from './Params'

export const index = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={'/'}  element={<Navigate to={'/houses'}/>}/>
          <Route path={'/houses'} element={<Houses/>}/>
          <Route path={'/houses/:name'} element={<Params/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default index