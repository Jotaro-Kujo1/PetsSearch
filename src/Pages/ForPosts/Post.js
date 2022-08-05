import {IconButton, TextareaAutosize} from "@mui/material";
import './style.css'
import {PhotoCamera} from "@mui/icons-material";
import Button from "@mui/material/Button";
import React from "react";

function SendIcon() {
    return null;
}

export const Post = () => {
    return (
            <>

            <TextareaAutosize className="description"
            aria-label="minimum height"
            minRows={3}
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
                    <input hidden accept="image/*" type="file"/>
                    <PhotoCamera />
                </IconButton>
                <Button variant="contained" className="publicBtn">Public post</Button>
            </>
    )
}