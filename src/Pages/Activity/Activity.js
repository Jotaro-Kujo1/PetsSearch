import React from "react";
import './activity.css';
import ClearIcon from '@mui/icons-material/Clear';
import {IconButton} from "@mui/material";



export const Activity = (props,{deleteNotification}) => {
    const data = props.data;
    console.log(data);

    const queryToDeleteNotification = (id) => {
        fetch("http://localhost:8080/notification/deleteNotification?id=" + id,{
            method:"DELETE",
            body: id
        }).then(()=>{
            deleteNotification();
        })
    }

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
                <IconButton color="primary" aria-label="upload picture" component="label" className="clearBtn" onClick={()=>queryToDeleteNotification(data["id"])}>
                    <ClearIcon/>
                </IconButton>
            </div>
        </>
    )
}