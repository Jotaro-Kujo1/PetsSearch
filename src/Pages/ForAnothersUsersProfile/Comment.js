import def from "../../resources/def.png";
import React from "react";

export const Comment = (props) => {
    const data = props.data;

    return(
        <>
        <img
            src={data["profimg"]}
            height="50"
            width="50"
            className="rounded-circle z-depth-0, myCommentPic"
            alt="userImg"
        />
            <div className="commentatorLoginBox">
                <h3 className="commentatorLogin">{data["sender_login"]}</h3>
            </div>
    <p className="commentText">{data["text"]}</p>
    </>
    )
}