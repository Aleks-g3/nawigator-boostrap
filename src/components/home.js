import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import Config from '../config/config'
import { HomeCards } from './homeCards'

import "./page.css"

export default class Home extends Component {
  render() {
    debugger
    console.log(Config.ATRACTIONS) 
    return (
      <div>
      <Container>
        <Row className="justify-content-md-center">
        <HomeCards cards={Config.CARDS}/>
      </Row>
      </Container>
      </div>
    )
  }
}


