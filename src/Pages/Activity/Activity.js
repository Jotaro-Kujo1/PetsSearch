import React from "react";
import './activity.css';

export const Activity = (props) => {
    const data = props.data;
    const text = localStorage.getItem("login") + " " + data["activity_name"];

    return(
        <>
            <div className="oneActivityBox">
            <img
                src={data["activityimg"]}
                height="100"
                width="150"
                className="rounded-circle z-depth-0, activityPic"
                alt="userImg"
            />
            <p className="activityText">{text}</p>
            <p className="activityDate">{data["date"]}</p>
            </div>
        </>
    )
}