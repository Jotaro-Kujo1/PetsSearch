import React, {useEffect, useState} from 'react';
import './messenger.css';
import {Conversation} from "./Conversations/Conversation";
import {ConversationRender} from "./Conversations/ConversationRender";
import {Message} from "./Message/Message";
import {Input} from "./InputData/Input";
import Button from "@mui/material/Button";
import {ChatOnline} from "./ChatOnline/ChatOnline";
import {MessageRender} from "./Message/MessageRender";
import chatAPI from "./Services/chatAPI";
import SockJsClient from 'react-stomp';
const SOCKET_URL = "http://localhost:8080/ws-chat/";

export const Messenger = () => {
    let conversationHandler = [];
    conversationHandler = JSON.parse(localStorage.getItem("conversationHandler"));
    let receiver_login = conversationHandler[0];
    let profimg = conversationHandler[1];
    const[ans,setAns] = useState([]);

    const [messages,setMessages] = useState([]);


    const queryToSaveConversation = () => {
        const id = "tmp";
        const sender_login = localStorage.getItem("login");
        const newConversation = {id,sender_login,receiver_login,profimg};
        //console.log(newConversation);
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


    let onConnected = () => {
        console.log("Connected");
    }

    let onMessageReceived = (msg) => {
        console.log("New message received",msg);
        setMessages(messages.concat(msg));
    }

    let onSendMessage = (msgText) => {
        console.log(msgText);
        chatAPI.sendMessage(localStorage.getItem("login"),msgText).then(res => {
            console.log("Sent", res);
        }).catch(err => {
            console.log("Error Occurred while sending message to api");
        })
    }




    return(
        <>
        <SockJsClient
            url={SOCKET_URL}
            topics={['/topic/group']}
            onConnect={onConnected}
            onDisconnect={console.log("Disconnected")}
            onMessage={msg => onMessageReceived(msg)}
            debug={false}
        />
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
                        <Message messages={messages} currentUser={{login:localStorage.getItem("login"),
                        profimg:localStorage.getItem("picId")}}/>
                    </div>
                    <div className="chatBoxBottom">
                        <Input onSendMessage={onSendMessage}/>
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