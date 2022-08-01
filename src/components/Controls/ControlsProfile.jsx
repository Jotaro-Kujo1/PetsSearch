import {Stack} from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

export const ControlsProfile = ({state}) => {

    const onClickHandler = () => {
        window.location.assign('http://localhost:3000/profile');
    }

    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={onClickHandler}>Profile</Button>
        </Stack>
    )
}