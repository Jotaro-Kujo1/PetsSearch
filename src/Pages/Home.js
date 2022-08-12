import {Component} from "react";
import Button from "@mui/material/Button";
import React from "react";

export const Home = () => {
    var img = [];

    const loadHandler = () => {
        fetch("http://localhost:8080/posts/getAllPosts", {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        }).then(async (response) => {
            console.log(response.status);
            const reader = response.body.getReader();
            while (true) {
                const {done, value} = await reader.read();
                if (done) {
                    break;
                }
                img = value;
                console.log(img.length);
                console.log(img);

                //handler = btoa(String.fromCharCode.apply(null,new Uint8Array(value)));
                //console.log(handler);
            }
        })

    }
    return (
        <Button variant="contained" onClick={loadHandler}>Start</Button>
    )
}