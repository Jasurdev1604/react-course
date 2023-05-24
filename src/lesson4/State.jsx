import React, { Component } from 'react'

export default class State extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'jasurbek',
            surname:'otelbayev'
        }
    }
  render() {

    const onChange = ({target:{value , name}}) => {
        this.setState({[name]:value})
    }

    return (
      <>
      <h1>Name:{this.state.name}</h1>
      <h1>Surname:{this.state.surname}</h1>
      <input type="text" name='name' placeholder='name' onChange={onChange} />
      <input type="text" name='surname' placeholder='surname' onChange={(e)=>onChange(e)} />
      </>
    )
  }
}
