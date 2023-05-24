import React, { Component } from 'react';

const list = [
    {id:1 , name:'jasurbek' , age:19},
    {id:2 , name:'eshmat' , age:5},
    {id:3 , name:'toshmat' , age:85},
    {id:4 , name:'gulmat' , age:20.},
    {id:5 , name:'xolmat' , age:0.5},
    {id:6 , name:'exmat' , age:96},
    {id:7 , name:'shaxmat' , age:20},
]

class index extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:list
        }
    }
    render() {

        const onDel = (id) => {
            let res = this.state.data.filter((e) => e.id !== id)
            this.setState({data:res})   
        }

        return (
            <>{
                this.state.data.map(({id , name , age}) => (
                    <h1 key = {id}>{id} - {name} - {age} <button onClick={() => onDel(id)}>del</button> </h1>
                ))
            }</>
        );
    }
}

export default index;