import React from 'react';
import './message.css';
import testImage from '../../../components/ModalChooseAvatar/Avatars/10.png';

export const Message = ({messages, currentUser}) => {

    let renderMessage = (message) => {
        const {sender,content} = message;
        const messageFromMe = currentUser === message.sender;
        return(
            <div className={messageFromMe ? "message own" : "message"}>
                <div className="messageTop">
                    <img className="messageImage" src={testImage} alt=""/>
                    <p className="messageText">{content}</p>
                </div>
                <div className="messageBottom">
                    1 hour ago
                </div>
            </div>
        )
    }

    return(
        <ul className="messages-list">
            {messages.map(msg => renderMessage(msg))}
        </ul>
    )

}