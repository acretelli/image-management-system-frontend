import React from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { AddToCollection } from '../AddToCollection/AddToCollection';

import { ModalWrapper, Modal, ModalImg } from '../../styles/modal.js';
import { Link } from '../../styles/main';

export const ProfileModalImage = (props) => {
  const history = useHistory();

  const goToUserPage = id => {
    history.push(`/users/${id}`)
  }

  return (
    <ModalWrapper>
        <Modal>
            <p onClick={props.handleClick}>X</p>
            <ModalImg src={props.file} alt={props.subtitle} />
            <p>{props.subtitle}</p>
            <Link onClick={() => goToUserPage(props.id)}>{props.author}</Link>
            <p>{moment(props.date, "YYYY-MM-DD").format("DD/MM/YYYY")}</p>
            <p>{props.tags}</p>
            <p>{props.collection}</p>
            <AddToCollection imageId={props.id} />
        </Modal>
     </ModalWrapper>
  );
}