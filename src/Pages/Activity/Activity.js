import React from "react";
import './activity.css';


export const Activity = (props) => {
    const data = props.data;
    console.log(data);
    return(
        <>
            <div className="oneActivityBox">
            <img
                src={data["profimg"]}
                height="80"
                width="70"
                className="rounded-circle z-depth-0, activityPic"
                alt="userImg"
            />
                <p className="activityLogin">{data["sender_login"]}</p>
            <p className="activityText">{data["text"]}</p>
            <p className="activityDate">{data["date"]}</p>
            </div>
        </>
    )
}