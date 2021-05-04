import React from "react";
import OptionMenu from "./OptionsMenu";
import {Navbar,Nav} from 'react-bootstrap';
import NetContext from "../../Context/NetContext";

function Menu(props){
    return(
        <>
        <NetContext.Consumer>
            {
                context=>
                    <>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">TP03</Navbar.Brand>
                        <Nav className="mr-auto">
                            {
                                context.userlogin &&
                                    <>
                                    <Nav.Link onClick={context.logoutUser}>Salir</Nav.Link>
                                    </>
                            }
                            {props.data.map(opcion=><OptionMenu key={opcion.path} opcion={opcion}/>)}
                        </Nav>
                    </Navbar>
                    </>  
            }
        </NetContext.Consumer>
        </>        
    )
}

export default Menu;