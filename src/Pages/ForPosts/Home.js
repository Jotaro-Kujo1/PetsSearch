import React, {useEffect, useState} from "react";
import {TextareaAutosize} from "@mui/material";
import {PostRenderer} from "./PostRenderer";


export const Home = () => {

    const [ans, setAns] = useState([]);
    const[items,setItems] = useState([])


    const test = async () => {
        const res = await fetch("http://localhost:8080/posts/getAllPosts");
        const data = await res.json();
        setAns(data);
        localStorage.setItem("posts", JSON.stringify(data));
    }



    useEffect(()=>{
        test();
    },[]);


    return (
        <>
            <div width="600px" height="auto">
                <PostRenderer/>
            </div>
        </>
    )
}