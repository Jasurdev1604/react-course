import React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import Context from '../context'
import Count from '../components/Count'

const Index = () => {

    return(<>
    <Context>
        <Navbar/>
        <Body/>
        <Count/>
    </Context>
    </>)
}

export default Index