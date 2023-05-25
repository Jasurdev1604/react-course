import React, { Component } from 'react';
import Class from './Class';
import Hooks from './Hooks';

class index extends Component {
    render() {
        return (
            <div style={{display:'flex'}}>
                <Class/>
                <Hooks/>
            </div>
        );
    }
}

export default index;