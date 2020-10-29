import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { axiosConfig, baseUrl } from '../../utils/variables';
import useProtectedRoute from '../../hooks/useProtectedRoute';

import AppContext from '../../context/AppContext';
import { ModalCollection } from '../ModalCollection/ModalCollection';
import { CreateCollection } from '../CreateCollection/CreateCollection';

import { Container, Button } from '../../styles/main';
import { Gallery, GalleryItem, GalleryImg } from '../../styles/gallery.js';


export const AllCollections = () => {
    const appContext = useContext(AppContext);
    const [ requestMessage, setRequestMessage ] = useState("");
    const [ openModal, setOpenModal ] = useState(false);
    const token = useProtectedRoute();
    const history = useHistory();

    const handleOpenModal = id => {
        getCollectionInfo(id)
        setOpenModal(!openModal);
    }

    const handleCollection = id => {
        history.push(`/collections/${id}`)
    }

    const getCollections = async() => {
        try {
            const response = await axios.get(`${baseUrl}/collection/all`, axiosConfig(token))
            appContext.dispatch({ type: "GET_COLLECTIONS", collections: response.data.collections });
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

    const [ addModal, setAddModal ] = useState(false);
  
    const handleAddImageBtn = () => {
      setAddModal(!addModal)
    }

  return (
    <Container>
        {!addModal ?
        <Button margin="24px 0" onClick={handleAddImageBtn}>Or create a collection</Button>
        : <CreateCollection reloadCollections={getCollections} handleClick={handleAddImageBtn} />}
        <h4>{requestMessage}</h4>
        <Gallery>
            {appContext && appContext.collections.length !== 0 && appContext.collections.map( collection => {
                return <GalleryItem key={collection.id} onClick={() => handleOpenModal(collection.id)}>
                    <GalleryImg src={collection.image} alt={collection.title} />
                    <p>{collection.title}</p>
                </GalleryItem>
            })}
        </Gallery>
        {openModal && appContext.activeCollection && <ModalCollection title={appContext.activeCollection.title} subtitle={appContext.activeCollection.subtitle} image={appContext.activeCollection.image} handleClick={() => handleCollection(appContext.activeCollection.id)} />}
    </Container>
  );
}