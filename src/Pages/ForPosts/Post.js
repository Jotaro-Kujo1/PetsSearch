import {IconButton, TextareaAutosize} from "@mui/material";
import './style.css'
import {PhotoCamera} from "@mui/icons-material";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import React, {useEffect, useState} from "react";




export const Post = () => {
    const [selectedImage,setSelectedImage] = useState(null);
    const[imgUrl,setImgUrl] = useState(null);

    useEffect(()=>{
        if(selectedImage) {
            setImgUrl(URL.createObjectURL(selectedImage));
        }
    },[selectedImage]);

    return (
        <>
            <TextareaAutosize className="description"
                aria-label="minimum height"
                minRows={6}
                placeholder="Input description"
                style={{ width: 400 }}
        />
            <TextareaAutosize className="address"
                aria-label="minimum height"
                minRows={1}
                placeholder="Input address"
                style={{ width: 200 }}
        />
            <IconButton color="primary" aria-label="upload picture" component="label" className="imgBtn">
                <input hidden accept="image/*" type="file" onChange={e => setSelectedImage(e.target.files[0])}/>
                <PhotoCamera/>
            </IconButton>
            <Button variant="contained" className="publicBtn" startIcon={<SendIcon/>}>Public post</Button>
            <img className="image" src={imgUrl} height="280px" width="230px"/>
        </>
    )
}