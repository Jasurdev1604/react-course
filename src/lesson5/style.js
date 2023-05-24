import styled , {css} from 'styled-components'

let size = ({type}) => {
    switch (type) {
        case 'large':
            return '200px'
        case 'medium':
            return '150px'
        case 'small':
            return '100px'
        default:
            return '150px'
    }
}

const common = css`
    font-size: 25px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 700;
    color: red;
`

export const Container = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: coral;
    padding: 20px;
`

export const Title = styled.h1`
    text-align: center;
    ${common}
`

export const Box = styled.div`
    background: ${(props) => props.bg};
    width: ${size};
    height: ${size};
    border: 2px solid blue;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Desc = styled.h1`
    font-size: 15px;
    color:${({left}) => left? 'red' : 'green'}
`