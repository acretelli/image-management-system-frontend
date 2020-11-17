import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
`

export const Container = styled.div`
    width: ${props => props.width};
    max-width: ${props => props.maxWidth};
    height: ${props => props.height};
    margin: ${props => props.margin};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color:  ${props => props.backgroundColor};
    position: relative;
`

export const ContainerFlex = styled.div`
    width: ${props => props.width};
    max-width: ${props => props.maxWidth};
    height: auto;
    margin: ${props => props.margin};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Button = styled.button`
    margin: ${props => {
        if(props.margin) {
            return props.margin
        } else {
            return '0 4px'
        }
    }
    };
    height: 36px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    color: #fff;
    background-color: #056CF2;
`

export const DeleteButton = styled.button`
    margin: ${props => {
        if(props.margin) {
            return props.margin
        } else {
            return '0 4px'
        }
    }
    };
    height: 36px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    color: #fff;
    background-color: #D9414E;
`

export const IconBtn = styled.img`
    height: 14px;
    width: 16px;
    margin: 0 4px;
`

export const CloseBtn = styled.img`
    height: 24px;
    width: 24px;

    position: absolute;
    top: 16px;
    right: 16px;

    cursor: pointer;
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

export const BigText = styled.h1`
    text-align: center;
    margin: 16px;
    color: #056CF2;
`

export const MediumText = styled.h3`
    margin: 16px;
    text-align: center;
`

export const NormalText = styled.p`
    text-align: center;
    margin: 4px 0;
`

export const BoldText = styled.p`
    text-align: center;
    font-weight: 700;
    margin: 4px 0;
    color: #056CF2;
`

export const SmallText = styled.p`
    opacity: 0.6;
    font-size: 0.9rem;
    text-align: center;
`
