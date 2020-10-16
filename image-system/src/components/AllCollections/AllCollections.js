import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { axiosConfig, baseUrl } from '../../utils/variables';
import useProtectedRoute from '../../hooks/useProtectedRoute';

import AppContext from '../../context/AppContext';
import { ModalImage } from '../ModalImage/ModalImage';

import { Container } from '../../styles/main';
import { Gallery } from './style/style';


export const AllCollections = () => {
    const appContext = useContext(AppContext);
    const [ requestMessage, setRequestMessage ] = useState("");
    const [ openImage, setOpenImage ] = useState(false);
    const token = useProtectedRoute();

    const handleOpenImage = id => {
        setOpenImage(!openImage);
        getCollectionInfo(id)
    }


    const getCollections = async() => {
        try {
            const response = await axios.get(`${baseUrl}/collection/all`, axiosConfig(token))
            appContext.dispatch({ type: "GET_COLLECTIONS", collections: response.data.collections });
            console.log(appContext && appContext.collections)
            setRequestMessage("")
        } catch(err) {
            if(err.message === "Request failed with status code 400") {
                setRequestMessage("No collection found.")
            } else {
                setRequestMessage(err.message)
            }
        }
    }

    const getCollectionInfo = async(id) => {
        try {
            const response = await axios.get(`${baseUrl}/collection/${id}`, axiosConfig(token))

            appContext.dispatch({ type: "GET_ACTIVE_COLLECTION", activeCollection: response.data.collection });

        } catch(err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        getCollections();
    }, [])

  return (
    <Container>
        <h4>{requestMessage}</h4>
        <Gallery>
            {appContext && appContext.collections.length !== 0 && appContext.collections.map( collection => {
                return <div key={collection.id} onClick={() => handleOpenImage(collection.id)}>
                    <img src={collection.image} alt={collection.title} />
                    <p>{collection.title}</p>
                    <p>{collection.subtitle}</p>
                </div>
            })}
        </Gallery>
        {/* {openImage && appContext.activeImage && <ModalImage file={appContext.activeImage.file} subtitle={appContext.activeImage.subtitle} author={appContext.activeImage.author} date={appContext.activeImage.date} tags={appContext.activeImage.tags} collection={appContext.activeImage.collection} handleClick={handleOpenImage} />} */}
    </Container>
  );
}