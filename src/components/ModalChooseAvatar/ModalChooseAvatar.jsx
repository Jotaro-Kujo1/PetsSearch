import React, {useContext, useState} from 'react'
import './style.css'
import { ModalContext } from "../../contexts";
import first from '../ModalChooseAvatar/Avatars/1.png'
import second from '../ModalChooseAvatar/Avatars/2.png'
import third from '../ModalChooseAvatar/Avatars/3.png'
import fourth from '../ModalChooseAvatar/Avatars/4.png'
import fifth from '../ModalChooseAvatar/Avatars/5.png'
import sixth from '../ModalChooseAvatar/Avatars/6.png'
import seventh  from '../ModalChooseAvatar/Avatars/7.png'
import eighth   from '../ModalChooseAvatar/Avatars/8.png'
import ninth   from '../ModalChooseAvatar/Avatars/9.png'
import tenth   from '../ModalChooseAvatar/Avatars/10.png'
import eleventh   from '../ModalChooseAvatar/Avatars/11.png'
import twelfth   from '../ModalChooseAvatar/Avatars/12.png'
import thirteenth  from '../ModalChooseAvatar/Avatars/13.png'
import fourteenth  from '../ModalChooseAvatar/Avatars/14.png'
import fifteenth  from '../ModalChooseAvatar/Avatars/15.png'
import sixteenth  from '../ModalChooseAvatar/Avatars/16.png'
import seventeenth  from '../ModalChooseAvatar/Avatars/17.png'
import eighteenth  from '../ModalChooseAvatar/Avatars/18.png'
import nineteenth  from '../ModalChooseAvatar/Avatars/19.png'
import twentieth  from '../ModalChooseAvatar/Avatars/20.png'
import twentyfirst  from '../ModalChooseAvatar/Avatars/21.png'
import twentysecond  from '../ModalChooseAvatar/Avatars/22.png'
import twentythird  from '../ModalChooseAvatar/Avatars/23.png'
import twentyfourth  from '../ModalChooseAvatar/Avatars/24.png'
import twentyfifth  from '../ModalChooseAvatar/Avatars/25.png'

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

    const updatePicture = () => {
        let login = localStorage.getItem('login');
        let profimg = localStorage.getItem('picId');
        fetch("http://localhost:8080/posts/updatePicture?login=" + login + "&profimg=" + profimg,{
                method:"POST"
            }
        ).then((response) => {
            console.log(response.status);
        })
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
                                updatePicture();
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
                                updatePicture();
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
                                updatePicture();
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
                    <Stack spacing={5} direction="row">
                        <img
                            src={sixth}
                            height="50"
                            width="50"
                            className="rounded-circle z-depth-0, img-light"
                            onClick={() => {
                                localStorage.setItem('picId',sixth);
                                window.location.reload();
                            }}
                            alt="6"
                        />
                        <img
                            src={seventh}
                            height="50"
                            width="50"
                            className="rounded-circle z-depth-0, img-light"
                            onClick={() => {
                                localStorage.setItem('picId',seventh);
                                window.location.reload();
                            }}
                            alt="7"
                        />
                        <img
                            src={eighth}
                            height="50"
                            width="50"
                            className="rounded-circle z-depth-0, img-light"
                            onClick={() => {
                                localStorage.setItem('picId',eighth);
                                window.location.reload();
                            }}
                            alt="8"
                        />
                        <img
                            src={ninth}
                            height="50"
                            width="50"
                            className="rounded-circle z-depth-0, img-light"
                            onClick={() => {
                                localStorage.setItem('picId',ninth);
                                window.location.reload();
                            }}
                            alt="9"
                        />
                        <img
                            src={tenth}
                            height="50"
                            width="50"
                            className="rounded-circle z-depth-0, img-light"
                            onClick={() => {
                                localStorage.setItem('picId',tenth);
                                window.location.reload();
                            }}
                            alt="10"
                        />
                    </Stack>
                    <Stack spacing={5} direction="row">
                        <img
                            src={eleventh}
                            height="50"
                            width="50"
                            className="rounded-circle z-depth-0, img-light"
                            onClick={() => {
                                localStorage.setItem('picId',eleventh);
                                window.location.reload();
                            }}
                            alt="11"
                        />
                        <img
                            src={twelfth}
                            height="50"
                            width="50"
                            className="rounded-circle z-depth-0, img-light"
                            onClick={() => {
                                localStorage.setItem('picId',twelfth);
                                window.location.reload();
                            }}
                            alt="12"
                        />
                        <img
                            src={thirteenth}
                            height="50"
                            width="50"
                            className="rounded-circle z-depth-0, img-light"
                            onClick={() => {
                                localStorage.setItem('picId',thirteenth);
                                window.location.reload();
                            }}
                            alt="13"
                        />
                        <img
                            src={fourteenth}
                            height="50"
                            width="50"
                            className="rounded-circle z-depth-0, img-light"
                            onClick={() => {
                                localStorage.setItem('picId',fourteenth);
                                window.location.reload();
                            }}
                            alt="14"
                        />
                        <img
                            src={fifteenth}
                            height="50"
                            width="50"
                            className="rounded-circle z-depth-0, img-light"
                            onClick={() => {
                                localStorage.setItem('picId',fifteenth);
                                window.location.reload();
                            }}
                            alt="15"
                        />
                    </Stack>
                    <Stack spacing={5} direction="row">
                        <img
                            src={sixteenth}
                            height="50"
                            width="50"
                            className="rounded-circle z-depth-0, img-light"
                            onClick={() => {
                                localStorage.setItem('picId',sixteenth);
                                window.location.reload();
                            }}
                            alt="16"
                        />
                        <img
                            src={seventeenth}
                            height="50"
                            width="50"
                            className="rounded-circle z-depth-0, img-light"
                            onClick={() => {
                                localStorage.setItem('picId',seventeenth);
                                window.location.reload();
                            }}
                            alt="17"
                        />
                        <img
                            src={eighteenth}
                            height="50"
                            width="50"
                            className="rounded-circle z-depth-0, img-light"
                            onClick={() => {
                                localStorage.setItem('picId',eighteenth);
                                window.location.reload();
                            }}
                            alt="18"
                        />
                        <img
                            src={nineteenth}
                            height="50"
                            width="50"
                            className="rounded-circle z-depth-0, img-light"
                            onClick={() => {
                                localStorage.setItem('picId',nineteenth);
                                window.location.reload();
                            }}
                            alt="19"
                        />
                        <img
                            src={twentieth}
                            height="50"
                            width="50"
                            className="rounded-circle z-depth-0, img-light"
                            onClick={() => {
                                localStorage.setItem('picId',twentieth);
                                window.location.reload();
                            }}
                            alt="20"
                        />
                    </Stack>
                    <Stack spacing={5} direction="row">
                        <img
                            src={twentyfirst}
                            height="50"
                            width="50"
                            className="rounded-circle z-depth-0, img-light"
                            onClick={() => {
                                localStorage.setItem('picId',twentyfirst);
                                window.location.reload();
                            }}
                            alt="21"
                        />
                        <img
                            src={twentysecond}
                            height="50"
                            width="50"
                            className="rounded-circle z-depth-0, img-light"
                            onClick={() => {
                                localStorage.setItem('picId',twentysecond);
                                window.location.reload();
                            }}
                            alt="22"
                        />
                        <img
                            src={twentythird}
                            height="50"
                            width="50"
                            className="rounded-circle z-depth-0, img-light"
                            onClick={() => {
                                localStorage.setItem('picId',twentythird);
                                window.location.reload();
                            }}
                            alt="23"
                        />
                        <img
                            src={twentyfourth}
                            height="50"
                            width="50"
                            className="rounded-circle z-depth-0, img-light"
                            onClick={() => {
                                localStorage.setItem('picId',twentyfourth);
                                window.location.reload();
                            }}
                            alt="24"
                        />
                        <img
                            src={twentyfifth}
                            height="50"
                            width="50"
                            className="rounded-circle z-depth-0, img-light"
                            onClick={() => {
                                localStorage.setItem('picId',twentyfifth);
                                window.location.reload();
                            }}
                            alt="25"
                        />
                    </Stack>
                </div>
            </div>
        </div>
    )
}