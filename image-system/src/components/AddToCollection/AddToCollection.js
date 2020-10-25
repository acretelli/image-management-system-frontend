import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { axiosConfig, baseUrl } from '../../utils/variables';
import AppContext from '../../context/AppContext';
import useForm from '../../hooks/useForm';
import useProtectedRoute from '../../hooks/useProtectedRoute';

import { Container, Button, Form } from '../../styles/main';

export const AddToCollection = (props) => {
    const history = useHistory();
    const token = useProtectedRoute();
    const appContext = useContext(AppContext);
    const [ requestMessage, setRequestMessage ] = useState("")

    const { form, onChange, resetForm } = useForm({
        collection: "",
    })

    const handleInputChange = e => {
        const { name, value } = e.target;
        onChange(name, value)
    }

    const handleForm = async(e) => {
        e.preventDefault();

        const id = props.imageId
        const body = {
            collectionId: form.collection,
        }

        try {
            await axios.post(`${baseUrl}/images/${id}/addcollection`, body, axiosConfig(token))

            setRequestMessage("Image successfully added to collection.")

        } catch(err) {
            if(err.message === "Request failed with status code 400") {
                setRequestMessage("Invalid information.")
            } else {
                setRequestMessage(err.message)
            }
        }
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

    useEffect(() => {
        getCollections();
    }, [history])


  return (
      <>
        {appContext && appContext.collections && appContext.collections.length !== 0 && <Container margin="24px auto">
            <Form onSubmit={handleForm}>
                <select
                    required
                    type="text"
                    placeholder="collections"
                    name="collection"
                    value={form.collection}
                    onChange={handleInputChange}
                >
                    <option value="" >Select a collection</option>
                    {appContext.collections.map( collection => {
                        return <option key={collection.id} value={collection.id} >{collection.title}</option>
                    })
                    }
                </select>
                <Button>Add</Button>
            </Form>
            <h4>{requestMessage}</h4>
        </Container>}
    </>
  );
}