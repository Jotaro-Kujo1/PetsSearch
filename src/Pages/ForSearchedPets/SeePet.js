import React, {useEffect, useState} from "react";
import {SearchedRender} from './SearchedRender';

export const SeePet = () => {
    const [ans, setAns] = useState([]);
    const[items,setItems] = useState([])


    const query = async () => {
        let res;
        if((localStorage.getItem('area') === '') || (localStorage.getItem('area')==='Все')) {
            res = await fetch("http://localhost:8080/posts/getAllPosts/searched");
        }else{
            res = await fetch("http://localhost:8080/posts/getSearchedForArea/" + localStorage.getItem('area'));
        }
        const data = await res.json();
        setAns(data);
        localStorage.setItem("postsSearched", JSON.stringify(data));
    }

    useEffect(()=>{
        query();
    },[]);


    return (
        <>
            <div width="600px" height="auto" >
                <SearchedRender/>
            </div>
        </>
    )
}