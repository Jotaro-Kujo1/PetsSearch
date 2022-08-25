import {Checkbox, FormControlLabel, IconButton, TextareaAutosize} from "@mui/material";
import './style.css'
import {PhotoCamera} from "@mui/icons-material";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import React, {useEffect, useState} from "react";






export const Post = () => {
    const [selectedImage,setSelectedImage] = useState(null);
    const[url,setUrl] = useState(null);
    const login = localStorage.getItem('login');
    const[description,setDescription] = useState('');
    const[address,setAddress] = useState('');
    const[lost,setLost]=useState(false);
    const[searched,setSearched]=useState(false);


    var img;



    useEffect(()=>{
        if(selectedImage) {
            setUrl(URL.createObjectURL(selectedImage));
        }
    },[selectedImage]);



    const byteConverter = () => {
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

                //let handler = btoa(String.fromCharCode.apply(null,new Uint8Array(value)));
                let handler = btoa(new Uint8Array(value).reduce(function(data,byte){
                    return data + String.fromCharCode(byte);
                },''));
                //console.log(handler);
                savePost(handler);
            }
        })
    }

    const savePost = (handler) => {
        let state;
        let date = '';
        let area = '';
        if(lost===true){
            state = true;
        }else if(searched===true){
            state = false;
        }
        const newPost = {img,description,address,login,handler,date,area,state};
        console.log(newPost);
        fetch("http://localhost:8080/posts/createPost",{
                mode:"cors",
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(newPost)
            }
        ).then((response) => {
            console.log(response.status);
            if(response.status >= 200 && response.status < 300){
                window.location.assign('http://localhost:3000/Profile');
            }
        })
    }



    return (
        <>

            <TextareaAutosize className="description"
                aria-label="minimum height"
                minRows={5}
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
                <Button variant="contained" className="publicBtn" startIcon={<SendIcon/>} onClick={byteConverter}>Public post</Button>

            <img className="image" src={url} height="280px" width="230px" />

            <div className="checkBox">
                <FormControlLabel className="text" control={<Checkbox />} onChange={() => setLost(true)} label="Пропал"/>
            </div>
            <div className="checkBox">
                <FormControlLabel className="text" control={<Checkbox />} onChange={()=>setSearched(true)} label="Найден"/>
            </div>
        </>
    )
}