import React from 'react';
import './message.css';
import testImage from '../../../components/ModalChooseAvatar/Avatars/10.png';

export const Message = ({own}, props) => {
    return(
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img className="messageImage" src={testImage} alt=""/>
                <p className="messageText">Я в радиусе 3км от твоего дома всю траву вырвал чтоб скотина не ел</p>
            </div>
            <div className="messageBottom">
                1 hour ago
            </div>
        </div>
    )
}