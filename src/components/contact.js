import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Map from './map'
import "./page.css"

export default class Contact extends Component {
  state={
    data:["D.W. Nawigator","Nowa 70","80-105 Ostrowo","kom. 506-211-876"]
  }
  render() {

    return (
      <div>
          <Container>
              <ContactInfo data={this.state.data}/>
              <Map />
          </Container>
      </div>
    )
  }
}

const ContactInfo =(props) =>{
  return(
    props.data.map(d=>(
      <Row className="justify-content-md-center">
      <Col md={{span:3}}>
          <span>{d}</span>
      </Col>
  </Row>
  ))
  )
}
