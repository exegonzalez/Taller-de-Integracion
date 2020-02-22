import React, {Component} from 'react'
import './NuevoProveedor.css'
import axios from 'axios';
import swal from 'sweetalert';
import {Redirect} from 'react-router-dom'

class EditarProveedor extends Component {
    state= {
        proveedores: [{}],
        error: false,
        redireccionar: false
    }

    actualizarListado(){
        axios({
          "method" : "GET",
          "url": "http://localhost:5000/proveedor",
        })
        .then((Response) => {
          const listaproveedores = Response.data
          const proveedorBuscado = listaproveedores.filter(proveedor => proveedor.cuit === this.props.cuitProveedor);
          this.setState({proveedores: proveedorBuscado})
        })
        .catch((error)=>{
           console.log(error);
          })
        }
      

    componentDidMount(){
        this.actualizarListado()
    
    }

    cambiarDatos =e =>{
    // coloco lo que el usuario escribe en el state
    
    switch(e.target.name){
        case 'nombre':
            this.state.proveedores[0].nombre = e.target.value
            break;
        case 'email':
            this.state.proveedores[0].email = e.target.value
            break; 
        case 'ciudad':
            this.state.proveedores[0].ciudad = e.target.value
            break;   
        case 'telefono':
            this.state.proveedores[0].telefono = e.target.value
            break;
        case 'direccion':
            this.state.proveedores[0].direccion = e.target.value
            break;
    } 
    }

    // Cuando el usuario envia el formulario
    editarProveedor = e =>{
    e.preventDefault();
    //Extraer los valores del state
    const {nombre,direccion,email,cuit,ciudad,telefono} = this.state.proveedores[0]

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
        "method" : "PUT",
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
        swal({
          title: "Proveedor editado!",
          icon: "success", 
          buttons: {
              catch: "Continuar"
          },
        }).then((value) => {
            switch (value) {    
              case "catch":
                    this.setState({redireccionar: true})
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

    render() {

        if(this.state.redireccionar){
            return (<Redirect to="/proveedor"/>)
        }

        return (
            <div className="col-md-8 mx-auto">  
            <div className="prueba">  
            <h1 className="title text-center mb-5 text-primary">Editar Proveedor</h1>
                    {this.state.error ? <div className="alert alert-danger mt-2 mb-5 
                    text-center">Todos los campos son obligatorios</div> : null}      
                    <div className="mover">   
                    <form className="mt-5 need-validation" onSubmit={this.editarProveedor}>
                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label text-primary">Cuit</label>
                            <input type="text"
                            maxlength="11"
                            class="form-control"
                            id="" 
                            placeholder="00-00000000-0"
                            name="cuit"
                            readOnly="readOnly"
                            defaultValue={this.state.proveedores[0].cuit}
                            />
                        </div>
    
                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label text-primary">Email</label>
                            <input type="email"
                                maxlength="255" 
                                class="form-control"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                name="email"
                                onChange={this.cambiarDatos}
                                defaultValue={this.state.proveedores[0].email}
                            />
                        </div>
    
                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label text-primary">Nombre</label>
                            <input type="text"
                            maxlength="50"
                            class="form-control"
                            id="" 
                            placeholder="Proveedor"
                            name="nombre"
                            onChange={this.cambiarDatos}
                            defaultValue={this.state.proveedores[0].nombre}
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
                            onChange={this.cambiarDatos}
                            defaultValue={this.state.proveedores[0].telefono}
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
                            onChange={this.cambiarDatos}
                            defaultValue={this.state.proveedores[0].direccion}
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
                            onChange={this.cambiarDatos}
                            defaultValue={this.state.proveedores[0].ciudad}
                            />
                        </div>
                        <button type="submit" class="py-3 mt-2 btn btn-primary btn-block">Editar</button>
                    </form>
                    </div>
                </div>
        </div>
        )
    }
}
export default EditarProveedor;