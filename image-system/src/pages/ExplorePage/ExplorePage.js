import React, { useState } from 'react';
import { AllCollections } from '../../components/AllCollections/AllCollections';
import { AllImages } from '../../components/AllImages/AllImages';
import { Header } from '../../components/Header/Header';
import { MenuBar } from '../../components/MenuBar/MenuBar';

import { MainContainer, TextLarge, Submenu, SubmenuLink } from '../../styles/main';

function ExplorePage() {
  const [ isCollection, setIsCollection ] = useState(true);

  const openCollections = () => {
    setIsCollection(true)   
  }

  const openImages = () => {
    setIsCollection(false)   
  }

  return (
    <MainContainer>
      <Header />
      <MenuBar />
      <h1>Feel free to explore</h1>
      <TextLarge>Go take a look around on what other users have been up to</TextLarge>
      <Submenu>
        <SubmenuLink onClick={openCollections}>Collections</SubmenuLink>
        <SubmenuLink onClick={openImages}>All images</SubmenuLink>
      </Submenu>
      
      {isCollection ? <AllCollections /> : <AllImages />}
      
    </MainContainer>
  );
}

export default ExplorePage;
