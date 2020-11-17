import React from 'react';

import { BigText, MediumText, Button, CloseBtn } from '../../styles/main';
import { ModalWrapper, Modal } from '../../styles/modal.js';

import iconClose from '../../images/close.svg';

export const ModalCollection = (props) => {


  return (
    <ModalWrapper>
        <Modal>
            <CloseBtn src={iconClose} onClick={props.handleCloseBtn} />
            <BigText>{props.title}</BigText>
            <MediumText>{props.subtitle}</MediumText>
            <img src={props.image} alt={props.subtitle} />
            <Button onClick={props.handleClick} margin="24px auto">More</Button>
        </Modal>
     </ModalWrapper>
  );
}