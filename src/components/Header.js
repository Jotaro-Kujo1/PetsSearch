import React, {useContext, useEffect, useState} from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import logo from './Vadim_koshak_chisto_pazhilaya_glotka_shorst.png'
import {BrowserRouter as Router, Route,Routes, Link} from "react-router-dom";
import Home from "../Pages/Home";
import SeePet from "../Pages/SeePet";
import About from "../Pages/About";
import MapPet from "../Pages/ForMap/MapPet";
import {Profile} from "../Pages/ForProfile/Profile"
import {Stack} from "@mui/material";
import {ModalProvider} from '../contexts';
import {Controls, Modal} from "../components";
import {ControlsSignIn} from "./Controls/ControlsSignIn";
import {ModalProviderSignIn} from "../contexts/ModalContext/ModalContextProviderSignIn";
import {ControlsProfile} from "./Controls/ControlsProfile";
import {Context} from './User/context'



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
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/map">Map</Nav.Link>
                                <Nav.Link href="/see">See your pet</Nav.Link>
                                <Nav.Link href="/about">About us</Nav.Link>
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
                        </Stack>
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/map" element={<MapPet/>}/>
                        <Route path="/see" element={<SeePet/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/profile" element={<Profile/>}/>
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
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/map">Map</Nav.Link>
                                <Nav.Link href="/see">See your pet</Nav.Link>
                                <Nav.Link href="/about">About us</Nav.Link>
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
                        <Route path="/map" element={<MapPet/>}/>
                        <Route path="/see" element={<SeePet/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </Router>
            </>
        );
    }
}