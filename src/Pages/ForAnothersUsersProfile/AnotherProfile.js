import React from "react";
import {useEffect, useState} from "react";
import {Stack} from "@mui/material";
import Button from "@mui/material/Button";
import {LostRender} from "../ForProfile/LostRender";
import {SearchedRender} from "../ForProfile/SearchedRender";

const areaHandler = () => {
document.getElementById("search").style.display = "none";
if(document.getElementById("posts").style.display === "none"){
    document.getElementById("posts").style.display = "block";
} else if(document.getElementById("posts").style.display === "block") {
    document.getElementById("posts").style.display = "none";
} else{
    document.getElementById("posts").style.display = "block";
}

}

const searchHandler = () => {
    document.getElementById("posts").style.display = "none";
    if(document.getElementById("search").style.display === "none"){
        document.getElementById("search").style.display = "block";
    } else if(document.getElementById("search").style.display === "block"){
        document.getElementById("search").style.display = "none";
    } else{
        document.getElementById("search").style.display = "block";
    }
}

export const AnotherProfile = () => {
    let userHandler = localStorage.getItem('userHandler');
    let login = userHandler['login'];
    let profimg = userHandler['profimg'];
    const [ans, setAns] = useState([]);



    const query = async () => {
        let res = await fetch("http://localhost:8080/posts/getAllUsersPosts/" + login);
        const data = await res.json();
        setAns(data);
    }

    useEffect(()=>{
        query();
    },[]);

    return (
        <>
            <div className="imgSettings">
                <img
                    src={profimg}
                    height="140"
                    width="140"
                    className="rounded-circle z-depth-0, myProfPic"
                    alt="userImg"
                />
                <div className="login" ><h3>{login}</h3></div>
            </div>
            <p>PRODR</p>
            <Stack spacing={2} direction="row">
                <div className="postBtn">
                    <Button className="btnChooseAvatar" variant="outlined" data-bs-dismiss="modal" onClick={areaHandler}>Posts</Button>
                </div>
                <div className="searchedBtn">
                    <Button className="btnChooseAvatar" variant="outlined" data-bs-dismiss="modal" onClick={searchHandler}>Searched</Button>
                </div>
            </Stack>

            <div id="posts">

            </div>

            <div id="search">

            </div>
        </>
    )
}
