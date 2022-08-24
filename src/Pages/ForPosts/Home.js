import React, {useEffect, useState} from "react";
import {PostRenderer} from "./PostRenderer";


export const Home = () => {

    const [ans, setAns] = useState([]);
    const[items,setItems] = useState([])


    const query = async () => {
        let res;
        if((localStorage.getItem('area') === '') || (localStorage.getItem('area')==='Все')) {
            res = await fetch("http://localhost:8080/posts/getAllPosts/lost");
        }else{
            res = await fetch("http://localhost:8080/posts/getLostForArea/" + localStorage.getItem('area'));
        }
        const data = await res.json();
        setAns(data);
        //localStorage.setItem("posts", JSON.stringify(data));
    }

    useEffect(()=>{
        query();
    },[]);


    return (
        <>
            <div width="600px" height="auto">
                <PostRenderer data={ans}/>
            </div>
        </>
    )
}