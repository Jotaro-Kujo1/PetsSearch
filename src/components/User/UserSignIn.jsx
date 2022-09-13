import {useContext, useState} from "react";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import React from "react";
import Button from "@mui/material/Button";
import './style.css';
import {Context} from './context'
import {Checkbox, FormControlLabel} from "@mui/material";



export default function UserSignIn () {
    const[login,setLogin] = useState('');
    const[password,setPassword] = useState('');
    const {state,setState} = useContext(Context);
    const[status,setStatus]=useState(0);



    const handleReload = () => {
        window.location.reload();
    }

    const handleClick = () => {
        const newUser = {login,password};
        console.log(newUser);
        setLogin(login);
        fetch("http://localhost:8080/forUsers/user/checkUser",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newUser)
        })
            .then((response) => {
            console.log("Status is" + response.status);
            setState(response.status);
            console.log(state);
            setStatus(response.status);
            sessionStorage.setItem('state',response.status);
            if(response.status >= 200 && response.status < 300) window.location.href = "Profile";
            }
        )
    }

    if(state == 404){
        return (
            <>
                <div className="textBoxs">
                <Box sx={{display: 'flex', alignItems: 'flex-end',}}>
                    <AccountCircle sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                <div>
                    <TextField
                        error
                        id="standard-error"
                        label="Invalid username"
                        variant="standard"
                    />
                    <TextField
                        error
                        id="standard-error"
                        label="or password"
                        variant="standard"
                    />
                </div>
                </Box>
        <div className="tryAgainBtn">
            <Button variant="contained" onClick={handleReload} data-bs-dismiss="modal">Try again</Button>
        </div>
                </div>
            </>
        )
    }else {
        localStorage.setItem('login',login);
        return (
            <>
                <div className="textBoxs">
                <Box sx={{display: 'flex', alignItems: 'flex-end',}}>
                    <AccountCircle sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                    <TextField id="input-with-sx" label="Login" variant="standard"
                               value={login}
                               onChange={e => setLogin(e.target.value)}/>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                    <AccountCircle sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                    <TextField id="input-with-sx" label="Password" variant="standard"
                               value={password}
                               onChange={e => setPassword(e.target.value)}/>
                </Box>
                <div className="startBtn">
                    <Button className="btnForSignIn" variant="contained" onClick={handleClick}>Start</Button>
                    <FormControlLabel className="keepSignIn" control={<Checkbox />} onClick={()=>{
                        localStorage.setItem('state',status);}
                    } label ="Keep me signed in" />
                </div>
                </div>
            </>
        )
    }
}

