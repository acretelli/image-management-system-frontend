import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { axiosConfig, baseUrl } from '../../utils/variables';
import { useHistory } from 'react-router-dom';
import useProtectedRoute from '../../hooks/useProtectedRoute';

import { Container } from '../../styles/main';
import { Bar, MenuButton } from '../../styles/secondaryMenu.js';
import AppContext from '../../context/AppContext';


export const MenuBar = () => {
    const history = useHistory();
    const token = useProtectedRoute();
    const appContext = useContext(AppContext);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)

    const goToFeed = () => {
        getFeed();
        history.push('/feed')
    }

    const goToExplore = () => {
        getImages();
        history.push('/explore')
    }

    const goToCollections = () => {
        getCollections();
        history.push('/collections')
    }
    
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

    const getCollections = async() => {
      try {
          const response = await axios.get(`${baseUrl}/collection/all`, axiosConfig(token))
          appContext.dispatch({ type: "GET_COLLECTIONS", collections: response.data.collections });
          appContext.dispatch({ type: "GET_REQUEST_MESSAGE", requestMessage: "" });
      } catch(err) {
          if(err.message === "Request failed with status code 400") {
            appContext.dispatch({ type: "GET_REQUEST_MESSAGE", requestMessage: "No collection found." });
          } else {
            appContext.dispatch({ type: "GET_REQUEST_MESSAGE", requestMessage: err.message });
          }
      }
  }

  const getImages = async() => {
      try {
          const response = await axios.get(`${baseUrl}/images/all`, axiosConfig(token))
          appContext.dispatch({ type: "GET_IMAGES", images: response.data.image });
          appContext.dispatch({ type: "GET_REQUEST_MESSAGE", requestMessage: "" });
      } catch(err) {
          if(err.message === "Request failed with status code 400") {
            appContext.dispatch({ type: "GET_REQUEST_MESSAGE", requestMessage: "No collection found." });
          } else {
            appContext.dispatch({ type: "GET_REQUEST_MESSAGE", requestMessage: err.message });
          }
      }
  }

    useEffect(() => {
        if(token) {
            setIsLoggedIn(true)
        }
    })

  return (
    <Container width='100vw' backgroundColor='#f2f2f2' >
      <Bar>
            <MenuButton onClick={goToFeed}>Feed</MenuButton>
            <MenuButton onClick={goToCollections}>Collections</MenuButton>
            <MenuButton onClick={goToExplore}>Explore</MenuButton>
      </Bar>
    </Container>
  );
}