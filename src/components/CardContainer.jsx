import React from 'react'
import  Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import {data} from "../helpers/data"
import PlayerCard from "./PlayerCard"
import {useState} from 'react';

const CardContainer = () => {

    const[search, setSearch] = useState("");
    console.log(search)
    // console.log(data)
    // const showImage =false
   
  return (
    <>
     <Form.Control className ="w-50 m-auto"
          placeholder="Search a player.."
        //   onChange= {(e) => console.log(e.target.value)}
        onChange= {(e) => setSearch(e.target.value)}
        />
         <Container className = "rounded-4 my-4 p-3 card-container">
            <Row className ="justify-content-center g-3">
                {data.map((data)=>(
                    <Col xl={3} lg={4} md={6}>
                    {/* <PlayerCard {...data} showImage= {showImage}/> */}
                    <PlayerCard {...data} />
                    </Col>
                
                ))}
                
            </Row>
        </Container>
    </>
   
  )
}

export default CardContainer 