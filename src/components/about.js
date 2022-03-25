import React, { Component } from 'react'
import "./page.css"
import trasa from "../images/trasa.png"
import { Col, Container, Figure, Row } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <div>
          <Container>
              <Row className="justify-content-md-center">
                  <Col md={{span:4}} >
          <span>Budynek jest położony 15 min od malowniczej plaży. Cicha lokalizacja i kolorowe tereny zachęcają również na spacer do lasu. Wieczorami, gdy dzieci bawią się na placu zabaw, nasza altanka zaprasza do biesiadnego wieczoru z przyjaciółmi.</span> 
          <p></p>
          <span>Dla osób lubiących spedzać aktywnie czas mamy do zaoferowania wiele trasa rowerowych.</span>
      </Col>
      </Row>
      <Row className="justify-content-md-center">
      <Figure>
      <Figure.Image
            width={600}
        src={trasa} />
      </Figure>
      </Row>
      </Container>
      </div>
    )
  }
}
