import def from '../../resources/def.png'
import React, {useEffect, useState} from "react";
import './styleProfile.css'
import {ControlsChooseAvatar} from "../../components/Controls/ControlsChooseAvatar";
import {ModalContextProviderChooseAvatar} from "../../contexts/ModalContext/ModalContextProviderChooseAvatar";
import {IconButton, Stack, Tooltip} from "@mui/material";
import Button from "@mui/material/Button";
import {LostRender} from "./LostRender";
import {SearchedRender} from "./SearchedRender";
import catPaw from "../../resources/petPaw.png";
import {CommentRender} from "../ForAnothersUsersProfile/CommentRender";
import activityComment from '../../resources/activityComment.png';
import activityLike from '../../resources/activityLike.png';
import activityPost from '../../resources/activityPost.png';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {CSSTransition} from "react-transition-group";


const areaHandler = () => {
    document.getElementById("search").style.display = "none";
    document.getElementById("comments").style.display = "none";
    document.getElementById("commentName").style.display = "none";
    if(document.getElementById("posts").style.display === "none"){
        document.getElementById("posts").style.display = "block";
    } else if(document.getElementById("posts").style.display === "block") {
        document.getElementById("posts").style.display = "none";
        document.getElementById("commentName").style.display = "block";
        document.getElementById("comments").style.display = "block";
    } else{
        document.getElementById("posts").style.display = "block";
    }
}

const searchHandler = () => {
    document.getElementById("posts").style.display = "none";
    document.getElementById("comments").style.display = "none";
    document.getElementById("commentName").style.display = "none";
    if(document.getElementById("search").style.display === "none"){
        document.getElementById("search").style.display = "block";
    } else if(document.getElementById("search").style.display === "block"){
        document.getElementById("search").style.display = "none";
        document.getElementById("commentName").style.display = "block";
        document.getElementById("comments").style.display = "block";
    } else{
        document.getElementById("search").style.display = "block";
    }
}



export const Profile = () =>{
    const [ans, setAns] = useState([]);
    const[likesAmount,setLikesAmount] = useState(0);
    const[comment,setComment] = useState([]);
    const[activity,setActivity] = useState([]);
    const [show,setShow] = useState(false);


    const query = async () => {
        let res = await fetch("http://localhost:8080/posts/getAllUsersPosts/" + localStorage.getItem('login'));
        const data = await res.json();
        setAns(data);
        //localStorage.setItem("postsByUser", JSON.stringify(data));
    }

    const queryToGetActivity = async() => {
        let res = await fetch("http://localhost:8080/activity/getActivity?login=" + localStorage.getItem("login"));
        setActivity(await res.json());
        console.log(activity);
        console.log(res.json());
    }

    const queryToGetLikesAmount = async() => {
        let res = await fetch("http://localhost:8080/raiting/getLikesAmount?login=" + localStorage.getItem('login'));
        setLikesAmount(await res.json());
        console.log(likesAmount);
    }

    const queryToGetComments = async() => {
        let res = await fetch("http://localhost:8080/comment/getComments?receiver_login=" + localStorage.getItem('login'));
        setComment(await res.json());
    }



    useEffect(()=>{
        query();
        queryToGetLikesAmount();
        queryToGetComments();
        queryToGetActivity();
    },[]);


    if(localStorage.getItem('picId')==null){
        return (
            <>
                <div className="imgSettings">
                <img
                    src={def}
                    height="140"
                    width="140"
                    className="rounded-circle z-depth-0"
                    alt="userImg"
                />
                </div>

                <Stack spacing={3} direction="row">
                    <div className="btnChooseAvatar">
                        <ModalContextProviderChooseAvatar>
                            <ControlsChooseAvatar/>
                        </ModalContextProviderChooseAvatar>
                    </div>
                    <div className="postBtn">
                        <Button className="btnChooseAvatar" variant="outlined" data-bs-dismiss="modal" onClick={areaHandler}>Posts</Button>
                    </div>
                    <div className="searchedBtn">
                        <Button className="btnChooseAvatar" variant="outlined" data-bs-dismiss="modal">Searched</Button>
                    </div>
                </Stack>

            </>
        )
    }else {
        return (
            <>
                <div className="imgSettings">
                <img
                    src={localStorage.getItem('picId')}
                    height="140"
                    width="140"
                    className="rounded-circle z-depth-0, myProfPic"
                    alt="userImg"
                />

                    <div className="login" ><h3>{localStorage.getItem('login')}</h3></div>

                </div>
                <Stack spacing={5} direction="row">
                <div className="btnChooseAvatar">
                <ModalContextProviderChooseAvatar>
                    <ControlsChooseAvatar/>
                </ModalContextProviderChooseAvatar>
                </div>
                    <div className="postBtn">
                    <Button className="btnChooseAvatar" variant="outlined" data-bs-dismiss="modal" onClick={areaHandler}>Posts</Button>
                    </div>
                    <div className="searchedBtn">
                    <Button className="btnChooseAvatar" variant="outlined" data-bs-dismiss="modal" onClick={searchHandler}>Searched</Button>
                    </div>
                    <div className="activityStack">
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
                    <div className="activityNumbers">
                        <Stack spacing={3} direction="row">
                        <div className={activity["comment_activity"] < 10 ? "numbersCommentOneDigit" : activity["comment_activity"] >= 10 && activity["comment_activity"] < 100 ? "numbersCommentTwoDigit" : "numbersCommentThreeDigit"}>{activity["comment_activity"]}</div>
                        <div className={activity["like_activity"] < 10 ? "numbersLikeOneDigit" : activity["like_activity"] >= 10 && activity["like_activity"] < 100 ? "numbersLikeTwoDigit" : "numbersLikeThreeDigit"}>{activity["like_activity"]}</div>
                        <div className={activity["post_activity"] < 10 ? "numbersPostOneDigit" : activity["post_activity"] >= 10 && activity["post_activity"] < 100 ? "numbersPostTwoDigit" : "numbersPostThreeDigit"}>{activity["post_activity"]}</div>
                        </Stack>
                    </div>
                </Stack>
                <img src={catPaw}
                     height="33"
                     width="70"
                     className="myCatPawPic"
                     alt=""/>
                <div className={likesAmount < 10 ? "likesCounterOneDigit" : likesAmount>=10 && likesAmount<100 ? "likesCounterTwoDigit" : "likesCounterThreeDigit"}>{likesAmount}</div>

                <div id="commentName">
                <h2 className="commentsName">Comments</h2>
                </div>
                <div id="posts">
                    <LostRender data={ans}/>
                </div>
                <div id = "comments">
                <div className="commentBoxWrapper">
                    <div className="commentBoxTop">
                        <CommentRender data={comment}/>
                    </div>
                </div>
                    <IconButton color="primary" aria-label="upload picture" component="label" className="notificationsProfile" onClick={() => setShow(!show)}>
                        <NotificationsIcon/>
                    </IconButton>
                    <CSSTransition in={show} classNames='alert' timeout={300} unmountOnExit>
                    <div className="usersActivity">
                        <p>activity)))</p>
                    </div>
                    </CSSTransition>
                </div>
                <div id="search">
                    <SearchedRender data={ans}/>
                </div>
            </>
        );
    }
}