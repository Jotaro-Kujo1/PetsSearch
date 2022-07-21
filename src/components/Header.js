import React, {Component} from "react";
import { Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import logo from './Vadim_koshak_chisto_pazhilaya_glotka_shorst.png'
import {BrowserRouter as Router, Route,Routes, Link} from "react-router-dom";
import Home from "../Pages/Home";
import SeePet from "../Pages/SeePet";
import About from "../Pages/About";
import Profile from "../Pages/Profile";
import MapPet from "../Pages/ForMap/MapPet";
import {Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import {ModalProvider} from '../contexts';
import {Controls, Modal} from "../components";


export default class Header extends Component{
    render() {
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
                            <Nav.Link href="/profile">Profile</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Router>
                        <Routes>
                            <Route path="/singIn" component="signInButton"/>
                            <Route path="/singIn" component="signInButton"/>
                        </Routes>
                    </Router>

                    <ModalProvider>
                        <Controls/>
                    </ModalProvider>


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
    }
}