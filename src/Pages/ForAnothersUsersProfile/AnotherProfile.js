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
import activityComment from "../../resources/activityComment.png";
import activityLike from "../../resources/activityLike.png";
import activityPost from "../../resources/activityPost.png";

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
    const[activity,setActivity] = useState([]);


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
                    queryToUpdateLikeActivity();
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

    const queryToGetActivity = async() => {
        let res = await fetch("http://localhost:8080/activity/getActivity?login=" + login);
        setActivity(await res.json());
        console.log(activity);
        console.log(res.json());
    }

    const queryToUpdateCommentActivity = () => {
        activity["comment_activity"]++;
        fetch("http://localhost:8080/activity/updateComments",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(activity)
        }).then((response)=>{
            console.log(response.status);
        })
    }

    const queryToUpdateLikeActivity = () => {
        activity["like_activity"]++;
        fetch("http://localhost:8080/activity/updateLikes",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(activity)
        }).then((response)=>{
            console.log(response.status);
        })
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
                queryToUpdateCommentActivity();
            })
    }

    useEffect(()=>{
        query();
        queryToGetLikesAmount();
        queryToGetComments();
        queryToGetActivity();
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

            <Stack spacing={5} direction="row">
                <div className="lostBlock">
                <Button className="lostBtnAn" variant="outlined"  data-bs-dismiss="modal" onClick={areaHandler}>Lost</Button>
                </div>
                <div className="searchedBlock">
                <Button className="searchedBtnAn" variant="outlined"  data-bs-dismiss="modal" onClick={searchHandler}>Searched</Button>
                </div>
                <div className="mailBlock">
                <Button className="mailBtn" variant="contained" startIcon={<MailIcon/>} onClick={() => {
                    sessionStorage.setItem("conversationId",1);
                    conversationHandler.push(login);
                    conversationHandler.push(profimg);
                    localStorage.setItem("conversationHandler", JSON.stringify(conversationHandler));
                    window.location.assign('http://localhost:3000/messenger');
                }}>Send message</Button>
                </div>
                <div className="activityStackAnother">
                    <img
                        src={activityComment}
                        height="50"
                        width="50"
                        className="activityComment"
                        alt="userImg"
                    />
                    <img
                        src={activityLike}
                        height="50"
                        width="50"
                        className="activityLike"
                        alt="userImg"
                    />
                    <img
                        src={activityPost}
                        height="50"
                        width="50"
                        className="activityPost"
                        alt="userImg"
                    />
                </div>
                <div className="activityNumbersAnother">
                    <Stack spacing={3} direction="row">
                        <div className={activity["comment_activity"] < 10 ? "numbersCommentAnotherOneDigit" : activity["comment_activity"] >= 10 && activity["comment_activity"] < 100 ? "numbersCommentAnotherTwoDigit" : "numbersCommentAnotherThreeDigit"}>{activity["comment_activity"]}</div>
                        <div className={activity["like_activity"] < 10 ? "numbersLikeAnotherOneDigit" : activity["like_activity"] >= 10 && activity["like_activity"] < 100 ? "numbersLikeAnotherTwoDigit" : "numbersLikeAnotherThreeDigit"}>{activity["like_activity"]}</div>
                        <div className={activity["post_activity"] < 10 ? "numbersPostAnotherOneDigit" : activity["post_activity"] >= 10 && activity["post_activity"] < 100 ? "numbersPostAnotherTwoDigit" : "numbersPostAnotherThreeDigit"}>{activity["post_activity"]}</div>
                    </Stack>
                </div>
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
