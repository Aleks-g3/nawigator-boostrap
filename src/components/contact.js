import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Config from '../config/config'
import Map from './map'
import "./page.css"

export default class Contact extends Component {
  render() {

    return (
      <div>
          <Container>
              <ContactInfo contact={Config.CONTACT}/>
                      <Map info={Config.CONTACT}/>
          </Container>
      </div>
    )
  }
}

const ContactInfo =(props) =>{
  return(
    props.contact.map(contactInfo=>(
      <Row className="justify-content-md-center">
      <Col md={{span:4}}>
          <span>{contactInfo}</span>
      </Col>
  </Row>
  ))
  )
}
