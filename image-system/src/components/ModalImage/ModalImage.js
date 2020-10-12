import React from 'react';

import { ModalWrapper, Modal } from './style/style';

export const ModalImage = (props) => {
  return (
    <ModalWrapper onClick={props.handleClick}>
        <Modal>
            <img src={props.file} alt={props.subtitle} />
            <p>{props.subtitle}</p>
            <p>{props.author}</p>
            <p>{props.date}</p>
            <p>{props.tags}</p>
            <p>{props.collection}</p>
        </Modal>
     </ModalWrapper>
  );
}