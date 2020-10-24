import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import { axiosConfig, baseUrl } from '../../utils/variables';
import useForm from '../../hooks/useForm';

import { Container, Input, Button, Link, Form } from '../../styles/main';
import { FileUploader } from '../FileUploader/FileUploader';

export const AddImage = (props) => {
    const history = useHistory();
    const [ requestMessage, setRequestMessage ] = useState("")
    const { form, onChange, resetForm } = useForm({
        subtitle: "",
        file: "",
        tags: ""
    })

    const handleInputChange = e => {
        const { name, value } = e.target;
        onChange(name, value)
    }

    const handleLogin = async(e) => {
        e.preventDefault();

        const body = {
            subtitle: form.subtitle,
            date: moment().format('YYYY-MM-DD'),
            file: form.file,
            tags: form.tags
        }
        try {
            const response = await axios.post(`${baseUrl}/image/add`, body, axiosConfig)
            console.log(response)

            setRequestMessage("Image successfully published!")

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
        <Form onSubmit={handleLogin}>
            <Input 
                required
                type="text"
                placeholder="title"
                name="subtitle"
                value={form.subtitle}
                onChange={handleInputChange}
            />
            <Input 
                required
                type="text"
                placeholder="link"
                name="file"
                value={form.file}
                onChange={handleInputChange}
            />
            <Input 
                required
                type="text"
                placeholder="tags"
                name="tags"
                value={form.tags}
                onChange={handleInputChange}
            />
            <FileUploader />
            <Button>Publish</Button>
            <Button onClick={props.handleClick}>Close</Button>
        </Form>
        <h4>{requestMessage}</h4>
    </Container>
  );
}