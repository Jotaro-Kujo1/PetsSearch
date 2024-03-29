import React, {useContext, useState} from 'react'
import './styleSingIn.css'
import { ModalContext } from "../../contexts";
import UserSignIn from "../User/UserSignIn";


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
                    <UserSignIn/>
                </div>

            </div>
        </div>
    )
}