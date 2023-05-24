import React, { Component } from 'react';

class index extends Component {
    constructor(prop){
        super(prop)
        console.log('constructor');
        this.state = {
            count:0
        }
        this.plus = this.plus.bind(this)
    }
    // componentWillMount(){ //!render ishlashidan oldin yuradi
    //     console.log('componentWillMount');
    // }
    // componentDidMount(){ //! renderdan keyin yuradi
    //     console.log('componentDidMount');
    // }
    // componentWillReceiveProps(){ //!child parentdan prop olib kelganda 
    //     console.log('componentWillReceiveProps');
    // }
    // shouldComponentUpdate(){ //! componentni update qilish yoki qilmaslikni , har doim true or false ga return qiladi
    //     console.log('shouldComponentUpdate');
    //     return true
    // }
    // componentWillUpdate(){//!renderdan oldin prop kelishidan keyin
    //     console.log('componentWillUpdate');    
    // }
    // componentDidUpdate(){ //! re-render bolgandan keyin
    //     console.log('componentDidUpdate');
    // }
    // componentWillUnmount(){ //! after DOM element remover 
    //     console.log('componentWillUnmount');
    // }
    plus(){
        this.setState({count:this.state.count + 1})
    }
    render(){
        return (
            <>
                <h1>Jasurbek Otelbayev</h1>
                <h1>{this.state.count}</h1>
                <button onClick={this.plus.bind(this)}>++</button>
            </>
        );
    }
}

export default index;