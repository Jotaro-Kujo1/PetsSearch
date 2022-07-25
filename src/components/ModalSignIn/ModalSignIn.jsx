import React, {useContext, useState} from 'react'
import './style.css'
import { ModalContext } from "../../contexts";
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from "@mui/material/Button";
import {Stack} from "@mui/material";


export const ModalSignIn = (props) => {
    const {children, title} = props;
    const { closeModal } = useContext(ModalContext);
    const [closing, setClosing] = useState(false);

    const handleClose = () => {
        setClosing(true);

        const closeTimeout = setTimeout(() => {
            closeModal();
            clearTimeout(closeTimeout);
        }, 300)
    }

    const backdropClasses = closing ? 'backdrop backdrop-hide' : 'backdrop';

    return (
        <div className={backdropClasses} onClick={handleClose}>
            <div className="mymodal" onClick={(event) => event.stopPropagation()}>
                <div className="mymodal-header">
                    <h3>{title}</h3>
                </div>
                <div className="mymodal-body">
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="Login" variant="standard" />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="Password" variant="standard" />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="E-mail" variant="standard" />
                    </Box>
                </div>
                <div className="mymodal-footer">
                    <Button variant="contained">Start</Button>
                </div>
            </div>
        </div>
    )
}