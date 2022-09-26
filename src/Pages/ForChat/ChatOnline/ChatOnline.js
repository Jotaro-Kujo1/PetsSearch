import React from "react";
import "./chatOnline.css";
import testImage from "../../../resources/def.png";

export const ChatOnline = () => {
    return(
        <div className="chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImageContainer">
                    <img className="chatOnlineImage" src={testImage} alt=""/>
                    <div className="chatOnlineBadge">

                    </div>
                </div>
                <span className="chatOnlineName">John Doe</span>
            </div>
        </div>
    )
}