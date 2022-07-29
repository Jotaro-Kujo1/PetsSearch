import React, {useContext, useState} from 'react'
import Button from "@mui/material/Button";
import {Stack} from "@mui/material";
import {ModalContext} from '../../contexts'
import {Context} from "../User/context";


export const ControlsSignIn = ({onChange}) => {
    const {openModal} = useContext(ModalContext);
    const contextValue = useContext(Context);
    const[check,setCheck]=useState(true);
    const handleClickSignInButton = () => {
        openModal({
            title: 'Sign in'
        });

    }
    if(contextValue >= 200 && contextValue < 300) setCheck(false);
    return (
        <Stack spacing={2} direction="row">
            {check &&<Button className="btnSignIn" variant="outlined" onClick={handleClickSignInButton} data-bs-dismiss="modal">Sign in</Button>}
        </Stack>
    )
}