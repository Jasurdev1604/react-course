import React , {Component} from "react";


class App extends Component {
    render(){
        return(
            <>
            <h1>{this.props?.data?.id}-{this.props?.data?.name}</h1>
            </>
        )
    }
}

export default App