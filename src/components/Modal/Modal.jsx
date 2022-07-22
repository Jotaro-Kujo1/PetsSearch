import React, {useContext, useState} from 'react'
import './style.css'
import { ModalContext } from "../../contexts";
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';


 export const Modal = (props) => {
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
                    {children}
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="Login" variant="standard" />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="Password" variant="standard" />
                    </Box>
                </div>
            </div>
        </div>
    )
 }