import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import useProtectedRoute from '../../hooks/useProtectedRoute';
import { baseUrl, axiosConfig } from '../../utils/variables';

import { MainContainer, TextLarge } from '../../styles/main';
import { AllCollections } from '../../components/AllCollections/AllCollections';
import { MenuBar } from '../../components/MenuBar/MenuBar';
import AppContext from '../../context/AppContext';

function CollectionPage() {
    const token = useProtectedRoute();
    const params = useParams();
    const id = params.id;
    const appContext = useContext(AppContext);
    const [ requestMessage, setRequestMessage ] = useState("");

    const getCollection = async() => {
        try {
            const response = await axios.get(`${baseUrl}/collection/${id}`, axiosConfig(token))
            appContext.dispatch({ type: "GET_ACTIVE_COLLECTION", activeCollection: response.data.collection });
            console.log(appContext && appContext.activeCollection)
            setRequestMessage("")
        } catch(err) {
            if(err.message === "Request failed with status code 400") {
                setRequestMessage("No collection found.")
            } else {
                setRequestMessage(err.message)
            }
        }
    }
    
    useEffect(() => {
        getCollection();
    }, [])


  return (
    <MainContainer>
      <Header />
      <MenuBar />
        <h1>{appContext && appContext.activeCollection && appContext.activeCollection.title}</h1>
      <TextLarge>{appContext && appContext.activeCollection && appContext.activeCollection.subtitle}</TextLarge>
      <TextLarge>{requestMessage}</TextLarge>
    </MainContainer>
  );
}

export default CollectionPage;
