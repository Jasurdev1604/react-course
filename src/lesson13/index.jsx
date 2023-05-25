import React from 'react'
import Navbar from './Navbar'
import Body from './Body'
import StudentsList from './context'

const Index = () => {

    return(<>
    <StudentsList>
        <Navbar/>
        <Body/>
    </StudentsList>
    </>)
}

export default Index