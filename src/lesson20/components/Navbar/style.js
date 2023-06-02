import  styled from "styled-components";
import {NavLink} from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 50px;
    background-color: black;
`

export const Link = styled(NavLink)`
    font-size: 24px;
    color: #fff;
    font-weight: 600;
    text-decoration: none;
`