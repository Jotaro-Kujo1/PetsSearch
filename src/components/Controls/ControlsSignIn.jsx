import React, {useContext} from 'react'
import Button from "@mui/material/Button";
import {Stack} from "@mui/material";
import {ModalContext} from '../../contexts'


export const ControlsSignIn = () => {
    const {openModal} = useContext(ModalContext);

    const handleClickSignInButton = () => {
        openModal({
            title: 'Sign in'
        });
    }
    return (
        <Stack spacing={2} direction="row">
            <Button className="btnSignIn" variant="outlined" onClick={handleClickSignInButton} data-bs-dismiss="modal">Sign in</Button>
        </Stack>
    )
}