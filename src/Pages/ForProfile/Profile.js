import def from './def.png'
import React from "react";
import './style.css'
import {ControlsChooseAvatar} from "../../components/Controls/ControlsChooseAvatar";
import {ModalContextProviderChooseAvatar} from "../../contexts/ModalContext/ModalContextProviderChooseAvatar";
import {Stack} from "@mui/material";
import Button from "@mui/material/Button";

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




export const Profile = () =>{
    var posts = JSON.parse(localStorage.getItem("posts"));
    console.log(posts.length);
    var item = posts[0];
    var str = "data:image/jpeg;base64," + item["handler"];

    console.log(item["description"]);

    if(localStorage.getItem('picId')==null){
        return (
            <>
                <div className="imgSettings">
                <img
                    src={def}
                    height="140"
                    width="140"
                    className="rounded-circle z-depth-0"
                    alt="userImg"
                />
                </div>
                <Stack spacing={3} direction="row">
                    <div className="btnChooseAvatar">
                        <ModalContextProviderChooseAvatar>
                            <ControlsChooseAvatar/>
                        </ModalContextProviderChooseAvatar>
                    </div>
                    <div className="postBtn">
                        <Button className="btnChooseAvatar" variant="outlined" data-bs-dismiss="modal" onClick={areaHandler}>Posts</Button>
                    </div>
                    <div className="searchedBtn">
                        <Button className="btnChooseAvatar" variant="outlined" data-bs-dismiss="modal">Searched</Button>
                    </div>
                </Stack>
            </>
        )
    }else {
        return (
            <>
                <div className="imgSettings">
                <img
                    src={localStorage.getItem('picId')}
                    height="140"
                    width="140"
                    className="rounded-circle z-depth-0, myProfPic"
                    alt="userImg"
                />
                    <div className="login" ><h3>{localStorage.getItem('login')}</h3></div>
                </div>
                <Stack spacing={3} direction="row">
                <div className="btnChooseAvatar">
                <ModalContextProviderChooseAvatar>
                    <ControlsChooseAvatar/>
                </ModalContextProviderChooseAvatar>
                </div>
                    <div className="postBtn">
                    <Button className="btnChooseAvatar" variant="outlined" data-bs-dismiss="modal" onClick={areaHandler}>Posts</Button>
                    </div>
                    <div className="searchedBtn">
                    <Button className="btnChooseAvatar" variant="outlined" data-bs-dismiss="modal" onClick={searchHandler}>Searched</Button>
                    </div>
                </Stack>

                <div id="posts">
                    <h3>My Posts</h3>
                    <p>
                        <img src={str} width="300px" height="300px"/>
                    </p>
                </div>

                <div id="search">
                    <h3>TEST SEARCH</h3>
                </div>

            </>
        );
    }
}