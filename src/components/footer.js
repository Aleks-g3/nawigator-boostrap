import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Config from '../config/config'
import { SocialButtons } from './socialButtons'

export default class Footer extends Component {
  render() {
    return (
      <div>
          <Navbar fixed='boottom'>
              <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className='m-auto'>
                                <SocialButtons socials={Config.SOCIALS}/>
                            </Nav>
                        </Navbar.Collapse>
              </Container>
          </Navbar>
    </div>
    )
  }
}
