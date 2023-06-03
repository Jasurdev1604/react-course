import React from 'react'
import { BrowserRouter, Routes , Route , Navigate} from 'react-router-dom'
import {paths} from './utils/index'
import Navbar from './components/Navbar'
import HomeWork from './HomeWork'
import Param from './HomeWork/Param'

export const index = () => {
  return (
    <>
    <BrowserRouter>
      {/* <Routes>
        <Route element={<Navbar/>}>
          <Route path={'/'} element={<Navigate to={'/home'}/>}/>
          {
            paths.map(({id , path , element}) => (
              <Route key={id} path={path} element={element}/>
            ))
          }
        </Route>
      </Routes> */}
      <Routes>
        <Route path={'/index'} element={<HomeWork/>}/>
        <Route path={'/index/:id'} element={<Param/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default index