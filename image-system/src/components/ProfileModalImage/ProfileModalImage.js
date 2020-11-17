import React from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { AddToCollection } from '../AddToCollection/AddToCollection';

import { ModalWrapper, Modal, ModalImg } from '../../styles/modal.js';
import { CloseBtn, MediumText, NormalText, SmallText, BoldText, DeleteButton } from '../../styles/main';

import iconClose from '../../images/close.svg';

export const ProfileModalImage = (props) => {
  const history = useHistory();

  const goToUserPage = id => {
    history.push(`/users/${id}`)
  }

  return (
    <ModalWrapper>
        <Modal>
            <CloseBtn src={iconClose} onClick={props.handleClick} />
            <AddToCollection imageId={props.id} />
            <ModalImg src={props.file} alt={props.subtitle} />
            <MediumText>{props.subtitle}</MediumText>
            <BoldText onClick={() => goToUserPage(props.id)}>{props.author}</BoldText>
            <SmallText>{moment(props.date, "YYYY-MM-DD").format("DD/MM/YYYY")}</SmallText>
            <NormalText>{props.tags}</NormalText>
            <NormalText>{props.collection}</NormalText>
            <DeleteButton margin="8px auto 0 auto">Delete</DeleteButton>
        </Modal>
     </ModalWrapper>
  );
}