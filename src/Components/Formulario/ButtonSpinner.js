import React from "react";
import {Button,Spinner} from 'react-bootstrap';

function ButtonSpinner(props){
    const {variant, type, loading, text} = props; 
    return(
        <>
        <Button variant={variant||"primary"} type={type||"submit"} disabled={loading}>
            {loading && <Spinner animation="border" variant="light" size="sm"/>}
            {" "+ (text||"Boton")}
        </Button>
        </>
    )
}
export default ButtonSpinner;