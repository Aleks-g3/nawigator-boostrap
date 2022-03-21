import React,{ Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link,BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import logo from "../logo.jpg"
import main from "../Home-icon.svg.png"
import "./navbarComp.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./about";
import Contact from "./contact";
import Atractions from "./atractions";
import Gallery from "./gallery";


export default class NavbarComp extends Component{
    render(){
        return (
            <Router>
                <div>
                    <header class="App-header"> 
                    <img src={logo}  alt="logo" />
                    </header>
                    <Navbar>
                        <Container>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="m-auto">
                                <Nav.Link as={Link} to={"/"}><img src={main} alt="main" className="home-img"/></Nav.Link>
                                <Nav.Link as={Link} to={"/o-nas"}>O nas</Nav.Link>
                                <Nav.Link as={Link} to={"/galeria"}>Galeria</Nav.Link>
                                <Nav.Link as={Link} to={"/kontakt"}>Kontakt</Nav.Link>
                                <Nav.Link as={Link} to={"/atrakcje"}>Atrakcje</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                </Navbar>
                </div>
               <div>
                   <Routes>
                       <Route path="/" element={<Home/>}/>
                       <Route path="/o-nas" element={<About/>} />
                       <Route path="/galeria" element={<Gallery/>}/>
                       <Route path="/kontakt" element={<Contact/>}/>
                       <Route path="/atrakcje" element={<Atractions/>}/>
                   </Routes>
               </div>
            </Router>
            
        )
    }
}