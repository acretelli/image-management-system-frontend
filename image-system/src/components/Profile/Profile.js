import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { axiosConfig, baseUrl } from '../../utils/variables';
import useProtectedRoute from '../../hooks/useProtectedRoute';

import { Container } from '../../styles/main';


export const Profile = () => {
    const token = useProtectedRoute();

    const [ profile, setProfile ] = useState(null)
    const [ requestMessage, setRequestMessage ] = useState("");
    console.log(profile)

    const getImages = async() => {
        try {
            const response = await axios.get(`${baseUrl}/user/profile`, axiosConfig(token))
            setRequestMessage("")
            setProfile(response.data.user)

        } catch(err) {
            if(err.message === "Request failed with status code 400") {
                setRequestMessage("No profile found.")
            } else {
                setRequestMessage(err.message)
            }
        }
    }

    useEffect(() => {
        getImages();
    }, [])

  return (
    <Container>
        {requestMessage !== "" && <h4>{requestMessage}</h4>}
        {profile && <div>
            <p>{profile.name}</p>
            <p>{profile.email}</p>
            <p>{profile.nickname}</p>
        </div>}
    </Container>
  );
}