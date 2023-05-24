import React, { Component } from 'react';

class SignIn extends Component {
    render() {
        return (
            <>
                <h1>SignIn</h1>
                <button onClick={() => this.props.getData(false)}>SignUp</button>
            </>
        );
    }
}

export default SignIn;