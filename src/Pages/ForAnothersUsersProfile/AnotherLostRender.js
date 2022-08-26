import {TextareaAutosize} from "@mui/material";
import React from "react";

export const AnotherLostRender = (props) => {
    var posts = props.data;
    var postsLost = [];

    for(var i=0;i<posts.length;i++){
        let temp = posts[i];
        if(temp["state"] === true) postsLost.push(temp);
    }

    let elements = null;
    elements = Array.isArray(postsLost) ? postsLost.map(post =>
        <>
            <div className="textAreaAnother">
                <TextareaAutosize className="description"
                                  aria-label="minimum height"
                                  minRows={6}
                                  style={{width: 400}}
                                  value={post["description"]}
                />
                <TextareaAutosize className="address"
                                  aria-label="minimum height"
                                  minRows={1}
                                  style={{width: 300}}
                                  value={post["address"]}
                />
            </div>

            <div className="imgProfile">
                <img className="imgCont" src={"data:image/jpeg;base64," + post["handler"]} height="280px"
                     width="230px"/>
            </div>
            <div className="dateProfile">
                <p>{post["date"]}</p>
            </div>
        </>
    ): console.log(posts.type);

    return (
        <>
            <div>
                <h3 align="center">Lost</h3>
                {elements}
            </div>
        </>
    )
}