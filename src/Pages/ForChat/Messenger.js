import React, {useEffect, useState} from 'react';
import './messenger.css';
import {Conversation} from "./Conversations/Conversation";
import {ConversationRender} from "./Conversations/ConversationRender";
import {Message} from "./Message/Message";
import Button from "@mui/material/Button";
import {ChatOnline} from "./ChatOnline/ChatOnline";
import {MessageRender} from "./Message/MessageRender";


export const Messenger = () => {
    let conversationHandler = [];
    conversationHandler = JSON.parse(localStorage.getItem("conversationHandler"));
    let receiver_login = conversationHandler[0];
    let profimg = conversationHandler[1];
    const[ans,setAns] = useState([]);

    const queryToSaveConversation = () => {
        const id = "tmp";
        const sender_login = localStorage.getItem("login");
        const newConversation = {id,sender_login,receiver_login,profimg};
        console.log(newConversation);
        fetch("http://localhost:8080/conversation/saveConversation", {
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(newConversation)
        }).then(async (response) => {
            let res;
            res = await fetch("http://localhost:8080/conversation/getUsersConversations?sender_login=" + localStorage.getItem("login"));
            const data = await res.json();
            setAns(data);
        })
    }


    useEffect(()=>{
        queryToSaveConversation();
    },[])


    return(
        <>

        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder="Search for people" className="chatMenuInput"/>
                    <ConversationRender data={ans}/>
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop">
                        <MessageRender data={ans}/>
                    </div>
                    <div className="chatBoxBottom">
                        <textarea className="chatMessageInput" placeholder="write something..."></textarea>
                        <Button className="chatSubmitButton" variant="contained">Send</Button>
                    </div>
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">

                </div>
            </div>
        </div>
        </>
    )
}