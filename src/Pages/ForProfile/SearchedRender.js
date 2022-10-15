import {IconButton, TextareaAutosize} from "@mui/material";
import {Delete} from "@mui/icons-material";
import React from "react";
import './styleProfile.css';

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


export const SearchedRender = (props) => {
    var posts = props.data;
    var postsSearched = [];


    for(var i=0;i<posts.length;i++){
        let temp = posts[i];
        if(temp["state"] === false) postsSearched.push(temp);
    }

    let elements = null;
    elements = Array.isArray(postsSearched) ? postsSearched.map(post =>
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
            <IconButton color="primary" aria-label="upload picture" component="label" className="delBtn" onClick={()=>deleteHandler(post["id"])}>
                <Delete/>
            </IconButton>
            <div className="img">
                <img className="imgContSearched" src={"data:image/jpeg;base64," + post["handler"]} height="280px"
                     width="230px"/>
            </div>
            <div className="dateSearched">
                <p>{post["date"]}</p>
            </div>
        </>
    ): console.log(posts.type);

    return (
        <>
            <div>
                <h3 align="center" className="mySearched">My Searched</h3>
                {elements}
            </div>
        </>
    )
}