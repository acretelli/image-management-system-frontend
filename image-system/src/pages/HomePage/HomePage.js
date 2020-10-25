import React, { useState } from 'react';
import useProtectedRoute from '../../hooks/useProtectedRoute';

import { Header } from '../../components/Header/Header';
import { AllImages } from '../../components/AllImages/AllImages';

import { Button, MainContainer, TextLarge } from '../../styles/main';
import { MenuBar } from '../../components/MenuBar/MenuBar';
import { AddImage } from '../../components/AddImage/AddImage';
import { Feed } from '../../components/Feed/Feed';
function HomePage() {
    const token = useProtectedRoute();
    const [ addModal, setAddModal ] = useState(false);

    const handleAddImageBtn = () => {
      setAddModal(!addModal)
    }

  return (
    <MainContainer>
      <Header />
      <MenuBar />
      <h1>Welcome to Labesplash</h1>
      {!addModal ? <>
        <TextLarge>Share your pictures and make the world more colorful</TextLarge>
        <Button  margin="24px 0" onClick={handleAddImageBtn}>Add Image</Button>
      </> : <AddImage handleClick={handleAddImageBtn} />}
      <Feed />
    </MainContainer>
  );
}

export default HomePage;
