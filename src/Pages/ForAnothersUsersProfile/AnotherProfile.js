import React, {useEffect, useState} from "react";
import {Stack, Tooltip} from "@mui/material";
import Button from "@mui/material/Button";
import './style.css';
import MailIcon from "@mui/icons-material/Mail";
import {AnotherLostRender} from "./AnotherLostRender";
import {AnotherSearchRender} from "./AnotherSearchRender";
import catPaw from '../../resources/petPaw.png';
import {InputComment} from "../ForProfile/InputComment";
import {CommentRender} from "./CommentRender";
import activityComment from "../../resources/activityComment.png";
import activityLike from "../../resources/activityLike.png";
import activityPost from "../../resources/activityPost.png";
import {CSSTransition} from "react-transition-group";


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
    const [showPost,setShowPost] = useState(false);
    const [showSearched,setShowSearched] = useState(false);
    const [showCommentBox,setShowCommentBox] = useState(true);
    const [anotherActivity,setAnotherActivity] = useState([]);


    const query = async () => {
        let res = await fetch("http://localhost:8080/posts/getAllUsersPosts/" + login);
        const data = await res.json();
        setAns(data);
    }

    const queryToLikeNotification = () => {
        const id = "";
        const profimg = localStorage.getItem("picId");
        const text = "Liked your profile";
        const sender_login = localStorage.getItem("login");
        const receiver_login = login;
        const date = "";
        const newNotification = {id,profimg,text,sender_login,receiver_login,date};
        fetch("http://localhost:8080/notification/createNotification",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newNotification)
        })
    }

    const queryToCommentNotification = () => {
        const id = "";
        const profimg = localStorage.getItem("picId");
        const text = "Wrote a comment";
        const sender_login = localStorage.getItem("login");
        const receiver_login = login;
        const date = "";
        const newNotification = {id,profimg,text,sender_login,receiver_login,date};
        fetch("http://localhost:8080/notification/createNotification",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newNotification)
        })
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
                    queryToLikeNotification();
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

    const queryToGetLikerActivity = async() => {
        let res = await fetch("http://localhost:8080/activity/getActivity?login=" + localStorage.getItem("login"));
        setAnotherActivity(await res.json());
    }

    const queryToUpdateCommentActivity = () => {
        anotherActivity["comment_activity"]++;
        fetch("http://localhost:8080/activity/updateComments",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(anotherActivity)
        }).then((response)=>{
            console.log(response.status);
        })
    }

    const queryToUpdateLikeActivity = () => {
        anotherActivity["like_activity"]++;
        fetch("http://localhost:8080/activity/updateLikes",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(anotherActivity)
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
                queryToCommentNotification();
            })
    }

    useEffect(()=>{
        query();
        queryToGetLikesAmount();
        queryToGetComments();
        queryToGetActivity();
        queryToGetLikerActivity();
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
                <Button className="lostBtnAn" variant="outlined"  data-bs-dismiss="modal" onClick={() => {
                    setShowPost(!showPost)
                    if(showSearched === true){
                        setShowSearched(!showSearched);
                        if(showCommentBox === false){
                            setShowCommentBox(showCommentBox)
                        }else {
                            setShowCommentBox(!showCommentBox)
                        }
                    }else{
                        setShowCommentBox(!showCommentBox)
                    }
                }}>Lost</Button>
                </div>
                <div className="searchedBlock">
                <Button className="searchedBtnAn" variant="outlined"  data-bs-dismiss="modal" onClick={() => {
                    setShowSearched(!showSearched)
                    if(showPost === true){
                        setShowPost(!showPost);
                        if(showCommentBox === false){
                            setShowCommentBox(showCommentBox)
                        }else {
                            setShowCommentBox(!showCommentBox)
                        }
                    }else{
                        setShowCommentBox(!showCommentBox)
                    }
                }}>Searched</Button>
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
                    <Tooltip title="Комментариев" placement="top">
                    <img
                        src={activityComment}
                        height="50"
                        width="50"
                        className="activityComment"
                        alt="userImg"
                    />
                    </Tooltip>
                    <Tooltip title="Лайков" placement="top">
                    <img
                        src={activityLike}
                        height="50"
                        width="50"
                        className="activityLike"
                        alt="userImg"
                    />
                    </Tooltip>
                    <Tooltip title="Постов" placement="top">
                    <img
                        src={activityPost}
                        height="50"
                        width="50"
                        className="activityPost"
                        alt="userImg"
                    />
                    </Tooltip>
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
            <CSSTransition in={showCommentBox} classNames='alert' timeout={300} unmountOnExit>
            <h2 className="commentsName">Comments</h2>
            </CSSTransition>
            <CSSTransition in={showPost} classNames='alert' timeout={300} unmountOnExit>
                <AnotherLostRender data={ans}/>
            </CSSTransition>

            <CSSTransition in={showSearched} classNames='alert' timeout={300} unmountOnExit>
                <AnotherSearchRender data={ans}/>
            </CSSTransition>
            <CSSTransition in={showCommentBox} classNames='alert' timeout={300} unmountOnExit>
            <div className="commentBoxWrapper">
                <div className="commentBoxTop">
                     <CommentRender data={comment}/>
                </div>
                <div className="commentBoxBottom">
                    <InputComment onUpdateText={onUpdateText}/>
                </div>
            </div>
            </CSSTransition>
        </>
    )
}
