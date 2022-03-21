import React, { Component } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import PlacZabaw from "../images/plac-zabaw.jpeg"
import Kuchnia from "../images/kuchnia.jpg"
import Parking from "../images/parking.jpg"
import "./page.css"

export default class Home extends Component {
  state={
    data:[{image:PlacZabaw,title:"PLAC ZABAW",text:"Dla najmłodszych atrakcja zapewniona w formie kolorowego placu zabaw"},{image:Kuchnia,title:"WSPÓLNA KUCHNIA",text:"Dla gości dostępna jest w pełni wyposażona kuchnia do codziennego użytku"},{image:Parking,title:"PARKING",text:"Dla użytku gości posiadamy darmowy parking przy budynku."}]
  }
  render() {
    return (
      <div>
      <Container>
        <Row className="justify-content-md-center">
        <CardsOfHome items={this.state.data}/>
      </Row>
      </Container>
      </div>
    )
  }
}

const CardsOfHome=(props)=>{
  return(
    props.items.map(item=>(
      <Col md={3}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={item.image}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.text}</Card.Text>
      </Card.Body>
      </Card>
    </Col>
    )) 
  )
}
