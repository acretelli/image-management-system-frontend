import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useProtectedRoute from '../../hooks/useProtectedRoute';

import { Container } from '../../styles/main';
import { Bar, MenuButton } from './style/style';


export const MenuBar = () => {
    const history = useHistory();
    const token = useProtectedRoute();
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)

    const goToHome = () => {
        history.push('/')
    }

    const goToCollections = () => {
        history.push('/collections')
    }

    useEffect(() => {
        if(token) {
            setIsLoggedIn(true)
        }
    })

  return (
    <Container width='100vw' backgroundColor='#f2f2f2' >
      <Bar>
            <MenuButton onClick={goToHome}>All Images</MenuButton>
            <MenuButton onClick={goToCollections}>Collections</MenuButton>
      </Bar>
    </Container>
  );
}