import React from 'react'
import {houses} from './utils'
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    margin: 10px auto;
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Box = styled.div`
    width: 350px;
    height: 350px;
    border: 1px solid black;
    border-radius: 3px;
    margin: 20px 0;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color:#0D263B ;
    padding:10px 0 0 10px ;
    cursor: pointer;
`
const Img = styled.img`
    width: 348px;
    border-top-right-radius:3px ;
    border-top-left-radius:3px ;
`
const Rooms = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px;
`
const Item = styled.p`
    font-size :18px;
    color: #696969;
`
const Price = styled.div`
    font-size: 20px;
    color:#0D263B;
    font-weight: 600;
    margin-left: 15px;
`

export const Houses = () => {
    const navigate = useNavigate()
  return (
    <Container>
        {
            houses.map(({id , name, img , price , details:{bed , bath , sq}}) => (
                <Box key={id}>
                    <Img src = {img}/>
                    <Title onClick={() => navigate(`/houses/${name}`)}>{name}</Title>
                    <Rooms>
                        <Item>Bed : {bed}</Item>
                        <Item>Bath : {bath}</Item>
                        <Item>Garage : 3</Item>
                        <Item>Sq : {sq}</Item>
                    </Rooms>
                    <Price>Price : {price}/mo</Price>
                </Box>
            ))
        }
    </Container>
  )
}

export default Houses