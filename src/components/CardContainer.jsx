import React from 'react'
import  Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import {data} from "../helpers/data"
import PlayerCard from "./PlayerCard"

const CardContainer = () => {
    // console.log(data)
    const showImage =true
   
  return (
    <Container className = "rounded-4 my-4 p-3 card-container">
         <Form.Control className ="w-50 m-auto"
          placeholder="Search a player.."
        />
        <Row className ="justify-content-center g-3">
            {data.map((data)=>(
                <Col xl={3} lg={4} md={6}>
                <PlayerCard {...data} showImage= {showImage}/>
                </Col>
              
            ))}
            
            
        </Row>
    </Container>
  )
}

export default CardContainer 