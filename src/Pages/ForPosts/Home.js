import React, {useEffect, useState} from "react";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";


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
            {JSON.stringify(ans)}
        </>
    )
}