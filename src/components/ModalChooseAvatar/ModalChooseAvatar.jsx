import React, {useContext, useState} from 'react'
import './style.css'
import { ModalContext } from "../../contexts";
import first from '../ModalChooseAvatar/Avatars/1.png'
import second from '../ModalChooseAvatar/Avatars/2.png'
import third from '../ModalChooseAvatar/Avatars/3.png'
import fourth from '../ModalChooseAvatar/Avatars/4.png'
import fifth from '../ModalChooseAvatar/Avatars/5.png'
import sixth from '../ModalChooseAvatar/Avatars/6.png'
import {Stack} from "@mui/material";

export const ModalChooseAvatar = (props) => {
    const {children, title} = props;
    const { closeModal } = useContext(ModalContext);
    const [closing, setClosing] = useState(false);
    const[id,setId]=useState(0);

    const handleClose = () => {
        setClosing(true);

        const closeTimeout = setTimeout(() => {
            closeModal();
            clearTimeout(closeTimeout);
        }, 300)
    }

    const idHandler = (tmp) => {
        localStorage.setItem('picId',tmp);
    }

    const backdropClasses = closing ? 'backdrop backdrop-hide' : 'backdrop';

    return (
        <div className={backdropClasses} onClick={handleClose}>
            <div className="mymodal" onClick={(event) => event.stopPropagation()}>
                <div className="mymodal-header">
                    <h3>{title}</h3>
                </div>
                <div className="mymodal-body">

                    <Stack spacing={5} direction="row">
                        <img
                            src={first}
                            height="50"
                            width="50"
                            className="rounded-circle z-depth-0, img-light"
                            onClick={() => {
                                localStorage.setItem('picId',first);
                                window.location.reload();
                            }}
                            alt="1"
                        />
                        <img
                            src={second}
                            height="50"
                            width="50"
                            className="rounded-circle z-depth-0, img-light"
                            onClick={() => {
                                localStorage.setItem('picId',second);
                                window.location.reload();
                            }}
                            alt="2"
                        />
                        <img
                            src={third}
                            height="50"
                            width="50"
                            className="rounded-circle z-depth-0, img-light"
                            onClick={() => {
                                localStorage.setItem('picId',third);
                                window.location.reload();
                            }}
                            alt="3"
                        />
                        <img
                            onClick={() => {
                                localStorage.setItem('picId',fourth);
                                window.location.reload();
                            }}
                            src={fourth}
                            height="50"
                            width="50"
                            className="rounded-circle z-depth-0, img-light"
                            alt="4"
                        />
                        <img
                            onClick={() => {
                                localStorage.setItem('picId',fifth);
                                window.location.reload();
                            }}
                            src={fifth}
                            height="50"
                            width="50"
                            className="rounded-circle z-depth-0, img-light"
                            alt="5"
                        />
                    </Stack>
                </div>

            </div>
        </div>
    )
}