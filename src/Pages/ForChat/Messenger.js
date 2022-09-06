import React from 'react';
import './messenger.css';
import {Conversation} from "./Conversations/Conversation";
import {Message} from "./Message/Message";
import Button from "@mui/material/Button";

export const Messenger = () => {
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
                    online
                </div>
            </div>
        </div>
        </>
    )
}