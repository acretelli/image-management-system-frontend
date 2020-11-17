import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { axiosConfig, baseUrl } from '../../utils/variables';
import useProtectedRoute from '../../hooks/useProtectedRoute';

import AppContext from '../../context/AppContext';
import { ModalImage } from '../ModalImage/ModalImage';

import { Container, SmallText } from '../../styles/main';
import { Gallery, GalleryItem, GalleryImg } from '../../styles/gallery.js';


export const AllImages = () => {
    const appContext = useContext(AppContext);
    const [ openImage, setOpenImage ] = useState(false);
    const token = useProtectedRoute();
    const history = useHistory();

    const handleOpenImage = id => {
        setOpenImage(!openImage);
        getImageInfo(id)
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
    <Container>
        <h4>{appContext && appContext.requestMessage}</h4>
        <Gallery>
            {appContext && appContext.images && appContext.images.length !== 0 && appContext.images.map( image => {
                return <GalleryItem key={image.id} onClick={() => handleOpenImage(image.id)}>
                    <GalleryImg src={image.file} alt={image.subtitle} />
                    <SmallText>{image.subtitle}</SmallText>
                </GalleryItem>
            })}
        </Gallery>
        {openImage && appContext.activeImage && 
            <ModalImage 
                id={appContext.activeImage.user_id} 
                file={appContext.activeImage.file} 
                subtitle={appContext.activeImage.subtitle} 
                author={appContext.activeImage.author} 
                date={appContext.activeImage.date} 
                tags={appContext.activeImage.tags} 
                collection={appContext.activeImage.collection} 
                handleClick={handleOpenImage} />}
    </Container>
  );
}