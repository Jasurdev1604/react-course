import React, { Component } from 'react';

class SignUp extends Component {
    render() {
        return (
            <>
                <h1>SignUp</h1>
                <button onClick={() => this.props.getData(true)}>SignIn</button>
            </>
        );
    }
}

export default SignUp;