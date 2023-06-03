import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Info from './components/Info'
import Contact from './components/Contact'
import { BrowserRouter , Route , Switch} from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import HomeWork from './HomeWork'

export const index = () => {

  return (
    <>
    <BrowserRouter>
    {/* <h1>{window.location.pathname}</h1>
      <Switch>
        <Route path={'/'} exact>
          <Redirect to={'/home'}/>
        </Route>
        <Route path={'/home'} component={Navbar}/>
        <Route path={'/about'}><Navbar/></Route>
        <Route path={'/info'}><Navbar/></Route>
        <Route path={'/contact'}><Navbar/></Route>
      </Switch> */}
      {/* <Switch>
        <Route path={'/'} exact component={Home}/>
        <Route path={'/home'} component={Home}/>
        <Route path={'/about'}><About/></Route>
        <Route path={'/info'}><Info/></Route>
        <Route path={'/contact'}><Contact/></Route>
        <Route path={'*'}><h1>404 not found</h1></Route>
      </Switch> */}
      <HomeWork/>
    </BrowserRouter>
    </>
  )
}

export default index