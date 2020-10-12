import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { axiosConfig, baseUrl } from '../../utils/variables';
import useProtectedRoute from '../../hooks/useProtectedRoute';

import AppContext from '../../context/AppContext';

import { Container } from '../../styles/main';
import { Gallery } from './style/style';


export const AllImages = () => {
    const appContext = useContext(AppContext);
    const [ requestMessage, setRequestMessage ] = useState("");
    const [ openImage, setOpenImage ] = useState(false);
    const token = useProtectedRoute();

    const handleOpenImage = id => {
        setOpenImage(!openImage);
        appContext.dispatch({ type: "GET_ACTIVE_IMAGE", activeImage: id });
    }

    const getImages = async() => {
        try {
            const response = await axios.get(`${baseUrl}/images/all`, axiosConfig(token))
            appContext.dispatch({ type: "GET_IMAGES", images: response.data.image });
            setRequestMessage("")
        } catch(err) {
            if(err.message === "Request failed with status code 400") {
                setRequestMessage("No image found.")
            } else {
                setRequestMessage(err.message)
            }
        }
    }

    useEffect(() => {
        getImages();
    }, [])

  return (
    <Container>
        <h4>{requestMessage}</h4>
        <Gallery>
            {appContext && appContext.images.length !== 0 && appContext.images.map( image => {
                return <div key={image.id} onClick={handleOpenImage}>
                    <img src={image.file} alt={image.subtitle} />
                    <p>{image.subtitle}</p>
                </div>
            })}
        </Gallery>
        {openImage && appContext.activeImage && <div>
            <img src={appContext.activeImage.file} alt={appContext.activeImage.subtitle} />
            <p>{appContext.activeImage.subtitle}</p>
            <p>{appContext.activeImage.author}</p>
            <p>{appContext.activeImage.date}</p>
            <p>{appContext.activeImage.tags[0]}</p>
            <p>{appContext.activeImage.collection}</p>
        </div>}
    </Container>
  );
}