import def from '../../resources/def.png'
import React from "react";
import './styleProfile.css'
import {ControlsChooseAvatar} from "../../components/Controls/ControlsChooseAvatar";
import {ModalContextProviderChooseAvatar} from "../../contexts/ModalContext/ModalContextProviderChooseAvatar";
import {IconButton, Stack, TextareaAutosize} from "@mui/material";
import Button from "@mui/material/Button";
import {Delete} from "@mui/icons-material";
import {useEffect} from "react";
import {LostRender} from "./LostRender";
import {useState} from "react";
import {SearchedRender} from "./SearchedRender";
import catPaw from "../../resources/petPaw.png";
import {InputComment} from "./InputComment";
import {CommentRender} from "../ForAnothersUsersProfile/CommentRender";
import {ActivityRender} from "../Activity/ActivityRender";
import activity2 from '../../resources/activity2.png';
import activity3 from '../../resources/activity3.png';
import activity4 from '../../resources/activity4.png';
import activity5 from '../../resources/activity5.png';


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



export const Profile = () =>{
    const [ans, setAns] = useState([]);
    const[likesAmount,setLikesAmount] = useState(0);
    const[comment,setComment] = useState([]);
    const[activity,setActivity] = useState([]);

    const query = async () => {
        let res = await fetch("http://localhost:8080/posts/getAllUsersPosts/" + localStorage.getItem('login'));
        const data = await res.json();
        setAns(data);
        //localStorage.setItem("postsByUser", JSON.stringify(data));
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

    const queryToGetActivity = async() => {
        let res = await fetch("http://localhost:8080/activity/getActivities?login=" + localStorage.getItem("login"));
        setActivity(await res.json());
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
                <Stack spacing={4} direction="row">
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
                        <img
                            src={activity5}
                            height="50"
                            width="90"
                            className="activityHeart"
                            alt="userImg"
                        />
                        <img
                            src={activity2}
                            height="50"
                            width="90"
                            className="activityDog"
                            alt="userImg"
                        />
                        <img
                            src={activity3}
                            height="50"
                            width="90"
                            className="activityAny"
                            alt="userImg"
                        />
                    </div>
                </Stack>
                <img src={catPaw}
                     height="33"
                     width="70"
                     className="myCatPawPic"
                     alt=""/>
                <div className={likesAmount < 10 ? "likesCounterOneDigit" : likesAmount>=10 && likesAmount<100 ? "likesCounterTwoDigit" : "likesCounterThreeDigit"}>{likesAmount}</div>
                <h2 className="commentsName">Comments</h2>
                <div id="posts">
                    <LostRender data={ans}/>
                </div>
                <div id = "comments">
                <div className="commentBoxWrapper">
                    <div className="commentBoxTop">
                        <CommentRender data={comment}/>
                    </div>
                </div>
                    <div className="activity">

                    </div>
                </div>
                <div id="search">
                    <SearchedRender data={ans}/>
                </div>
            </>
        );
    }
}