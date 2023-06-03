import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {users} from './base';

const Container = styled.div`
    margin: 10px auto;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Box = styled.div`
    text-align: center;
    padding: 10px;
    border: 1px solid black;
    border-radius: 3px;
`
const Name = styled.div`
    font-size: 25px;
    font-weight: 400;
`
const Button = styled.button`
    border: 1px solid gray;
    border-radius: 3px;
    padding:2px 5px;
`

export const index = () => {
    const navigate = useNavigate()
  return (
    <Container>
        {
            users.map(({name , id}) => (
            <Box>
                <Name>{name}</Name>
                <Button onClick={() => navigate(`/index/${id}`)}>more info</Button>
            </Box>
            ))
        }
    </Container>
  )
}

export default index