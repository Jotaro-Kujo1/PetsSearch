import React from "react";
import {useEffect, useState} from "react";
import {Stack} from "@mui/material";
import Button from "@mui/material/Button";
import './style.css';
import {LostRender} from "../ForProfile/LostRender";
import {SearchedRender} from "../ForProfile/SearchedRender";
import first from '../../components/ModalChooseAvatar/Avatars/1.png';
import MailIcon from "@mui/icons-material/Mail";
import {AnotherLostRender} from "./AnotherLostRender";
import {AnotherSearchRender} from "./AnotherSearchRender";

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
    let userHandler = [];
    userHandler = JSON.parse(localStorage.getItem("userHandler"));
    let login = userHandler[0];
    let profimg = userHandler[1];
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
                    alt="userImg"/>
                <div className="loginInAnPr"><h3>{login}</h3></div>
            </div>

            <Stack spacing={2} direction="row">
                <Button className="lostBtnAn" variant="outlined"  data-bs-dismiss="modal" onClick={areaHandler}>Lost</Button>
                <Button className="searchedBtnAn" variant="outlined"  data-bs-dismiss="modal" onClick={searchHandler}>Searched</Button>
                <Button className="mailBtn" variant="contained" startIcon={<MailIcon/>}>Send message</Button>
            </Stack>
            <div id="posts">
                <AnotherLostRender data={ans}/>
            </div>

            <div id="search">
                <AnotherSearchRender data={ans}/>
            </div>
        </>
    )
}