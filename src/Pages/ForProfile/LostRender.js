import {IconButton, TextareaAutosize} from "@mui/material";
import {Delete} from "@mui/icons-material";
import React from "react";
import Button from "@mui/material/Button";
import MailIcon from "@mui/icons-material/Mail";

const deleteHandler = (id) => {

    fetch("http://localhost:8080/posts/post/" + id, {
        method: "DELETE",
        body: id
    })
        .then((response) => {
                console.log("DELETED");
                console.log(response.status);
                window.location.assign('http://localhost:3000');
            }
        )
}

export const LostRender = () => {
    var posts = [];
    posts = JSON.parse(localStorage.getItem("postsByUser"));
    let elements = null;
    elements = Array.isArray(posts) ? posts.map(post =>
        <>
            <div className="textArea">
                <TextareaAutosize className="description"
                                  aria-label="minimum height"
                                  minRows={6}
                                  style={{width: 400}}
                                  value={post["description"]}
                />
                <TextareaAutosize className="address"
                                  aria-label="minimum height"
                                  minRows={1}
                                  style={{width: 300}}
                                  value={post["address"]}
                />
            </div>
            <Button variant="contained" className="messageBtn" startIcon={<MailIcon/>}>Send message</Button>
            <div className="img">
                <img className="imgCont" src={"data:image/jpeg;base64," + post["handler"]} height="280px"
                     width="230px"/>
            </div>
            <div className="date">
                <p>{post["date"]}</p>
            </div>
        </>
    ): console.log(posts.type);

    return (
        <>
            <div>
                <h3 align="center">My Posts</h3>
                {elements}
            </div>
        </>
    )
}