import styled , {css , keyframes} from 'styled-components'

export const Container = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background: inherit;
`

export const Button = styled.div`
    background: coral;
    transition: 7ms;
    width:200px;
    height: 40px;
    cursor: pointer;
    display: grid;
    place-items: center;
    &:active{
        transform: scale(1.1);
    }
    user-select: none;
`

export const ActiveButton = styled(Button)`
    height: 50px;
`

export const rotate = keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`

export const Rotate = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid coral;
    animation: ${rotate} 2s linear infinite;
`