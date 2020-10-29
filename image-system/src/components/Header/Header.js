import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useProtectedRoute from '../../hooks/useProtectedRoute';

import { Container, Button, IconBtn } from '../../styles/main';
import { Bar, Logo } from '../../styles/header.js';

import iconProfile from '../../images/profile.svg';

export const Header = () => {
    const history = useHistory();
    const token = useProtectedRoute();
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)

    const goToHome = () => {
        history.push('/')
    }

    const goToProfile = () => {
        history.push('/profile')
    }

    const goToLogin = () => {
        history.push('/login')
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsLoggedIn(false);
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