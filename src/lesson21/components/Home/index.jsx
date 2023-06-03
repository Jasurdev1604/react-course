import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  width:90% ;
  margin:0 auto ;
`

const Boxes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Box = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  text-align: center;
  padding: 10px;
`

const Home = () => {
  const navigate = useNavigate()
  const [data , setData] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(res => setData(res))
  }, [])

  return (
    <>
      <Container>
        <Boxes>
         {
          data.map(({id , name}) => (
            <Box>
                <h1>{name}</h1>
                <button onClick={() => navigate(`/home/${id}`)}>show more</button>
            </Box>
          ))
         }
        </Boxes>
      </Container>
    </>
  )
}

export default Home