import React, { Component } from 'react'
import {users} from './mock';

export default class Crud extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:users,
            name:'',
            status:'',
            selected:null,
        }
    }
  render() {

    const onDelate = (id) => {
        let res = this.state.data.filter(v => v.id !== id)
        this.setState({data:res})
    }

    const onFilter = ({target:{value}}) => {
        let res = users.filter(({name}) => name.includes(value))
        this.setState({data:res})
    }

    const onSelected = ({target:{value}}) => {
        let res = users.filter(({id}) => id === Number(value))
        this.setState({data:res})
    }

    const onAdd = () => {
        let res = [...this.state.data , {id:this.state.data.length + 1 , name:this.state.name , status:this.state.status}]
        this.setState({data:res})
    }

    const change = ({target:{value , placeholder}}) => {
        this.setState({[placeholder] : value})
    }

    const onEdit = (selected) => {
        this.setState({selected})
    }


    const changeSelected = ({target:{value , name}}) => {
        this.setState({selected:{...this.state.selected , [name]:value}})
    }

    const save = (id) => {
        let res = this.state.data.map((e) => {
            return e.id === id ? this.state.selected : e
        })
        this.setState({data:res , selected:null})   
    }

    return (
      <>
      <h1 style={{textAlign:'center'}}>CRUD</h1>
      <input type="text" onChange={onFilter} placeholder='filter' />
      <select onChange={onSelected}>
        <option value="">select</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <div>
      <input type="text" placeholder='name' onChange={change}/>     
      <input type="text" placeholder='status' onChange={change}/>
      <button onClick={onAdd}>add</button>
      </div>
      <table border={1}>
        <tr>
            <th style={{padding:'10px'}}>id</th>
            <th style={{padding:'10px'}}>name</th>
            <th style={{padding:'10px'}}>status</th>
            <th style={{padding:'10px'}}>delate</th>
            <th style={{padding:'10px'}}>edit</th>
        </tr>
        {
            this.state.data.map(({id ,name , status}) => (
                <tr key={id}>
                    <td style={{padding:'10px'}}>{id}</td>
                    <td style={{padding:'10px'}}>
                    {
                    id === this.state?.selected?.id ? 
                    <input onChange={changeSelected} name='name' type="text" defaultValue={this.state?.selected?.name} />:name
                    }</td>
                    <td style={{padding:'10px'}}>
                    {
                    id === this.state?.selected?.id ? 
                    <input onChange={changeSelected} name='status' type="text" defaultValue={this.state?.selected?.status} />:status
                    }</td>
                    <td style={{padding:'10px'}}>
                        <button onClick={()=>onDelate(id)}>del</button>
                    </td>
                    <td style={{padding:'10px'}}>
                        {
                            id === this.state?.selected?.id ? 
                            <>
                            <button onClick={() => save(id)}>save</button>
                            <button onClick={() => this.setState({selected:null})}>cancle</button>
                            </>:
                            <button onClick={()=>onEdit({id ,name , status})}>edit</button>
                        }
                    </td>
                </tr>
            ))
        }
      </table>
      </>
    )
  }
}