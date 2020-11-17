import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { axiosConfig, baseUrl } from '../../utils/variables';
import { useHistory } from 'react-router-dom';
import useProtectedRoute from '../../hooks/useProtectedRoute';

import AppContext from '../../context/AppContext';
import { Container, Button, IconBtn } from '../../styles/main';
import { Bar, Logo } from '../../styles/header.js';

import iconProfile from '../../images/profile.svg';

export const Header = () => {
    const history = useHistory();
    const token = useProtectedRoute();
    const appContext = useContext(AppContext);

    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

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

    const goToHome = () => {
        getFeed();
        history.push('/')
    }

    const goToProfile = () => {
        getProfile();
        history.push('/profile')
    }

    const goToLogin = () => {
        history.push('/login')
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsLoggedIn(false);
        history.push('/login')
    }

    useEffect(() => {
        if(token) {
            setIsLoggedIn(true)
        }
    })

  return (
    <Container width='100vw' backgroundColor='#023E73' >
      { isLoggedIn ? <Bar>
        <div>
            <Logo onClick={goToHome}>Labesplash</Logo>
        </div>
        <div>
            <Button onClick={goToProfile}><IconBtn src={iconProfile} alt="Profile icon" /></Button>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
      </Bar> : <Bar>
        <div>
            <Logo onClick={goToHome}>Labesplash</Logo>
        </div>
        <div>
            <Button onClick={goToLogin}>Login</Button>
        </div>
      </Bar> }
    </Container>
  );
}