import React, {useContext, useState} from 'react'
import Button from "@mui/material/Button";
import {Stack} from "@mui/material";
import {ModalContext} from '../../contexts'


export const ControlsSignIn = ({onChange}) => {
    const {openModal} = useContext(ModalContext);
    const[state,setState]=useState(true);

    const handleState = () => {
        setState(false);
        onChange();
    }

    const handleClickSignInButton = () => {
        openModal({
            title: 'Sign in'
        });
        //setState(false);
        //changeBtn(state);
        handleState();
    }
    return (
        <Stack spacing={2} direction="row">
            {state &&<Button className="btnSignIn" variant="outlined" onClick={handleClickSignInButton} data-bs-dismiss="modal">Sign in</Button>}
        </Stack>
    )
}