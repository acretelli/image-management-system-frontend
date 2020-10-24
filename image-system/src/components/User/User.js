import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { axiosConfig, baseUrl } from '../../utils/variables';
import { useParams } from 'react-router-dom';
import useProtectedRoute from '../../hooks/useProtectedRoute';

import { Button, Container } from '../../styles/main';


export const User = () => {
    const token = useProtectedRoute();
    const params = useParams();

    const [ user, setUser ] = useState(null)
    const [ requestMessage, setRequestMessage ] = useState("");
    const [ requestMessageFollow, setRequestMessageFollow ] = useState("");

    const getImages = async() => {
        const id = params.id;
        console.log(id)
        try {
            const response = await axios.get(`${baseUrl}/user/${id}`, axiosConfig(token))
            setRequestMessage("")
            setUser(response.data.user)

        } catch(err) {
            if(err.message === "Request failed with status code 400") {
                setRequestMessage("No profile found.")
            } else {
                setRequestMessage(err.message)
            }
        }
    }

    const handleFollowUser = async() => {
        const id = params.id;

        try {
            const response = await axios.post(`${baseUrl}/user/${id}/follow`, axiosConfig(token))

            setRequestMessageFollow("You're now following this user.")

        } catch(err) {
            setRequestMessageFollow(err.message)
        }
    }

    useEffect(() => {
        getImages();
    }, [])

  return (
    <Container>
        <Button onClick={handleFollowUser}>Follow</Button>
        {requestMessageFollow !== "" && <h4>{requestMessageFollow}</h4>}
        {requestMessage !== "" && <h4>{requestMessage}</h4>}
        {user && <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.nickname}</p>
            {user.images.length !== 0 && user.images.map( image => {
                return <div key={image.id}>
                        <img src={image.file} alt={image.subtitle} />
                        <p>{image.subtitle}</p>
                </div>
            })}
        </div>}
        
    </Container>
  );
}