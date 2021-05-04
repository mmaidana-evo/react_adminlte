import React,{useState} from "react";
import Form from 'react-bootstrap/Form';
import FormGroup from '../Components/Formulario/FormGroup';
import ButtonSpinner from '../Components/Formulario/ButtonSpinner';
import firebase from '../Config/Firebase';
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";

function Registro(){
    const [form, setForm] = useState({
        d_nombre:'',
        d_apellido:'',
        c_email:'',
        n_telefono:'',
        c_password:'',
        c_password_repit:''
    });
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    
    const {register, handleSubmit, watch, errors} = useForm();

    const handleChange = (e)=>{
        const target = e.target;
        const value = target.value
        const name = target.name;

        setForm({...form, [name]:value}); 
    }

    const onSubmit = (e)=>{
        // e.preventDefault(); //--> evita que se recargue la pagina, si lo dejo descomentadono no funciona

        setLoading(true);
        firebase.auth.createUserWithEmailAndPassword(form.c_email, form.c_password)
        .then((data)=>{
            console.log("Usuario creado",data.user.uid)
            firebase.db.collection("usuarios").add({
                d_nombre: form.d_nombre,
                d_apellido: form.d_apellido,
                c_email: form.c_email,
                n_telefono: form.n_telefono,
                id_authent: data.user.uid
            })
            .then((data)=>{
                setLoading(false);
                history.push("/login");
            })
            .catch((err)=>{
                console.log("Error add_collection: usuarios",err)
                setLoading(false);
            })
        })
        .catch((error)=>{
            console.log("Error createUser",error);
            alert(error.message);
            setLoading(false);
        })   
    }

    return(
        <>
        <legend><span className="balloon">!</span> Registro</legend>
        <main>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup name="d_nombre" label="Nombre" type="text" placeholder="Ingrese su Nombre" value={form.d_nombre} onchange={handleChange} ref={register({required: true})} errors={errors.d_nombre}/>
                <FormGroup name="d_apellido" label="Apellido" type="text" placeholder="Ingrese su Apellido" value={form.d_apellido} onchange={handleChange}/>
                <FormGroup name="c_email" label="Email" type="email" placeholder="Ingrese su Email" value={form.c_email} onchange={handleChange}/>
                <FormGroup name="n_telefono" label="Telefono" type="text" placeholder="Ingrese su Telefono" value={form.n_telefono} onchange={handleChange}/>
                <FormGroup name="c_password" label="Contraseña" type="password" placeholder="Ingrese su Contraseña" value={form.c_password} onchange={handleChange}/>
                <FormGroup name="c_password_repit" label="Confirmar Contraseña" type="password" placeholder="Ingrese su Contraseña" value={form.c_password_repit} onchange={handleChange}/>

                <ButtonSpinner text="Registrarse" loading={loading}/>
            </Form>
        </main>
        </>
    );
}

export default Registro;