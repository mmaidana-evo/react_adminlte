import React, {useState, useEffect} from 'react';
import firebase from '../Config/Firebase';
import Form from 'react-bootstrap/Form';
import FormGroup from '../Components/Formulario/FormGroup';
import ButtonSpinner from '../Components/Formulario/ButtonSpinner';
import Spinner from 'react-bootstrap/Spinner';
import {useHistory} from "react-router-dom";

function ProductoEditar(props){
    const [datos,setDatos] = useState({name:'',description:'',price:''});
    const [loading,setLoading] = useState(true);
    const history = useHistory();
    
    useEffect(
        () => {
            const id = props.match.params.id;
            firebase.db.doc("productos/"+id)
            .get()
            .then(data=>{
                setDatos(data.data());
                setLoading(false);
            })
    }, []); 

    const handleChange = (e)=>{
        const target = e.target;
        const value = target.value
        const name = target.name;

        setDatos({...datos, [name]:value}); 
    }

    const handleSubmit =  (e)=>{
        e.preventDefault();
        setLoading(true);    
        const id = props.match.params.id;
        firebase.db.doc("productos/"+id)
        .set({
            name:datos.name,
            description:datos.description,
            price:datos.price
        },{merge:true})
        .then(doc=>{
            // console.log(doc);
            setLoading(false);  
            history.push("/productos/"+id);  
        })
    }

    if(loading){
        return(
            <div style={{textAlign:"center"}}>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        )
    }else{     
        return(
            <>        
            <legend><span className="balloon">!</span> Edicion de Producto</legend>
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
}

export default ProductoEditar