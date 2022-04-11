import React, { Component } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Config from '../config/config'
import { openLink } from '../functions/newTab'
import "./page.css"


export default class Atractions extends Component {
  render() {
    return (
        <div className='atractions'>
        <Container>
          <Row className="justify-content-center">
            <CardsOfAtraction atractions={Config.ATRACTIONS}/>
        </Row>
        </Container>
        </div>
    )
  }
}



const CardsOfAtraction=(props)=>{
    return(
        props.atractions.map(atraction=>(
            <Col md={3}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={atraction.image}/>
            <Card.Body>
              <Card.Title>{atraction.title}</Card.Title>
              <Button onClick={() => openLink(atraction.link)}>Dowiedz się więcej</Button>
            </Card.Body>
            </Card>
          </Col>
          ))
    )
}
