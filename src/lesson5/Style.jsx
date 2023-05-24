import React, { Component } from 'react';
import { Container , Box , Title , Desc} from './style';

class Style extends Component {
    render() {
        return (
            <Container>
                <Box bg='red' type='large'>Large</Box>
                <Box bg='blue' type='medium'>Medium</Box>
                <Box bg='white' type='small'>Small</Box>
                <Title>Hey Title</Title>
                <Desc left>Description 1</Desc>
                <Desc>Description 2</Desc>
            </Container>
        );
    }
}

export default Style;