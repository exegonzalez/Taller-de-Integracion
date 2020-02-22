import React, { useState } from 'react'
import swal from 'sweetalert'
import '../../AdmStock/Manejo de Productos/NuevoProducto.css'
import axios from 'axios'

function AdministrarUsuarios({usuario}){

    const [error, guardarError] = useState(false);

    const user = {
        apellido : '',
        ciudad : '',
        urlfoto : usuario[0].urlfoto,
        direccion : '',
        email : usuario[0].email,
        nombre : '',
        nombreuser : usuario[0].nombreuser,
        rol : usuario[0].rol,
        telefono : '',
        rolActual : ''
    }

    if(usuario[0].apellido!==null){
        user.apellido = usuario[0].apellido
    }

    if(usuario[0].nombre!==null){
        user.nombre = usuario[0].nombre
    }

    if(usuario[0].telefono!==null){
        user.telefono = usuario[0].telefono
    }

    if(usuario[0].direccion!==null){
        user.direccion = usuario[0].direccion
    }

    if(usuario[0].ciudad!==null){
        user.ciudad = usuario[0].ciudad
    }

    const leerValorRadio = e => {
        user.rol = e.target.value
    }

    switch (usuario[0].rol) {
        case 1:
            user.rolActual = 'ADMINISTRADOR GENERAL'
            break;
        case 2:
            user.rolActual = 'ADMINISTRADOR VENTAS'
            break;
        case 3:
            user.rolActual = 'ADMINISTRADOR STOCK'
            break;        
        case 4:
            user.rolActual = 'CLIENTE'
            break;    
    }

    const editarUsuario = e =>{
        e.preventDefault();

        axios({
            "method" : "PUT",
            "url": "http://localhost:5000/usuario",
            "params": {
                "nombre": user.nombre,
                "apellido": user.apellido,
                "telefono": user.telefono,
                "direccion": user.direccion,
                "ciudad": user.direccion,
                "nombreuser": user.nombreuser,
                "urlfoto": user.urlfoto,
                "email": user.email,
                "rol": user.rol
            }
            
        }).then((response)=> {
            swal({
              title: "Usuario editado!",
              icon: "success", 
              buttons: {
                  catch: "Continuar"
              },
            }).then((value) => {
                switch (value) {    
                  case "catch":
                    break;
                  default:
                    break;
                }
              });
    
          })
         .catch((error)=> {
            console.log(error);
            swal({
                title: "Ha ocurrido un error!",
                icon: "error",
              });
         });
    }

    return (
        <div className="col-md-8 mx-auto">  
        <div className="prueba">  
        <h1 className="title text-center mb-5 text-primary">Editar Usuario</h1>
                {error ? <div className="alert alert-danger mt-2 mb-5 
                text-center">Todos los campos son obligatorios</div> : null}      
                <div className="mover">   
                <form className="mt-5 need-validation" onSubmit={editarUsuario}>
                    <div class="form-group">
                        <label className="col-sm-4 col-lg-2 col-form-label text-primary">Email</label>
                        <input type="email"
                        class="form-control"
                        id="" 
                        name="email"
                        readOnly="readOnly"
                        defaultValue={usuario[0].email}
                        />
                    </div>

                    <div class="form-group">
                        <label className="col-sm-4 col-lg-2 col-form-label text-primary">Nombre Usuario</label>
                        <input type="text"
                                class="form-control"
                                id="" 
                                name="nombreuser"
                                maxlength="70"
                                readOnly="readOnly"
                                defaultValue={usuario[0].nombreuser}
                            />
                    </div>

                    <div class="form-group">
                        <label className="col-sm-4 col-lg-2 col-form-label text-primary">Apellido</label>
                        <input
                            type="text"
                            className="form-control"
                            name="apellido"
                            maxlength="70"
                            readOnly="readOnly"
                            defaultValue={usuario[0].apellido}
                        />
                    </div>
                    
                    <div class="form-group">
                        <label className="col-sm-4 col-lg-2 col-form-label text-primary">Nombre</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="nombre"
                            maxlength="70"
                            readOnly="readOnly"
                            defaultValue={usuario[0].nombre}
                        />
                    </div>

                    <div class="form-group">
                        <label className="col-sm-4 col-lg-2 col-form-label text-primary">Rol Actual</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="rolActual"
                            maxlength="70"
                            readOnly="readOnly"
                            defaultValue={user.rolActual}
                        />
                    </div>

                    <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label text-primary">Rol Nuevo:</label>
                            <div className="form-check form-check-inline">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="tipo"
                                    value="1"
                                    onChange={leerValorRadio}
                                />
                                <label className="form-check-label text-center">
                                    ADM.GENERAL 
                                </label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="tipo"
                                    value="2"
                                    onChange={leerValorRadio}
                                />
                                <label className="form-check-label text-center">
                                    ADM.VENTAS 
                                </label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="tipo"
                                    value="3"
                                    onChange={leerValorRadio}
                                />
                                <label className="form-check-label text-center">
                                    ADM.STOCK 
                                </label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="tipo"
                                    value="4"
                                    onChange={leerValorRadio}
                                />
                                <label className="form-check-label text-center">
                                    CLIENTE
                                </label>
                            </div>
                        </div>

                    <button type="submit" class="py-3 mt-2 btn btn-primary btn-block">Editar</button>
                </form>
                </div>
            </div>
    </div>
    )
}

export default AdministrarUsuarios;

