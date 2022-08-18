import def from './def.png'
import React from "react";
import './style.css'
import {ControlsChooseAvatar} from "../../components/Controls/ControlsChooseAvatar";
import {ModalContextProviderChooseAvatar} from "../../contexts/ModalContext/ModalContextProviderChooseAvatar";
import {IconButton, Stack, TextareaAutosize} from "@mui/material";
import Button from "@mui/material/Button";
import {Delete} from "@mui/icons-material";


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

const deleteHandler = (id) => {

    fetch("http://localhost:8080/posts/post/" + id, {
        method: "DELETE",
        body: id
    })
        .then((response) => {
                console.log("DELETED");
                console.log(response.status);
            }
        )
}

export const Profile = () =>{

    var posts = JSON.parse(localStorage.getItem("posts"));
    var res = [];
    for(var i =0;i<posts.length;i++){
        let tmp = posts[i];
        if(tmp["user_name"]===localStorage.getItem("login")){
            res[i] = posts[i];
        }
    }
    const elements = res.map(post =>
        <>
            <div className="textArea">
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
            <div className="img">
                <img className="image" src={"data:image/jpeg;base64," + post["handler"]} height="280px" width="230px"/>
            </div>
            <div className="date">
                <p>{post["date"]}</p>
            </div>
            <IconButton color="primary" aria-label="upload picture" component="label" className="delBtn" onClick={() => deleteHandler(post["id"])}>
                <Delete/>
            </IconButton>

        </>
    )

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
                    <h3 align="center">My Posts</h3>
                    {elements}
                </div>

                <div id="search">
                    <h3>TEST SEARCH</h3>
                </div>
            </>
        );
    }
}