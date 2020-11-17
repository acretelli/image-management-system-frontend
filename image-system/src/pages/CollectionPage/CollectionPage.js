import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import useProtectedRoute from '../../hooks/useProtectedRoute';
import { baseUrl, axiosConfig } from '../../utils/variables';
import AppContext from '../../context/AppContext';

import { ModalImage } from '../../components/ModalImage/ModalImage';
import { MenuBar } from '../../components/MenuBar/MenuBar';
import { MainContainer, TextLarge } from '../../styles/main';
import { Gallery, GalleryItem, GalleryImg } from '../../styles/gallery';

function CollectionPage() {
    const token = useProtectedRoute();
    const params = useParams();
    const id = params.id;
    const appContext = useContext(AppContext);
    const [ openModal, setOpenModal ] = useState(false);

    const handleOpenModal = id => {
        getImageInfo(id)
        setOpenModal(!openModal);
    }

    const getImageInfo = async(id) => {
        try {
            const response = await axios.get(`${baseUrl}/images/${id}`, axiosConfig(token))
            
            appContext.dispatch({ type: "GET_ACTIVE_IMAGE", activeImage: response.data.image });

        } catch(err) {
            console.log(err.message)
        }
    }

  return (
    <MainContainer>
      <Header />
      <MenuBar />
        <h1>{appContext && appContext.activeCollection && appContext.activeCollection.title}</h1>
      <TextLarge>{appContext && appContext.activeCollection && appContext.activeCollection.subtitle}</TextLarge>
      <TextLarge>{appContext && appContext.requestMessage}</TextLarge>
      <Gallery>
        {appContext && appContext.activeCollection && appContext.activeCollection.images !== 0 && appContext.activeCollection.images.map( image => {
          return <GalleryItem key={image.id} onClick={() => handleOpenModal(image.id)}>
            <GalleryImg src={image.file} alt={image.subtitle} />
            <p>{image.subtitle}</p>
          </GalleryItem>
        })}
        {openModal && appContext.activeImage && 
          <ModalImage 
            id={appContext.activeImage.user_id} 
            file={appContext.activeImage.file} 
            subtitle={appContext.activeImage.subtitle} 
            author={appContext.activeImage.author} 
            date={appContext.activeImage.date} 
            tags={appContext.activeImage.tags} 
            collection={appContext.activeImage.collection} 
            handleClick={handleOpenModal} />}
      </Gallery>
    </MainContainer>
  );
}

export default CollectionPage;
