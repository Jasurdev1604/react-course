import React , {Component} from "react";

class Class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }
    state = {  }
    render() { 

        const plus = () => {
            this.setState({count:this.state.count + 1})
        }

        const minus = () => {
            this.setState({count:this.state.count - 1})
        }

        return ( <div style={{flex:1}}>
        <h1>count:{this.state.count}</h1>
        <button onClick={plus}>plus</button>
        <button onClick={minus}>minus</button>
        </div> );
    }
}
 
export default Class;