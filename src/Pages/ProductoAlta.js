import React, {useState, useEffect} from 'react';
import firebase from '../Config/Firebase';
import Form from 'react-bootstrap/Form';
import FormGroup from '../Components/Formulario/FormGroup';
import ButtonSpinner from '../Components/Formulario/ButtonSpinner';
import {useHistory} from "react-router-dom";

function ProductoAlta(){
    const [datos,setDatos] = useState({name:'',description:'',price:''});
    const [loading,setLoading] = useState(false);
    const history = useHistory();

    const handleChange = (e)=>{
        const target = e.target;
        const value = target.value
        const name = target.name;

        setDatos({...datos, [name]:value}); 
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        setLoading(true);    
        firebase.db.collection('productos').add(datos)
        .then(doc=>{
            // console.log(doc);
            setLoading(false);
            history.push("/");  
        });        
    }

    return(
        <>        
        <legend><span className="balloon">!</span> Alta de Producto</legend>
        <main>
            <Form onSubmit={handleSubmit}>
                <FormGroup name="name" label="Nombre" type="text" placeholder="Nombre" value={datos.name} onchange={handleChange}/>
                <FormGroup name="description" label="Descripcion" type="text" placeholder="Descripcion" value={datos.description} onchange={handleChange}/>
                <FormGroup name="price" label="Precio" type="number" placeholder="Precio" value={datos.price} onchange={handleChange}/>
                <ButtonSpinner text="Guardar" loading={loading}/>
            </Form>
        </main>
        </>
    )
}

export default ProductoAlta