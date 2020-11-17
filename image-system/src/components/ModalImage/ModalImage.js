import React from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import { ModalWrapper, Modal, ModalImg } from '../../styles/modal.js';
import { MediumText, BoldText, CloseBtn, SmallText, NormalText } from '../../styles/main';

import iconClose from '../../images/close.svg';

export const ModalImage = (props) => {
  const history = useHistory();

  const goToUserPage = id => {
    history.push(`/users/${id}`)
  }

  return (
    <ModalWrapper>
        <Modal>
            <CloseBtn src={iconClose} onClick={props.handleClick} />
            <ModalImg src={props.file} alt={props.subtitle} />
            <MediumText>{props.subtitle}</MediumText>
            <BoldText onClick={() => goToUserPage(props.id)}>{props.author}</BoldText>
            <SmallText>{moment(props.date, "YYYY-MM-DD").format("DD/MM/YYYY")}</SmallText>
            <NormalText>{props.tags}</NormalText>
            <NormalText>{props.collection}</NormalText>
        </Modal>
     </ModalWrapper>
  );
}