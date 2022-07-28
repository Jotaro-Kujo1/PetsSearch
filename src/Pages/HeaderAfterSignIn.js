import React, {Component} from "react";
import { Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import logo from '../components/Vadim_koshak_chisto_pazhilaya_glotka_shorst.png'
import {BrowserRouter as Router, Route,Routes, Link} from "react-router-dom";
import Home from "./Home";
import SeePet from "./SeePet";
import About from "./About";
import Profile from "./Profile";
import MapPet from "./ForMap/MapPet";
import {Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';



export default class HeaderAfterSignIn extends Component{
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


                        <Stack spacing={2} direction="row">
                            <Button variant="contained" data-toggle="modal">Profile</Button>
                        </Stack>
                    </Container>
                </Navbar>

            </>
        );
    }
}