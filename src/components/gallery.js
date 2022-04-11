import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Config from '../config/config';
import { CustomTabs } from './customTabs';
import "./page.css"


export default class Gallery extends Component {
  render() {    
    return (
      <div>
        <Container>
          <Row className='justify-content-center'>
            <Col>
            <CustomTabs tabs={Config.TABS}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}


