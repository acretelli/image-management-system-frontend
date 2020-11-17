import React, { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';

import { Header } from '../../components/Header/Header';

import { Button, MainContainer, TextLarge } from '../../styles/main';
import { MenuBar } from '../../components/MenuBar/MenuBar';
import { AddImage } from '../../components/AddImage/AddImage';
import { Feed } from '../../components/Feed/Feed';

function FeedPage() {
    const appContext = useContext(AppContext);
    const [ addModal, setAddModal ] = useState(false);

    const handleAddImageBtn = () => {
      setAddModal(!addModal)
    }

  return (
    <MainContainer>
      <Header />
      <MenuBar />
      <h1>Your feed</h1>
      {!addModal ? <>
        <TextLarge>Share your pictureswith your friends</TextLarge>
        <Button  margin="24px 0" onClick={handleAddImageBtn}>Add Image</Button>
      </> : <AddImage handleClick={handleAddImageBtn} />}
      <Feed />
    </MainContainer>
  );
}

export default FeedPage;
