import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { axiosConfig, baseUrl } from '../../utils/variables';
import { useHistory } from 'react-router-dom';
import useProtectedRoute from '../../hooks/useProtectedRoute';

import { Container, NormalText, Nickname, BigText } from '../../styles/main';
import { ProfileModalImage } from '../ProfileModalImage/ProfileModalImage';
import { GalleryProfile, GalleryItemProfile, GalleryImgProfile } from '../../styles/gallery.js';

import AppContext from '../../context/AppContext';

export const Profile = () => {
    const token = useProtectedRoute();
    const appContext = useContext(AppContext);
    const history = useHistory();
    

    const getImageInfo = async(id) => {
        try {
            const response = await axios.get(`${baseUrl}/images/${id}`, axiosConfig(token))

            appContext.dispatch({ type: "GET_ACTIVE_IMAGE", activeImage: response.data.image });

        } catch(err) {
            console.log(err.message)
        }
    }

    const [ openImage, setOpenImage ] = useState(false);

    const handleOpenImage = id => {
        setOpenImage(!openImage);
        getImageInfo(id)
    }

  return (
    <Container>
        {appContext && appContext.requestMessage !== "" && <h4>{appContext.requestMessage}</h4>}
        {appContext && appContext.profile && appContext.profile.name && <div>
            <BigText>{appContext.profile.nickname}</BigText>
            <NormalText>{appContext.profile.name}</NormalText>
            <NormalText>{appContext.profile.email}</NormalText>
            <GalleryProfile>
                {appContext.profile.images.length !== 0 && appContext.profile.images.map( image => {
                    return <GalleryItemProfile key={image.id}>
                                <GalleryImgProfile src={image.file} alt={image.subtitle} onClick={()=> handleOpenImage(image.id)} />
                                <p  onClick={()=> handleOpenImage(image.id)}>{image.subtitle}</p>
                                            
                            {openImage && appContext && appContext.activeImage && appContext.activeImage.id && <ProfileModalImage id={appContext.activeImage.id} file={appContext.activeImage.file} subtitle={appContext.activeImage.subtitle} author={appContext.activeImage.author} date={appContext.activeImage.date} tags={appContext.activeImage.tags} collection={appContext.activeImage.collection} handleClick={()=> handleOpenImage(appContext.activeImage.id)} />}
                    </GalleryItemProfile>
                })}
            </GalleryProfile>
        </div>
        }
    </Container>
  );
}