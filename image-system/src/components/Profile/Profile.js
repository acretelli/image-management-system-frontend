import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { axiosConfig, baseUrl } from '../../utils/variables';
import useProtectedRoute from '../../hooks/useProtectedRoute';

import { Container } from '../../styles/main';
import { ProfileModalImage } from '../ProfileModalImage/ProfileModalImage';
import AppContext from '../../context/AppContext';

export const Profile = () => {
    const token = useProtectedRoute();
    const appContext = useContext(AppContext);
    
    const [ profile, setProfile ] = useState(null)
    const [ requestMessage, setRequestMessage ] = useState("");

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

    const getImageInfo = async(id) => {
        try {
            const response = await axios.get(`${baseUrl}/images/${id}`, axiosConfig(token))

            appContext.dispatch({ type: "GET_ACTIVE_IMAGE", activeImage: response.data.image });
            console.log(response.data.image)

        } catch(err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        getImages();
    }, [])

    const [ openImage, setOpenImage ] = useState(false);

    const handleOpenImage = id => {
        setOpenImage(!openImage);
        getImageInfo(id)
    }

  return (
    <Container>
        {requestMessage !== "" && <h4>{requestMessage}</h4>}
        {profile && <div>
            <h3>{profile.name}</h3>
            <p>{profile.email}</p>
            <p>{profile.nickname}</p>
            {profile.images.length !== 0 && profile.images.map( image => {
                return <div key={image.id}>
                        <img src={image.file} alt={image.subtitle} onClick={handleOpenImage} />
                        <p  onClick={handleOpenImage}>{image.subtitle}</p>
                                        
                        {openImage && <ProfileModalImage id={image.id} file={image.file} subtitle={image.subtitle} author={image.author} date={image.date} tags={image.tags} collection={image.collection} handleClick={handleOpenImage} />}
                </div>
            })}
        </div>
        }
    </Container>
  );
}