import React from 'react'
import Navbar from './components/Navbar'
import {Route , Switch ,Redirect} from 'react-router-dom';
import Info from './components/Info'
import Contact from './components/Contact'

export const Index = () => {
  return (
    <>
      <Navbar/>
      <Route path={'/'} exact > <Redirect to={'/info'}/> </Route>
      <Route path={'/info'} component={Info}/>
      <Route path={'/contact'} component={Contact}/>
    </>
  )
}

export default Index