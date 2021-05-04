import React from "react";
import {Form} from 'react-bootstrap';

function FormGroup(props){
    const {name, label, type, placeholder, value, onchange, error} = props; 
    // console.log(error);
    return(
        <>
        <Form.Group controlId={"formBasic"+name}>
            <Form.Label>{label}</Form.Label>
            <Form.Control name={name} type={type} placeholder={placeholder} value={value} onChange={onchange}/>
            {/* {errors[name] && <span>This field is required</span>} */}
        </Form.Group>
        </>
    );
}
export default FormGroup;