import React from 'react';
import { AllImages } from '../../components/AllImages/AllImages';
import { Header } from '../../components/Header/Header';
import { MenuBar } from '../../components/MenuBar/MenuBar';

import { MainContainer, TextLarge } from '../../styles/main';

function ExplorePage() {

  return (
    <MainContainer>
      <Header />
      <MenuBar />

      <h1>Feel free to explore</h1>
      <TextLarge>Go take a look around on what other users have been up to</TextLarge>

      <AllImages />
      
    </MainContainer>
  );
}

export default ExplorePage;
