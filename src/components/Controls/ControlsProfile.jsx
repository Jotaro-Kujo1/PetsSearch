import {Stack} from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

export const ControlsProfile = ({state}) => {
console.log(state);
    return (
        <Stack spacing={2} direction="row">
            {!state && <Button variant="contained">Profile</Button>}
        </Stack>
    )
}