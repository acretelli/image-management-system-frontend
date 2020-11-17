import React, { useState } from 'react';
import axios from 'axios';

import { axiosConfig, baseUrl } from '../../utils/variables';
import useForm from '../../hooks/useForm';
import useProtectedRoute from '../../hooks/useProtectedRoute';

import { Container, Input, Button, Form } from '../../styles/main';

export const CreateCollection = (props) => {
    const token = useProtectedRoute();
    const [ requestMessage, setRequestMessage ] = useState("")
    const { form, onChange, resetForm } = useForm({
        title: "",
        subtitle: "",
        image: ""
    })

    const handleInputChange = e => {
        const { name, value } = e.target;
        onChange(name, value)
    }

    const handleForm = async(e) => {
        e.preventDefault();

        const body = {
            title: form.title,
            subtitle: form.subtitle,
            image: form.image
        }

        try {
            const response = await axios.put(`${baseUrl}/collection/add`, body, axiosConfig(token))
            console.log(response)
            setRequestMessage("Collection successfully published!")
            resetForm();
            props.reloadCollections();

        } catch(err) {
            if(err.message === "Request failed with status code 400") {
                setRequestMessage("Invalid information.")
            } else {
                setRequestMessage(err.message)
            }
        }
    }

  return (
    <Container margin="24px auto">
        <Form onSubmit={handleForm}>
            <Input 
                required
                type="text"
                placeholder="title"
                name="title"
                value={form.title}
                onChange={handleInputChange}
            />
            <Input 
                required
                type="text"
                placeholder="subtitle"
                name="subtitle"
                value={form.subtitle}
                onChange={handleInputChange}
            />
            <Input 
                required
                type="text"
                placeholder="link"
                name="image"
                value={form.image}
                onChange={handleInputChange}
            />
            <Button>Create</Button>
            <Button onClick={props.handleClick}>Close</Button>
        </Form>
        <h4>{requestMessage}</h4>
    </Container>
  );
}