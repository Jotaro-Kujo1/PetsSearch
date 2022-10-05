import def from "../../resources/def.png";
import React from "react";

export const Comment = (props) => {
    const data = props.data;
    var userHandler = [];

    return(
        <>
            <div className="oneCommentBox">
        <img
            src={data["profimg"]}
            height="50"
            width="50"
            className="rounded-circle z-depth-0, myCommentPic"
            onClick={()=>{
                userHandler.push(data['sender_login']);
                userHandler.push(data['profimg']);
                localStorage.setItem("userHandler", JSON.stringify(userHandler));
                if(data['sender_login'] === localStorage.getItem("login")){
                    window.location.assign('http://localhost:3000/profile');
                } else{
                    window.location.assign('http://localhost:3000/another');
                }
            }}
            alt="userImg"
        />
            <div className="commentatorLoginBox">
                <h3 className="commentatorLogin">{data["sender_login"]}</h3>
            </div>
            <p className="commentText">{data["text"]}</p>
            <p className="commentDate">{data["date"]}</p>
            </div>
    </>
    )
}