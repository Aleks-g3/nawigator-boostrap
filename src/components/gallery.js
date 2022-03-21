import React, { Component } from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import Images from './images';
import MyGallery from './myGallery';
import "./page.css"





export default class Gallery extends Component {
     state={
       tabs:[{key:'rooms',title:'Pokoje',photos:Images.ROOMS},
       {key:'hall',title:'Hol',photos:Images.HALL},
       {key:'kitchen',title:'Kuchnia',photos:Images.KITCHEN},
       {key:'surroundings',title:'Otoczenie',photos:Images.SURROUNDINGS}]
     }

    

  render() {
    
    return (
      <div>
        <Container>
          <Row className='justify-content-md-center'>
            <Col>
            <CustomTabs tabs={this.state.tabs}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const CustomTabs=(props)=>{
  debugger
  return(
    <Tabs defaultActiveKey="rooms" fill>
      {props.tabs.map(tab=>(
        <Tab eventKey={tab.key} title={tab.title}>
        <MyGallery  photos={tab.photos}/>
      </Tab>
      ))}
    </Tabs>
  )
}
