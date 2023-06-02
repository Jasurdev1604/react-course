import React from 'react'
import { Container , Link } from "./style.js";

export const Navbar = () => {
  return (
    <Container>
      <Link activeStyle = {{color:'coral'}} exact to={'/'}>Logo</Link>
      <Link activeStyle = {{color:'coral'}} to={'/home'}>Home</Link>
      <Link activeStyle = {{color:'coral'}} to={'/about'}>About</Link>
      <Link activeStyle = {{color:'coral'}} to={'/info'}>Info</Link>
      <Link activeStyle = {{color:'coral'}} to={'/contact'}>Contact</Link>
    </Container>
  )
}

export default Navbar