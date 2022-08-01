import test from './test.PNG'
import React from "react";
import './style.css'
import {ControlsChooseAvatar} from "../../components/Controls/ControlsChooseAvatar";
import {ModalContextProviderChooseAvatar} from "../../contexts/ModalContext/ModalContextProviderChooseAvatar";


export const Profile = () =>{
    if(localStorage.getItem('picId')==null){
        return (
            <>
                <img
                    src={test}
                    height="140"
                    width="140"
                    className="rounded-circle z-depth-0"
                    alt="Logo"
                />
                <ModalContextProviderChooseAvatar>
                    <ControlsChooseAvatar/>
                </ModalContextProviderChooseAvatar>
            </>
        )
    }else {
        return (
            <>
                <img
                    src={localStorage.getItem('picId')}
                    height="140"
                    width="140"
                    className="rounded-circle z-depth-0"
                    alt="userImg"
                />
                <ModalContextProviderChooseAvatar>
                    <ControlsChooseAvatar/>
                </ModalContextProviderChooseAvatar>
            </>
        );
    }
}