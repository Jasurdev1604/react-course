import React, { Component } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

class index extends Component {
    constructor(p){
        super(p)
        this.state = {
            active:true,
        }
    }
    render() {
        const getData = (data) => {
            this.setState({active:data})
        }
        return (
            <>
                {
                    this.state.active ? 
                    <SignIn getData = {getData}/>:
                    <SignUp getData={getData} />
                }
            </>
        );
    }
}

export default index;