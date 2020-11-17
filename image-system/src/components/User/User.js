import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { axiosConfig, baseUrl } from '../../utils/variables';
import { useParams } from 'react-router-dom';
import useProtectedRoute from '../../hooks/useProtectedRoute';

import { Button, Container, NormalText, BigText } from '../../styles/main';
import { GalleryProfile, GalleryItemProfile, GalleryImgProfile } from '../../styles/gallery.js';


export const User = () => {
    const token = useProtectedRoute();
    const params = useParams();

    const [ user, setUser ] = useState(null)
    const [ isFollowing, setIsFollowing ] = useState(false);
    const [ requestMessage, setRequestMessage ] = useState("");
    const [ requestMessageFollow, setRequestMessageFollow ] = useState("");

    const getImages = async() => {
        const id = params.id;
        try {
            const response = await axios.get(`${baseUrl}/user/${id}`, axiosConfig(token))
            setRequestMessage("")
            setUser(response.data.user.user)
            setIsFollowing(response.data.user.following)

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
            await axios.post(`${baseUrl}/user/${id}/follow`, axiosConfig(token))

            setRequestMessageFollow("You're now following this user.")

        } catch(err) {
            setRequestMessageFollow(err.message)
        }
    }

    const handleUnfollowUser = async() => {
        const id = params.id;

        try {
            await axios.delete(`${baseUrl}/user/${id}/unfollow`, axiosConfig(token))

            setRequestMessageFollow("You not following this user anymore.")
            setIsFollowing(false)

        } catch(err) {
            setRequestMessageFollow(err.message)
        }
    }

    useEffect(() => {
        getImages();
    }, [])

  return (
    <Container>
        {requestMessageFollow !== "" && <h4>{requestMessageFollow}</h4>}
        {requestMessage !== "" && <h4>{requestMessage}</h4>}
        {user && <div>
            <BigText>{user.nickname}</BigText>
            <NormalText>{user.email}</NormalText>
            <NormalText>{user.name}</NormalText>
            <Container>
                {isFollowing ? <Button onClick={handleUnfollowUser}margin="16px auto">Unfollow</Button> : <Button onClick={handleFollowUser} margin="16px auto">Follow</Button> }
            </Container>
        
            <GalleryProfile>
                {user.images.length !== 0 && user.images.map( image => {
                    return <GalleryItemProfile key={image.id}>
                            <GalleryImgProfile src={image.file} alt={image.subtitle} />
                            <p>{image.subtitle}</p>
                    </GalleryItemProfile>
                })}
            </GalleryProfile>
        </div>}
        
    </Container>
  );
}