import styled from 'styled-components';

export const Gallery = styled.div`
    width: 100%;
    max-width: 1024px;
    margin: 16px;
    padding: 16px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 16px;
`

export const GalleryItem = styled.div`
    height: 240px;
`

export const GalleryImg = styled.img`
    height: 200px;
    object-fit: cover;
`
