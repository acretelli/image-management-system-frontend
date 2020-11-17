import React, { useContext, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import useProtectedRoute from '../../hooks/useProtectedRoute';
import { baseUrl, axiosConfig } from '../../utils/variables';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import { AddToCollection } from '../AddToCollection/AddToCollection';

import { ModalWrapper, Modal, ModalImg } from '../../styles/modal.js';
import { CloseBtn, MediumText, NormalText, SmallText, BoldText, DeleteButton, Container } from '../../styles/main';

import iconClose from '../../images/close.svg';

export const ProfileModalImage = (props) => {
  const history = useHistory();
  const token = useProtectedRoute();
  const appContext = useContext(AppContext);
  const [ requestMessage, setRequestMessage ] = useState("");

    
  const getProfile = async() => {
    try {
        const response = await axios.get(`${baseUrl}/user/profile`, axiosConfig(token))
        appContext.dispatch({ type: "GET_PROFILE", profile:response.data.user });
        appContext.dispatch({ type: "GET_REQUEST_MESSAGE", requestMessage: "" });

    } catch(err) {
        if(err.message === "Request failed with status code 400") {
            appContext.dispatch({ type: "GET_REQUEST_MESSAGE", requestMessage: "No profile found." });
        } else {
            appContext.dispatch({ type: "GET_REQUEST_MESSAGE", requestMessage: err.message });
        }
    }
}

  const handleDeleteImage = async() => {
    try {
      await axios.delete(`${baseUrl}/images/${props.id}/delete`, axiosConfig(token))
      setRequestMessage("Image deleted successfully.");
      getProfile();

      } catch(err) {
        setRequestMessage(err.message)
      }
  }

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
            <DeleteButton margin="8px auto 0 auto" onClick={handleDeleteImage}>Delete</DeleteButton>
            <p>{requestMessage}</p>
        </Modal>
     </ModalWrapper>
  );
}