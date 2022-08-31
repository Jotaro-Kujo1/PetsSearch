import {TextareaAutosize} from "@mui/material";
import Button from "@mui/material/Button";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";

export const SearchedRender = (props) => {
    var userHandler = [];
    var area;
    if (localStorage.getItem('area') === '') {
        area = 'Все';
    } else area = localStorage.getItem('area');
    var posts = props.data;
    let elements = null;
    elements = Array.isArray(posts) ? posts.map(post =>
        <>
            <img
                src={post["profimg"]}
                height="50"
                width="50"
                className="rounded-circle z-depth-0, myPostPicSearched"
                onClick={() => {
                    userHandler.push(post['login']);
                    userHandler.push(post['profimg']);
                    localStorage.setItem("userHandler", JSON.stringify(userHandler));
                    window.location.assign('http://localhost:3000/another');
                }}
                alt="userImg"
            />
            <p className="loginWithPic">{post["login"]}</p>
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
            <Button variant="contained" className="messageBtnSearched" startIcon={<MailIcon/>}>Send message</Button>
            <div className="img">
                <img className="imgContSearchedMain" src={"data:image/jpeg;base64," + post["handler"]} height="280px"
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
                <h3 className="title" align="center">{area}</h3>
                {elements}
            </div>
        </>
    )
}