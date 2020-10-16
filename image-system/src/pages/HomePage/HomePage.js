import React from 'react';
import useProtectedRoute from '../../hooks/useProtectedRoute';

import { Header } from '../../components/Header/Header';
import { AllImages } from '../../components/AllImages/AllImages';

import { MainContainer, TextLarge } from '../../styles/main';
import { MenuBar } from '../../components/MenuBar/MenuBar';

function HomePage() {
    const token = useProtectedRoute();

  return (
    <MainContainer>
      <Header />
      <MenuBar />
      <h1>Welcome to Labesplash</h1>
      <TextLarge>Share your pictures and make the world more colorful</TextLarge>
      <AllImages />
    </MainContainer>
  );
}

export default HomePage;
