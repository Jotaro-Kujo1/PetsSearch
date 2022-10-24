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
import {Activity} from "../Activity/Activity";
import {ActivityRender} from "../Activity/ActivityRender";
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';





export const Profile = () =>{
    const [ans, setAns] = useState([]);
    const[likesAmount,setLikesAmount] = useState(0);
    const[notificationsAmount,setNotificationAmount] = useState(false);
    const[comment,setComment] = useState([]);
    const[activity,setActivity] = useState([]);
    const [show,setShow] = useState(false);
    const [showPost,setShowPost] = useState(false);
    const [showSearched,setShowSearched] = useState(false);
    const [showCommentBox,setShowCommentBox] = useState(true);
    const [notification,setNotification] = useState([]);

    const query = async () => {
        let res = await fetch("http://localhost:8080/posts/getAllUsersPosts/" + localStorage.getItem('login'));
        const data = await res.json();
        setAns(data);
        //localStorage.setItem("postsByUser", JSON.stringify(data));
    }

    const queryToGetLikeNotification = async() => {
        if(notificationsAmount) setNotificationAmount(false);
        let res = await fetch("http://localhost:8080/notification/getNotifications?receiver_login=" + localStorage.getItem("login"));

        setNotification(await res.json());
        if(notification){
            setShow(!show);
        }
        console.log(notification);
        console.log(res.json());
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

    const queryToGetNotificationsAmount = async() => {
        let res = await fetch("http://localhost:8080/notification/getNotificationsAmount?receiver_login=" + localStorage.getItem('login'));
        let tmp = await res.json();
        console.log(tmp);
        if(localStorage.getItem("notificationsAmount")){
            if(localStorage.getItem("notificationsAmount") < tmp){
                setNotificationAmount(true);
            }
        }
        localStorage.setItem("notificationsAmount",tmp);
    }


    useEffect(()=>{
        query();
        queryToGetLikesAmount();
        queryToGetComments();
        queryToGetActivity();
        queryToGetNotificationsAmount();
    },[]);

    const deleteNotification = () => {
        window.location.reload();
    }


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
                        <Button className="btnChooseAvatar" variant="outlined" data-bs-dismiss="modal">Posts</Button>
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
                {notificationsAmount === false&&<IconButton color="primary" aria-label="upload picture" component="label" className="notificationsProfile" onClick={() => queryToGetLikeNotification()}>
                    <NotificationsIcon/>
                </IconButton>}
                {notificationsAmount === true&&<IconButton color="primary" aria-label="upload picture" component="label" className="notificationsProfile" onClick={() => queryToGetLikeNotification()}>
                    <NotificationImportantIcon/>
                </IconButton>}
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
                    <Button className="btnChooseAvatar" variant="outlined" data-bs-dismiss="modal" onClick={() => {
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
                    }}>Posts</Button>
                    </div>
                    <div className="searchedBtn">
                    <Button className="btnChooseAvatar" variant="outlined" data-bs-dismiss="modal"  onClick={() => {
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

                <CSSTransition in={showCommentBox} classNames='alert' timeout={300} unmountOnExit>
                    <h2 className="commentsName">Comments</h2>
                </CSSTransition>

                    <CSSTransition in={showPost} classNames='alert' timeout={300} unmountOnExit>
                    <LostRender data={ans}/>
                    </CSSTransition>


                <CSSTransition in={showCommentBox} classNames='alert' timeout={300} unmountOnExit>
                <div className="commentBoxWrapper">
                    <div className="commentBoxTop">

                        <CommentRender data={comment}/>

                    </div>
                </div>
                </CSSTransition>


                    <CSSTransition in={show} classNames='alert' timeout={300} unmountOnExit>
                    <div className="usersActivity">
                        <ActivityRender data = {notification} deleteNotification={deleteNotification}/>
                    </div>
                    </CSSTransition>

                <CSSTransition in={showSearched} classNames='alert' timeout={300} unmountOnExit>
                    <SearchedRender data={ans}/>
                </CSSTransition>
            </>
        );
    }
}