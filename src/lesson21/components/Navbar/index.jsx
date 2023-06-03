import React from 'react'
import styled from 'styled-components'
import { NavLink, Outlet } from 'react-router-dom'
import {paths} from '../../utils/index'

console.log(paths);

const Container = styled.div`
    background-color: black;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
const Link = styled(NavLink)`
    font-size: 30px;
    font-weight: 600;
    text-decoration: none;
    color: white;
`

const Navbar = () => {
  return (
    <>
    <Container>
        {
            paths.map(({id , title , path , hidden}) => !hidden && (
                <Link key={id} style={({isActive}) => ({color:isActive ? 'coral' : 'white'})} to={path}>{title}</Link>
            ))
        }
    </Container>
    <Outlet/>
    </>
  )
}

export default Navbar