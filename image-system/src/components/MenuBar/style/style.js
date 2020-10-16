import styled from 'styled-components';

export const Bar = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const MenuButton = styled.button`
    margin: 8px;
    box-shadow: none;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }
`