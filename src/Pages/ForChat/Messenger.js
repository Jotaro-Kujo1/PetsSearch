import React, {useEffect} from 'react';
import './messenger.css';
import {Conversation} from "./Conversations/Conversation";
import {Message} from "./Message/Message";
import Button from "@mui/material/Button";
import {ChatOnline} from "./ChatOnline/ChatOnline";

export const Messenger = () => {
    let conversationHandler = [];
    conversationHandler = JSON.parse(localStorage.getItem("conversationHandler"));
    let receiver_login = conversationHandler[0];
    let profimg = conversationHandler[1];
    /*
    const queryToSave = () => {
        //const newUser = {login,password};
        const myLogin = localStorage.getItem("login");

        const newConveration = {"tmp",}
        console.log(newUser);
        setLogin(login);
        fetch("http://localhost:8080/forUsers/user",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(newUser)
            }
        ).then((response) => {
            console.log(response.status);
            setState(response.status);
            sessionStorage.setItem('state',response.status);
            if(response.status >= 200 && response.status < 300) window.location.href = "Profile";
        })
    }
     */

    const queryToSaveConversation = () => {
        const id = "tmp";
        const sender_login = localStorage.getItem("login");
        const newConversation = {id,sender_login,receiver_login,profimg};
        console.log(newConversation);
        fetch("http://localhost:8080/conversation/saveConversation", {
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(newConversation)
        }).then(response => {
            console.log(response.state);
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
                    <Conversation/>
                    <Conversation/>
                    <Conversation/>
                    <Conversation/>
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop">
                        <Message own={true} />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                    </div>
                    <div className="chatBoxBottom">
                        <textarea className="chatMessageInput" placeholder="write something..."></textarea>
                        <Button className="chatSubmitButton" variant="contained">Send</Button>
                    </div>
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <ChatOnline/>
                    <ChatOnline/>
                    <ChatOnline/>
                </div>
            </div>
        </div>
        </>
    )
}