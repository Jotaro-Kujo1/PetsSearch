import {useState} from "react";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import React from "react";
import Button from "@mui/material/Button";
import './style.css';

export default function User () {
    const[login,setLogin] = useState('');
    const[password,setPassword] = useState('');

    const handleClick = () => {
        const newUser = {login,password};
        console.log(newUser);
        fetch("http://localhost:8080/forUsers/user",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newUser)
        }
    ).then(()=>{
        console.log("New user added");
    })
    }

    return (
        <>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Login" variant="standard"
                       value={login}
                       onChange={e=>setLogin(e.target.value)}/>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Password" variant="standard"
                   value={password}
                   onChange={e=>setPassword(e.target.value)}/>
        </Box>
        <div className="startBtn">
            <Button variant="contained" onClick={handleClick}>Start</Button>
        </div>

        </>
    )
}