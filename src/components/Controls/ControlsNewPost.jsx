import Button from "@mui/material/Button";
import {Stack} from "@mui/material";
import React from "react";
import AddIcon from '@mui/icons-material/Add';
import SendIcon from "@mui/icons-material/Send";

export const ControlsNewPost =() => {

    const onClickHandler = () => {
        window.location.assign('http://localhost:3000/posts');
    }

    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={onClickHandler} startIcon={<AddIcon/>}>New post</Button>
        </Stack>
    )
}