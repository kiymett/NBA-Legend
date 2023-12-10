import React from 'react'
import Form from 'react-bootstrap/Form'

const FormComp = ({handleChange}) =>{

    return(
        <>
        <Form.Control className ="w-50 m-auto"
        placeholder="Search a player.."
        //   onChange= {(e) => console.log(e.target.value)}
        onChange= {handleChange}
        type="search"
        />
        </>
    )

}

export default FormComp