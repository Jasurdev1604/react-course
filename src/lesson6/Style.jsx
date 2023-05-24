import React, { Component } from 'react';
import { Container , Button , ActiveButton , Rotate} from './style';
import {ThemeProvider , createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
body{
    background: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.cl};
}
`

class Style extends Component {
    state = {
        light:true,
    }
    render() {

        const theme = {
            bg:this.state.light ? 'white':'dark',
            cl:this.state.light ? 'dark':'white',
        }

        return (
            <ThemeProvider theme={theme}>
                {/* <Container> */}
                    <GlobalStyle/>
                    <Button>Click me</Button>
                    <ActiveButton>ActiveButton</ActiveButton>
                    <Rotate>Rotate</Rotate>
                {/* </Container> */}
                <button onClick={() => this.setState({light:!this.state.light})}>change</button>
            </ThemeProvider>
        );
    }
}

export default Style;