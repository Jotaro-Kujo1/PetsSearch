import {useState} from "react";
import Button from "@mui/material/Button";
import React from "react";
import './input.css';

export const Input = ({onSendMessage}) => {
    const [text, setText] = useState("")

    let onChange = (e) => {
        setText(e.target.value);
        console.log(text);
    }

    let onSubmit = () => {
        onSendMessage(text);
        setText("");
    }

    return(
        <>
        <textarea className="chatMessageInput" placeholder="write something..." value={text} onChange={e => onChange(e)} onKeyPress={event => {
            if (event.key === 'Enter') {
                onSubmit(text);
            }
        }}></textarea>
        <Button className="chatSubmitButton" variant="contained" onClick={onSubmit}>Send</Button>
        </>
    )
}
