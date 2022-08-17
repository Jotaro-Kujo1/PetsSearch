import {IconButton, TextareaAutosize} from "@mui/material";
import './style.css'
import {PhotoCamera} from "@mui/icons-material";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import React, {useEffect, useState} from "react";
import axios from 'axios';



export const Post = () => {
    const [selectedImage,setSelectedImage] = useState(null);
    const[url,setUrl] = useState(null);
    const user_name = localStorage.getItem('login');
    const[description,setDescription] = useState('');
    const[address,setAddress] = useState('');


    var img;
    var handler;


    useEffect(()=>{
        if(selectedImage) {
            setUrl(URL.createObjectURL(selectedImage));
        }
    },[selectedImage]);





    const test = () => {
        let file = new FormData();
        file.set("file",selectedImage);
        fetch("http://localhost:8080/posts/byteConverter", {
            mode: "cors",
            method: "POST",
            body: file
        }).then(async (response) => {
            const reader = response.body.getReader();
            while (true) {
                const {done, value} = await reader.read();
                if(done){
                    break;
                }

                handler = btoa(String.fromCharCode.apply(null,new Uint8Array(value)));
                console.log(handler);

            }
        })
        const newPost = {img,description,address,user_name,handler};
        fetch("http://localhost:8080/posts/createPost",{
                mode:"cors",
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(newPost)
            }
        ).then((response) => {
            console.log(response.status);
        })
    }



    return (
        <>
            <TextareaAutosize className="description"
                aria-label="minimum height"
                minRows={6}
                placeholder="Input description"
                style={{ width: 400 }}
                              onChange={e => setDescription(e.target.value)}
        />

            <TextareaAutosize className="address"
                aria-label="minimum height"
                minRows={1}
                placeholder="пр.Победы 167,Заягорбский"
                style={{ width: 300 }}
                              onChange={e => setAddress(e.target.value)}
        />


            <IconButton color="primary" aria-label="upload picture" component="label" className="imgBtn">
                <input hidden accept="image/*" type="file" onChange={e => setSelectedImage(e.target.files[0])}/>
                <PhotoCamera/>
            </IconButton>
            <Button variant="contained" className="publicBtn" startIcon={<SendIcon/>} onClick={test}>Public post</Button>
            <img className="image" src={url} height="280px" width="230px"/>
        </>
    )
}