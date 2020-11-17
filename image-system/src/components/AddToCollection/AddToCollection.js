import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { axiosConfig, baseUrl } from '../../utils/variables';
import AppContext from '../../context/AppContext';
import useForm from '../../hooks/useForm';
import useProtectedRoute from '../../hooks/useProtectedRoute';

import { Container, Button, Form, ContainerFlex, BoldText } from '../../styles/main';

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
        console.log(form.collection)
    }

    const handleForm = async(e) => {
        e.preventDefault();
        console.log(form.collection)

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

  return (
      <>
        {appContext && appContext.collections && appContext.collections.length !== 0 && <Container margin="0 auto">
            <Form onSubmit={handleForm}>
                <ContainerFlex margin="0 auto">
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
                    <Button margin="0 8px">Add</Button>
                </ContainerFlex>
            </Form>
            <BoldText>{requestMessage}</BoldText>
        </Container>}
    </>
  );
}