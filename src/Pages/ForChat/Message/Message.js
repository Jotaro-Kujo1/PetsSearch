import React from 'react';
import './message.css';
import testImage from '../../../components/ModalChooseAvatar/Avatars/10.png';

export const Message = ({messages, currentUser}) => {

    let renderMessage = (message) => {
        const messageFromMe = currentUser.login === message.sender_name
        console.log("Current" + currentUser.login);
        console.log(message.sender_name);
        console.log(messageFromMe);
        return(
            <div className={messageFromMe ? "message own" : "message"}>
                <div className="messageTop">

                    <img className="messageImage" src={message.profimg} alt=""/>
                    <p className="messageText">{message.message}</p>
                </div>
                <div className="messageBottom">
                    {message.timestamp}
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