import Button from "@mui/material/Button";
import {Stack} from "@mui/material";
import React from "react";

export const ControlsNewPost =() => {

    const onClickHandler = () => {
        window.location.assign('http://localhost:3000/posts');
    }

    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={onClickHandler}>New post</Button>
        </Stack>
    )
}