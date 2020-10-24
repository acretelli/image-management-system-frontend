import React, { useState } from 'react';
import axios from 'axios';
import { axiosConfig, baseUrl } from '../../utils/variables';

export const FileUploader = () => {

    const [link, setLink] = useState(undefined);

    const handleFile = async(event) => {
        try {
            const data = new FormData();
            data.append('file', event.target.files[0]);
            console.log('Files: ', event.target.files);

            const res = await axios.put(`http://localhost:3003/user/upload`, data);
            setLink(res.data.link)
        } catch(err) {
            console.log(err.message)
        }
    };
    
    return (
        <div>
            <input type={'file'} onChange={handleFile} />
            {link && (
                <div>
                    <img src={link} alt={'Minha imagem'} />
                    <p><a href={link}>Link para o arquivo</a></p>
                </div>
            )}
        </div>
    )

}