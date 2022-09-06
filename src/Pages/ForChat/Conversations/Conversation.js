import React from "react";
import testImage from "../../ForProfile/def.png";
import './conversation.css';

export const Conversation = () => {
    return(
        <div className="conversation">
            <img className="conversationImg" src={testImage} alt=""/>
            <span className="conversationName">John Doe</span>
        </div>
    )
}