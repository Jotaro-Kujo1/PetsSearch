import React, {useEffect, useState} from "react";
import {Stack} from "@mui/material";
import Button from "@mui/material/Button";
import './style.css';
import MailIcon from "@mui/icons-material/Mail";
import {AnotherLostRender} from "./AnotherLostRender";
import {AnotherSearchRender} from "./AnotherSearchRender";
import catPaw from '../../resources/petPaw.png';
import def from "../../resources/def.png";
import {InputComment} from "../ForProfile/InputComment";
import {ConversationRender} from "../ForChat/Conversations/ConversationRender";
import {CommentRender} from "./CommentRender";

const areaHandler = () => {
    document.getElementById("search").style.display = "none";
    document.getElementById("comments").style.display = "none";
    if(document.getElementById("posts").style.display === "none"){
        document.getElementById("posts").style.display = "block";
    } else if(document.getElementById("posts").style.display === "block") {
        document.getElementById("posts").style.display = "none";
        document.getElementById("comments").style.display = "block";
    } else{
        document.getElementById("posts").style.display = "block";
    }
}

const searchHandler = () => {
    document.getElementById("posts").style.display = "none";
    document.getElementById("comments").style.display = "none";
    if(document.getElementById("search").style.display === "none"){
        document.getElementById("search").style.display = "block";
    } else if(document.getElementById("search").style.display === "block"){
        document.getElementById("search").style.display = "none";
        document.getElementById("comments").style.display = "block";
    } else{
        document.getElementById("search").style.display = "block";
    }
}

export const AnotherProfile = () => {
    let userHandler = [];
    userHandler = JSON.parse(localStorage.getItem("userHandler"));
    let login = userHandler[0];
    let profimg = userHandler[1];
    const [ans, setAns] = useState([]);
    const[likesAmount,setLikesAmount] = useState(0);
    var conversationHandler = [];
    const[comment,setComment] = useState([]);
    const[text,setText] = useState("");


    const query = async () => {
        let res = await fetch("http://localhost:8080/posts/getAllUsersPosts/" + login);
        const data = await res.json();
        setAns(data);
    }

    const queryToLikes = () => {
        const id = "";
        var liker = localStorage.getItem("login");
        const raitingLogins = [{id,liker}]
        const newRaiting = {id,login,raitingLogins};
        fetch("http://localhost:8080/raiting/createRaiting",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newRaiting)
        })
            .then((response) => {
                    console.log("Status is" + response.status);
                    queryToGetLikesAmount();
                }
            )
    }

    const queryToGetLikesAmount = async() => {
        let res = await fetch("http://localhost:8080/raiting/getLikesAmount?login=" + login);
        setLikesAmount(await res.json());
        console.log(likesAmount);
    }

    const queryToGetComments = async() => {
        let res = await fetch("http://localhost:8080/comment/getComments?receiver_login=" + login);
        setComment(await res.json());
    }

    const queryToCreateComment = (newText) => {
        const id = "";
        var receiver_login = login;
        var sender_login = localStorage.getItem("login");
        var profimg = localStorage.getItem("picId");
        var text = newText;
        const comments = [{id,sender_login,profimg,text}];
        const receiver = {id,receiver_login,comments};
        console.log(receiver);
        fetch("http://localhost:8080/comment/createComment",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(receiver)
        })
            .then((response)=>{
                console.log("Status is" + response.status);
                queryToGetComments();
            })
    }

    useEffect(()=>{
        query();
        queryToGetLikesAmount();
        queryToGetComments();
    },[]);

    const onUpdateText = (newText) => {
        console.log(newText);
        queryToCreateComment(newText);
    }



    return (
        <>
            <div className="imgSettings">

                <img
                    src={profimg}
                    height="140"
                    width="140"
                    className="rounded-circle z-depth-0, myProfPic"
                    alt="userImg"/>
                    <div className="loginInAnPr">
                        <h3>{login}</h3>

                    </div>
            </div>

            <Stack spacing={2} direction="row">
                <Button className="lostBtnAn" variant="outlined"  data-bs-dismiss="modal" onClick={areaHandler}>Lost</Button>
                <Button className="searchedBtnAn" variant="outlined"  data-bs-dismiss="modal" onClick={searchHandler}>Searched</Button>
                <Button className="mailBtn" variant="contained" startIcon={<MailIcon/>} onClick={() => {
                    sessionStorage.setItem("conversationId",1);
                    conversationHandler.push(login);
                    conversationHandler.push(profimg);
                    localStorage.setItem("conversationHandler", JSON.stringify(conversationHandler));
                    window.location.assign('http://localhost:3000/messenger');
                }}>Send message</Button>
            </Stack>
                <img src={catPaw}
                     height="33"
                     width="70"
                     className="catPawPic"
                     onClick={()=>{
                         queryToLikes();
                     }}
                     alt=""/>
            <div className={likesAmount < 10 ? "likesCounterOneDigit" : likesAmount>=10 && likesAmount<100 ? "likesCounterTwoDigit" : "likesCounterThreeDigit"}>{likesAmount}</div>
            <div id="posts">
                <AnotherLostRender data={ans}/>
            </div>

            <div id="search">
                <AnotherSearchRender data={ans}/>
            </div>
            <div id = "comments">
            <div className="commentBoxWrapper">
                <div className="commentBoxTop">
                     <CommentRender data={comment}/>
                </div>
                <div className="commentBoxBottom">
                    <InputComment onUpdateText={onUpdateText}/>
                </div>
            </div>
            </div>
        </>
    )
}
