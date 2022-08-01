import {Stack} from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import {useContext} from "react";
import {ModalContext} from "../../contexts";



export const ControlsChooseAvatar = () => {
    const {openModal} = useContext(ModalContext);

    const handleClickChooseAvatar = () => {
        openModal({
            title: 'Choose avatar from list'
        });

    }

    return (
        <Stack spacing={2} direction="row">
            <Button className="btnSignIn" variant="outlined" data-bs-dismiss="modal" onClick={handleClickChooseAvatar}>Choose avatar</Button>
        </Stack>
    )
}