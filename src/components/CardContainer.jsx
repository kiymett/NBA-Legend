import React from 'react'
import  Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import {data} from "../helpers/data"
import PlayerCard from "./PlayerCard"
import FormComp from "./FormComp"
import {useState} from 'react';

const CardContainer = () => {

    const[search, setSearch] = useState("");
        console.log(search)
    // console.log(data)
    // const showImage =false
    const handleChange = (e) => {setSearch(e.target.value)
    }
   ///**console.log(search, outside )*/

   const filteredData = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase().trim()));

  return (
    <>  
        <FormComp handleChange ={handleChange} />
        <Container className = "rounded-4 my-4 p-3 card-container">
            <Row className ="justify-content-center g-3">
                {filteredData.map((data)=>(
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