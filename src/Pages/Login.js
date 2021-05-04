import React, {useState,useContext} from "react";
import Form from 'react-bootstrap/Form';
import FormGroup from '../Components/Formulario/FormGroup';
import ButtonSpinner from '../Components/Formulario/ButtonSpinner';
import firebase from '../Config/Firebase';
import {useHistory} from "react-router-dom";
import NetContext from "../Context/NetContext";

function Login(){
    const [form, setForm] = useState({
        c_email:'',
        c_password:''
    });
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const context = useContext(NetContext);
    
    const handleChange = (e)=>{
        const target = e.target;
        const value = target.value
        const name = target.name;

        setForm({...form, [name]:value}); 
    }

    const handleSubmit = (e)=>{
        e.preventDefault();     
        setLoading(true);    
        firebase.auth.signInWithEmailAndPassword(form.c_email, form.c_password)
        .then((data)=>{
            console.log("Usuario logueado",data);

            context.loginUser(form.c_email);
            setLoading(false);
            
            history.push("/")
        })
        .catch((error)=>{
            console.log("Error",error)
            setLoading(false);
        })   
    }

    return(
        <>
        <legend><span className="balloon">!</span> Login</legend>
        <main>
            <Form onSubmit={handleSubmit}>
                <FormGroup name="c_email" label="Email" type="email" placeholder="Ingrese su Email" value={form.d_nombre} onchange={handleChange}/>
                <FormGroup name="c_password" label="Contraseña" type="password" placeholder="Ingrese su Contraseña" value={form.d_nombre} onchange={handleChange}/>
                <ButtonSpinner text="Ingresar" loading={loading}/>
            </Form>
        </main>
        </>
    );
}

export default Login;