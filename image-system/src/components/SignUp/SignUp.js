import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { baseUrl } from '../../utils/variables';
import useForm from '../../hooks/useForm';

import { Container, Input, Button, Link, Form } from '../../styles/main';

export const SignUp = () => {
    const history = useHistory();
    const [ requestMessage, setRequestMessage ] = useState("")
    const { form, onChange, resetForm } = useForm({
        name: "",
        email: "",
        nickname: "",
        password: ""
    })

    const handleInputChange = e => {
        const { name, value } = e.target;
        onChange(name, value)
    }

    const handleSignUp = async(e) => {
        e.preventDefault();

        const body = {
            name: form.name,
            email: form.email,
            nickname: form.nickname,
            password: form.password
        }

        try {
            const response = await axios.post(`${baseUrl}/user/signup`, body);

            const token = response.data.token;
            setRequestMessage("User created successfully")
            window.localStorage.setItem("token", token);
                
            if(token) {
                history.push("/");
            }

            setRequestMessage("")
        } catch(err) {
            if(err.message === "Request failed with status code 400") {
                setRequestMessage("Invalid user or password.")
            } else {
                setRequestMessage(err.message)
            }
        }
    }

    const goToLogin = () => {
        history.push('/login')
    }

  return (
    <Container>
        <Form onSubmit={handleSignUp}>
            <Input 
                required
                placeholder="name"
                name="name"
                value={form.name}
                onChange={handleInputChange}
            />
            <Input 
                required
                type="email"
                placeholder="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
            />
            <Input 
                required
                placeholder="nickname"
                name="nickname"
                value={form.nickname}
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
            <Button>Sign Up</Button>
            <Link onClick={goToLogin}>Already have a login? Login here.</Link>
        </Form>
        <h4>{requestMessage}</h4>
    </Container>
  );
}