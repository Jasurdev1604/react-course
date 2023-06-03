import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: red;
    height: 60px;
`

const Link = styled(NavLink)`
    font-size: 24px;
    color: #fff;
    font-weight: 600;
    text-decoration: none;
`

const Navbar = () => {
  return (
    <Container>
        <Link activeStyle={{color:'black'}} exact to={'/'}>Logo</Link>
        <Link activeStyle={{color:'black'}} to={'/info'}>Info</Link>
        <Link activeStyle={{color:'black'}} to={'/contact'}>Contact</Link>
    </Container>
  )
}

export default Navbar