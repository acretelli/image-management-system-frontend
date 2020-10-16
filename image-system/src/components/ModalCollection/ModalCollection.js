import React from 'react';

import { Button } from '../../styles/main';
import { ModalWrapper, Modal } from './style/style';

export const ModalCollection = (props) => {
  return (
    <ModalWrapper>
        <Modal>
            <p>{props.title}</p>
            <p>{props.subtitle}</p>
            <img src={props.image} alt={props.subtitle} />
            <Button onClick={props.handleClick}>More</Button>
        </Modal>
     </ModalWrapper>
  );
}