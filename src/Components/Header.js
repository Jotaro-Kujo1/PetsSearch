import React, {Component} from "react";
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import logo from './Vadim_koshak_chisto_pazhilaya_glotka_shorst.png'
import {BrowserRouter as Router, Route,Routes, Link} from "react-router-dom";
import Home from "../Pages/Home";
import SeePet from "../Pages/SeePet";
import About from "../Pages/About";
import Profile from "../Pages/Profile";
import MapPet from "../Pages/ForMap/MapPet";

export default class Header extends Component{
    render() {
        return (
            <>
            <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="30"
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
                    <Form>
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                        />
                    </Form>
                    <Button variant="outline-info">Search</Button>
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