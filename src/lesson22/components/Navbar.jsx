import React from 'react'
import { NavLink , Outlet } from 'react-router-dom'
import styled from 'styled-components'
import {base} from '../utils/index'

const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-evenly;
    height: 60px;
    background-color: black;
    .active{
        color:coral;
    }
`
const Link = styled(NavLink)`
    text-decoration:none;
    color: white;
    font-size: 20px;
    font-weight: 400;
`

export const Navbar = () => {
  return (
    <>
    <Container>
        {
            base.map(({id , title , path , hidden}) => 
               (!hidden && (<Link key={id} to={path}>{title}</Link>))
            )
        }
    </Container>
    <Outlet/>
    </>
  )
}

export default Navbar