import {TextareaAutosize} from "@mui/material";
import React from "react";
import './style.css';

export const PostRenderer = () => {
    var posts = JSON.parse(localStorage.getItem("posts"));
    const elements = posts.map(post =>
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
                                  style={{width: 200}}
                                  value={post["address"]}
                />
            </div>
            <div className="img">
                <img className="image" src={"data:image/jpeg;base64," + post["handler"]} height="280px" width="230px"/>
            </div>
            <div className="date">
                <p>{post["date"]}</p>
            </div>
        </>
    )

    return (
        <>
        <div>
            <h3 className="title" align="center">All posts</h3>
            {elements}
        </div>
        </>
    )
}