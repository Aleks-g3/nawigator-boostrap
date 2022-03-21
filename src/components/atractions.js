import React, { Component } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import "./page.css"
import Latarnia from "../images/latarnia.png"
import Motylarnia from "../images/motylarnia.jpg"
import OceanPark from "../images/ocean-park.png"
import ParkMiniatur from "../images/park-miniatur.png"
import Plaza from "../images/plaza.jpeg"
import Woda from "../images/woda.jpg"

export default class Atractions extends Component {
    state={
         data :[{image:Latarnia, title:"LATARNIA MORSKA W ROZERWIU",link:"http://www.tpnmm.pl/latarnie/rozewie"},{image:Motylarnia,title:"MOTYLARNIA W ROZEWIU",link:"https://motylarnia-rozewie.pl/"},{image:OceanPark,title:"OCEAN PARK WE WŁADYSŁAWOWIE",link:"http://www.oceanpark.pl/"},{image:Plaza,title:"PLAŻA",link:"https://www.rozewie.pl/atrakcje/plaza-w-rozewiu"},{image:ParkMiniatur,title:"PARK MINIATUR LATARNI MORSKICH I DOM DO GÓRY NOGAMI",link:"http://www.blizapark.pl/"},{image:Woda,title:"SPORTY WODNE",link:"http://www.blizapark.pl/"}]
    }
  render() {    
    return (
        <div>
        <Container>
          <Row className="justify-content-md-center">
            <CardsOfAtraction items={this.state.data}/>
        </Row>
        </Container>
        </div>
    )
  }
}

const CardsOfAtraction=(props)=>{
    return(
        props.items.map(item=>(
            <Col md={3}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={item.image}/>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Button href={item.link}>Dowiedz się więcej</Button>
            </Card.Body>
            </Card>
          </Col>
          ))
    )
}
