import React, {Component} from 'react'
import './NuevoCombo.css'
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import swal from 'sweetalert';

const stateInicial={

    combo:{
        nombre:null,
        precio:null,
        fechainicio:null,
        fechafinal:null,
        descripcion:null,
        urlfoto:null
    },
    error: false,
    redireccionar: false
}

class NuevoCombo extends Component {
    state= {...stateInicial}

    handleChange =e =>{
    // coloco lo que el usuario escribe en el state
    this.setState({
        combo:{
            ...this.state.combo,
            [e.target.name] : e.target.value
        }
    })
    }

    // Cuando el usuario envia el formulario
    handleSubmit = e =>{
    e.preventDefault();

    // Extraer los valores del state
    const {nombre,precio,fechainicio,fechafinal,descripcion,urlfoto} = this.state.combo

    // Verificar que los campos esten completos
    if (nombre === null || precio === null || fechainicio === null || fechafinal === null || urlfoto === null)
    {
        this.setState({

            error: true
        })

        // Detener la Ejecucion 
        return;
    }
    axios({
        "method" : "POST",
        "url": "http://localhost:5000/combo",
        "params": {
            "nombre": nombre,
            "precio": precio,
            "fechainicio": fechainicio,
            "fechafinal": fechafinal,
            "descripcion": descripcion,
            "urlfoto": urlfoto
        }
        
    }).then((response)=> {
        console.log(response);
        swal("Combo creado!", "Desea ver el listado actualizado?", "success", {
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
            return (<Redirect to="/"/>)
        }

        const {error} = this.state;
        return (
        <div className="col-md-8 mx-auto">  
            <div className="prueba">  
                <h1 className="title text-center mb-5 text-primary">Agregar Combo</h1>
                    {error ? <div className="alert alert-danger mt-2 mb-5 
                    text-center">Todos los campos son obligatorios</div> : null}   
                    <div className="mover">   
                    <form className="mt-5" onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label text-primary">Nombre</label>
                            <input type="text"
                            class="form-control"
                            id="" 
                            // maxlength="70"
                            placeholder="Nombre"
                            name="nombre"
                            onChange={this.handleChange}
                            value={this.state.combo.nombre}
                            />
                        </div>

                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label text-primary">Precio</label>
                            <input type="number"
                                class="form-control"
                                min="0"
                                id="" 
                                placeholder="0.00"
                                name="precio"
                                onChange={this.handleChange}
                                value={this.state.combo.precio}
                            />
                        </div>

                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label text-primary">Fecha inicio</label>
                            <input
                                type="date"
                                className="form-control"
                                name="fechainicio"
                                onChange={this.handleChange}
                                value={this.state.combo.fechainicio}
                            />
                        </div>
                        
                        <div class="form-group">
                        <label className="col-sm-4 col-lg-2 col-form-label text-primary">Fecha final</label>
                            <input
                                type="date"
                                className="form-control"
                                name="fechafinal"
                                onChange={this.handleChange}
                                value={this.state.combo.fechafinal}
                            />
                        </div>

                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label text-primary">Descripcion</label>
                            <textarea
                                type="text"
                                className="form-control"
                                placeholder="Descripcion"
                                name="descripcion"
                                maxlength="255"
                                onChange={this.handleChange}
                                value={this.state.combo.descripcion}
                            />
                        </div>

                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label text-primary">Url foto</label>
                            <input type="text"
                                class="form-control" 
                                id="" 
                                name="urlfoto"
                                onChange={this.handleChange}
                                value={this.state.combo.urlfoto}
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
export default NuevoCombo;