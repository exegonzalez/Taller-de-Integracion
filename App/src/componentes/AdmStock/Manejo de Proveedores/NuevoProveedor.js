import React, {Component} from 'react'
import './NuevoProveedor.css'
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import swal from 'sweetalert';

const stateInicial={

    proveedor:{
        nombre:null,
        telefono:null,
        direccion:null,
        ciudad:null,
        email:null,
        cuit:null
    },
    error: false,
    redireccionar: false
}

class NuevoProveedor extends Component {
    state= {...stateInicial}

    handleChange =e =>{
    // coloco lo que el usuario escribe en el state
    this.setState({
        proveedor:{
            ...this.state.proveedor,
            [e.target.name] : e.target.value
        }
    })
    }

    // Cuando el usuario envia el formulario
    handleSubmit = e =>{
    e.preventDefault();

    // Extraer los valores del state
    const {nombre,direccion,email,cuit,ciudad,telefono} = this.state.proveedor

    // Verificar que los campos esten completos
    if (nombre === null || direccion === null || ciudad === null || email === null || cuit === null)
    {
        this.setState({

            error: true
        })

        // Detener la Ejecucion 
        return;
    }

    axios({
        "method" : "POST",
        "url": "http://localhost:5000/proveedor",
        "params": {
            "cuit": cuit,
            "nombre": nombre,
            "ciudad": ciudad,
            "direccion": direccion,
            "telefono": telefono,
            "email": email
        }
        
    }).then((response)=> {
        console.log(response);
        swal("Proveedor creado!", "Desea ver el listado actualizado?", "success", {
            buttons: {
                cancel: "Cancelar",
                catch: "Continuar"
            },
          })
          .then((value) => {
            switch (value) {
              case "cancel":
                break;          
              case "catch":
                this.setState({redireccionar: true})
                break;
            }
          });

      })
     .catch((error)=> {
        console.log(error);
        swal({
            title: "Ha ocurrido un error!",
            text: "Verifique que los datos ingresados sean correctos",
            icon: "error",
          });
     });

}

    render() {

        if(this.state.redireccionar){
            return (<Redirect to="/proveedor"/>)
        }

        const {error} = this.state;
        return (
        <div className="col-md-8 mx-auto">  
            <div className="prueba">  
                <h1 className="title text-center mb-5 text-primary">Agregar Proveedor</h1>
                    {error ? <div className="alert alert-danger mt-2 mb-5 
                    text-center">Todos los campos son obligatorios</div> : null}   
                    <div className="mover">   
                    <form className="mt-5" onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label text-primary">Cuit</label>
                            <input type="text"
                            class="form-control"
                            id="" 
                            maxlength="11"
                            placeholder="00-00000000-0"
                            name="cuit"
                            onChange={this.handleChange}
                            value={this.state.proveedor.cuit}
                            />
                        </div>

                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label text-primary">Email</label>
                            <input type="email" 
                                class="form-control"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                name="email"
                                maxlength="255"
                                onChange={this.handleChange}
                                value={this.state.proveedor.email}
                            />
                        </div>

                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label text-primary">Nombre</label>
                            <input type="text"
                            class="form-control"
                            id="" 
                            placeholder="Proveedor"
                            name="nombre"
                            maxlength="50"
                            onChange={this.handleChange}
                            value={this.state.proveedor.nombre}
                            />
                        </div>
                        
                        <div class="form-group">
                        <label className="col-sm-4 col-lg-2 col-form-label text-primary">Telefono</label>
                            <input type="text"
                            class="form-control"
                            id="" 
                            maxlength="15"
                            placeholder="telefono"
                            name="telefono"
                            onChange={this.handleChange}
                            value={this.state.proveedor.telefono}
                            />
                        </div>

                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label text-primary">Direccion</label>
                            <input type="text"
                            class="form-control" 
                            id="" 
                            maxlength="70"
                            placeholder="Direccion"
                            name="direccion"
                            onChange={this.handleChange}
                            value={this.state.proveedor.direccion}
                            />
                        </div>   

                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label text-primary">Ciudad</label>
                            <input type="text"
                            class="form-control"
                            id="" 
                            maxlength="70"
                            placeholder="Ciudad"
                            name="ciudad"
                            onChange={this.handleChange}
                            value={this.state.proveedor.ciudad}
                            />
                        </div>
                        <button type="submit" class="py-3 mt-2 btn btn-primary btn-block">Agregar</button>
                    </form>
                    </div>
                </div>
        </div>
        )
    }
}
export default NuevoProveedor;