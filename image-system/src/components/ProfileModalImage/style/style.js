import styled from 'styled-components';

export const ModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items:  center;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`

export const Modal = styled.div`
    max-width: 600px;
    padding: 40px;
    border-radius: 8px;
    background-color: #fff;
    display: flex;
    align-items:  center;
    justify-content: center;
    flex-direction: column;
`

export const ModalImg = styled.img`
    height: 300px;
    margin: 16px 0;
    object-fit: cover;
`
