import {useState} from "react";
import Button from "@mui/material/Button";
import React from "react";
import './input.css';

export const Input = ({onSendMessage}) => {
    const [text, setText] = useState("")

    let onChange = (e) => {
        setText(e.target.value)
    }

    let onSubmit = () => {
        setText("")
        onSendMessage(text);
    }

    return(
        <>
        <textarea className="chatMessageInput" placeholder="write something..." onChange={e => onChange(e)} value={text} onKeyPress={event => {
            if (event.key === 'Enter') {
                onSubmit(text);
            }
        }}></textarea>
        <Button className="chatSubmitButton" variant="contained" onClick={onSubmit}>Send</Button>
        </>
    )
}