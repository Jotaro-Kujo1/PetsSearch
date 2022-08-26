import React, {useContext, useEffect, useState} from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import logo from './Vadim_koshak_chisto_pazhilaya_glotka_shorst.png'
import {BrowserRouter as Router, Route,Routes, Link} from "react-router-dom";
import {Home} from "../Pages/ForPosts/Home";
import {SeePet} from "../Pages/ForSearchedPets/SeePet";
import MapPet from "../Pages/ForMap/MapPet";
import {Profile} from "../Pages/ForProfile/Profile"
import {Stack} from "@mui/material";
import {ModalProvider} from '../contexts';
import {Controls, Modal} from "../components";
import {ControlsSignIn} from "./Controls/ControlsSignIn";
import {ModalProviderSignIn} from "../contexts/ModalContext/ModalContextProviderSignIn";
import {ControlsProfile} from "./Controls/ControlsProfile";
import {Context} from './User/context'
import {ControlsNewPost} from "./Controls/ControlsNewPost";
import {Post} from "../Pages/ForPosts/Post";
import ChatRoom from "../Pages/ChatRoom";
import {AreaDropDown} from "../Pages/ForPosts/AreaDropDown";
import {AnotherProfile} from "../Pages/ForAnothersUsersProfile/AnotherProfile";





export const Header = () =>{

    const {state,setState} = useContext(Context);
    const local = localStorage.getItem('state');
    const session = sessionStorage.getItem('state');



    if((local!= null || session!=null) && local!= 404 && session!=404){
        return (
            <>
                <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="40"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Lost</Nav.Link>
                                <Nav.Link href="/see">Searched</Nav.Link>
                                <Nav.Link href="/map">Map</Nav.Link>
                                <Nav.Link href="/messenger">Messenger</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Router>
                            <Routes>
                                <Route path="/singIn" component="signInButton"/>
                                <Route path="/singIn" component="signInButton"/>
                            </Routes>
                        </Router>

                        <Stack spacing={3} direction="row">
                            <ControlsProfile/>
                            <ControlsNewPost/>
                            <AreaDropDown/>
                        </Stack>
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/see" element={<SeePet/>}/>
                        <Route path="/map" element={<MapPet/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/messenger" element={<ChatRoom/>}/>
                        <Route path="/posts" element={<Post/>}/>
                        <Route path="/another" element={<AnotherProfile/>}/>
                    </Routes>
                </Router>
            </>
        );
        sessionStorage.clear();
    }
    else {
        return (
            <>
                <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container >
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="40"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Lost</Nav.Link>
                                <Nav.Link href="/see">Searched</Nav.Link>
                                <Nav.Link href="/map">Map</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Router>
                            <Routes>
                                <Route path="/singIn" component="signInButton"/>
                                <Route path="/singIn" component="signInButton"/>
                            </Routes>
                        </Router>

                        <Stack spacing={3} direction="row">
                            <ModalProvider>
                                <Controls />
                            </ModalProvider>

                            <ModalProviderSignIn>
                                <ControlsSignIn />
                            </ModalProviderSignIn>
                        </Stack>
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/see" element={<SeePet/>}/>
                        <Route path="/map" element={<MapPet/>}/>
                    </Routes>
                </Router>
            </>
        );
    }
}