import React from 'react';

class Info extends React.Component {
    render() {
        const {children , title } = this.props
        return <>
        <h2>Info page {this.props?.data?.age} </h2>
        <h3>{children}</h3>
        <h3>{title}</h3>
        </>;
    }
}
export default Info;