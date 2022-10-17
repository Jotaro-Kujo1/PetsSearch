import React from "react";
import './activity.css';
import def from '../../components/ModalChooseAvatar/Avatars/10.png';

export const Activity = () => {

    return(
        <>
            <div className="oneActivityBox">
            <img
                src={def}
                height="80"
                width="70"
                className="rounded-circle z-depth-0, activityPic"
                alt="userImg"
            />
                <p className="activityLogin">Vadim</p>
            <p className="activityText">User Vadim publish new post</p>
            <p className="activityDate">18:16 17.10.2022</p>
            </div>
        </>
    )
}