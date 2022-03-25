import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../logo.jpg"
import main from "../Home-icon.svg.png"
import "./navbarComp.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from "react-router-bootstrap";


export default class NavbarComp extends Component {
    render(){
        return (
            <div>
                <header class="App-header"> 
                <img src={logo}  alt="logo" />
                </header>
                <Navbar expand="sm">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto" defaultActiveKey="/">
                            <LinkContainer to="/">
                                <Nav.Link><img src={main} alt="main"/></Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/o-nas">
                                <Nav.Link>O nas</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/galeria">
                                <Nav.Link>Galeria</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/kontakt">
                                <Nav.Link>Kontakt</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/atrakcje">
                                <Nav.Link>Atrakcje</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
            </Navbar>
            </div>
    )
    }
        
    
}
