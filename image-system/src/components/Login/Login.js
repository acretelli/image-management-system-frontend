import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { baseUrl } from '../../utils/variables';
import useForm from '../../hooks/useForm';

import { Container, Input, Button, Link, Form } from '../../styles/main';

export const Login = () => {
    const history = useHistory();
    const [ requestMessage, setRequestMessage ] = useState("")
    const { form, onChange, resetForm } = useForm({
        email: "",
        password: ""
    })

    const handleInputChange = e => {
        const { name, value } = e.target;
        onChange(name, value)
    }

    const handleLogin = async(e) => {
        e.preventDefault();

        const body = {
            email: form.email,
            password: form.password
        }
        try {
            const response = await axios.post(`${baseUrl}/user/login`, body)
            window.localStorage.setItem("token", response.data.token);
            setRequestMessage("")

            history.push('/')

        } catch(err) {
            if(err.message === "Request failed with status code 400") {
                setRequestMessage("Invalid user or password.")
            } else {
                setRequestMessage(err.message)
            }
        }
    }

    const goToSignUp = () => {
        history.push('/signup')
    }

  return (
    <Container>
        <Form onSubmit={handleLogin}>
            <Input 
                required
                // type="email"
                placeholder="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
            />
            <Input 
                required
                type="password"
                placeholder="password"
                name="password"
                value={form.password}
                onChange={handleInputChange}
            />
            <Button>Login</Button>
            <Link onClick={goToSignUp}>Don't you have a login? Sign Up here.</Link>
        </Form>
        <h4>{requestMessage}</h4>
    </Container>
  );
}