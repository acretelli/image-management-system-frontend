import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { axiosConfig, baseUrl } from '../../utils/variables';
import { useHistory } from 'react-router-dom';
import useProtectedRoute from '../../hooks/useProtectedRoute';
import AppContext from '../../context/AppContext';

import { Header } from '../../components/Header/Header';

import { Button, Container, MainContainer, TextLarge } from '../../styles/main';
import { MenuBar } from '../../components/MenuBar/MenuBar';

function HomePage() {
  const history = useHistory();
  const token = useProtectedRoute();
  const appContext = useContext(AppContext);
    
  const getFeed = async() => {
      try {
          const response = await axios.get(`${baseUrl}/user/feed`, axiosConfig(token))
          appContext.dispatch({ type: "GET_IMAGES", images: response.data });
          appContext.dispatch({ type: "GET_REQUEST_MESSAGE", requestMessage: "" });

      } catch(err) {
          if(err.message === "Request failed with status code 400") {
              appContext.dispatch({ type: "GET_REQUEST_MESSAGE", requestMessage: "No image found." });
          } else {
              appContext.dispatch({ type: "GET_REQUEST_MESSAGE", requestMessage: err.message });
          }
      }
  }

    const goToFeed = () => {
      getFeed();
      history.push('/feed');
    }

  return (
    <MainContainer>
      <Header />
      <MenuBar />
      <Container height="calc(100vh - 120px)">
        <h1>Welcome to Labesplash</h1>
        <TextLarge>Share your pictures and make the world more colorful</TextLarge>
        <Button margin="24px 0" onClick={goToFeed}>Start</Button>
      </Container>
    </MainContainer>
  );
}

export default HomePage;
