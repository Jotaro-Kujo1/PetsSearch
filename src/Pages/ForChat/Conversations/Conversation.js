import React from "react";
import testImage from "../../ForProfile/def.png";
import './conversation.css';

export const Conversation = (props) => {
    const data = props.data;
    return(
        <div className="conversation">
            <img className="conversationImg" src={data["profimg"]} alt=""/>
            <span className="conversationName">{data["receiver_login"]}</span>
        </div>
    )
}