import Button from "@mui/material/Button";
import React, {useState} from "react";

export const InputComment = ({onSendMessage}) => {
    const [text, setText] = useState("");

    let onChange = (e) => {
        setText(e.target.value);
    }

    let onSubmit = () => {
        console.log(text);
        onSendMessage(text);
        setText("");
    }

    return(
        <>
        <textarea className="commentInput" placeholder="write something..." value={text} onChange={e => onChange(e)} onKeyPress={event => {
            if (event.key === 'Enter') {
                onSubmit(text);
            }
        }}></textarea>
            <Button className="sendCommentButton" variant="contained" onClick={onSubmit}>Send</Button>
        </>
    )
}