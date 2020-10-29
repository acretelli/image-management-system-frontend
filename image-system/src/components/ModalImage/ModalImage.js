import React from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import { ModalWrapper, Modal, ModalImg } from '../../styles/modal.js';
import { Link, CloseBtn } from '../../styles/main';

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
            <p>{props.subtitle}</p>
            <Link onClick={() => goToUserPage(props.id)}>{props.author}</Link>
            <p>{moment(props.date, "YYYY-MM-DD").format("DD/MM/YYYY")}</p>
            <p>{props.tags}</p>
            <p>{props.collection}</p>
        </Modal>
     </ModalWrapper>
  );
}