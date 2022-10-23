import {Stack, TextareaAutosize} from "@mui/material";
import React from "react";
import './style.css';
import MailIcon from '@mui/icons-material/Mail';
import Button from "@mui/material/Button";


export const PostRenderer = (props) => {
    var userHandler = [];
    var conversationHandler = [];
    var area;
    if (localStorage.getItem('area') === '') {
        area = 'Все';
    } else area = localStorage.getItem('area');
    var posts = props.data;
    let elements = null;
    elements = Array.isArray(posts) ? posts.map(post =>
        <>
            <div className="onePostInPostRender">
                <Stack spacing={2} direction = "row" className="loginAndPicBox">
                    <img
                        src={post["profimg"]}
                        height="50"
                        width="50"
                        className="rounded-circle z-depth-0, myPostPic"
                        onClick={() => {
                            userHandler.push(post['login']);
                            userHandler.push(post['profimg']);
                            localStorage.setItem("userHandler", JSON.stringify(userHandler));
                            if(post['login'] === localStorage.getItem("login")){
                                window.location.assign('http://localhost:3000/profile');
                            } else{
                                window.location.assign('http://localhost:3000/another');
                            }
                        }}
                        alt="userImg"
                    />
                    <p className="loginWithPic">{post["login"]}</p>
                </Stack>
                <Stack spacing={2} direction="row">
                    <Stack spacing={2} direction="column">
                        <img className="imgCont" src={"data:image/jpeg;base64," + post["handler"]} height="280px"
                             width="230px"/>
                        <div className="dateProfile">
                            <p className="dateDate">{post["date"]}</p>
                        </div>
                    </Stack>


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
                        <div className="deleteBlock">
                        <Button variant="contained" className="delBtn" startIcon={<MailIcon/>} onClick={() => {
                            sessionStorage.setItem("conversationId",1);
                            conversationHandler.push(post['login']);
                            conversationHandler.push(post['profimg']);
                            localStorage.setItem("conversationHandler", JSON.stringify(conversationHandler));
                            window.location.assign('http://localhost:3000/messenger');
                        }}>Send message</Button>
                        </div>
                    </div>
                    </Stack>

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