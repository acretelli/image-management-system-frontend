import React, { useState } from 'react';
import { AllCollections } from '../../components/AllCollections/AllCollections';
import { AllImages } from '../../components/AllImages/AllImages';
import { CreateCollection } from '../../components/CreateCollection/CreateCollection';
import { Header } from '../../components/Header/Header';
import { MenuBar } from '../../components/MenuBar/MenuBar';

import { MainContainer, TextLarge, Submenu, SubmenuLink, Button } from '../../styles/main';

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
