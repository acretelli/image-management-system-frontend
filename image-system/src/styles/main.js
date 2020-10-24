import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Container = styled.div`
    width: ${props => props.width};
    max-width: ${props => props.maxWidth};
    margin: ${props => props.margin};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color:  ${props => props.backgroundColor};
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Button = styled.button`
    margin: 0 4px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    color: #fff;
    background-color: #056CF2;
`

export const Input = styled.input`
    min-width: 240px;
    margin: 4px auto;

    &:last-of-type {
        margin-bottom: 24px;
    }
`

export const Link = styled.a`
    margin: 24px auto;
`

export const TextLarge = styled.p`
    font-size: 1.5rem;
    text-align: center;
`

export const Submenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SubmenuLink = styled.p`
    margin: 16px;
    font-size: 1.15rem;
    text-transform: uppercase;
    cursor: pointer;
`
