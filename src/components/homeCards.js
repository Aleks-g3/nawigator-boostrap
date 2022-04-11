import { Card, Col } from "react-bootstrap"

export const HomeCards =(props)=>{
    return(
      props.cards.map(card=>(
        <Col md={3}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={card.image}/>
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
        </Card>
      </Col>
      )) 
    )
  }