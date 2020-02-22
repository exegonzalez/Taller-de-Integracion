import React, {Component} from 'react'
import './NuevoCombo.css'
import axios from 'axios';
import swal from 'sweetalert';
import {Redirect} from 'react-router-dom'

class EditarCombo extends Component {
    state= {
        combos: [{}],
        error: false,
        redireccionar: false
    }

    actualizarListado(){
        axios({
            "method" : "GET",
            "url": "http://localhost:5000/combo",
          })
        .then((Response) => {
          const listacombos = Response.data
          const comboBuscado = listacombos.filter(combo => combo.codigo === this.props.codigoCombo);
          this.setState({combos: comboBuscado})
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
            this.state.combos[0].nombre = e.target.value
            break;
        case 'precio':
            this.state.combos[0].precio = e.target.value
            break; 
        case 'fechainicio':
            this.state.combos[0].fechainicio = e.target.value
            break;   
        case 'fechafinal':
            this.state.combos[0].fechafinal = e.target.value
            break;
        case 'descripcion':
            this.state.combos[0].descripcion = e.target.value
            break;
        case 'urlfoto':
            this.state.combos[0].urlfoto = e.target.value
            break;
        }      
    }

    // Cuando el usuario envia el formulario
    editarCombo = e =>{
    e.preventDefault();
    //Extraer los valores del state
    const {codigo,nombre,precio,fechainicio,fechafinal,descripcion,urlfoto} = this.state.combos[0]

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
        "method" : "PUT",
        "url": "http://localhost:5000/combo",
        "params": {
            "codigo": codigo,
            "nombre": nombre,
            "descripcion": descripcion,
            "fechainicio": fechainicio,
            "fechafinal": fechafinal,
            "precio": precio,
            "urlfoto": urlfoto
        }
        
    }).then((response)=> {
        swal({
          title: "Combo editado!",
          icon: "success", 
          buttons: {
              catch: "Continuar"
          },
        }).then((value) => {
            switch (value) {    
              case "catch":
                this.setState({redireccionar : true})
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
            return (<Redirect to="/combo"/>)
        }

        return (
            <div className="col-md-8 mx-auto">  
            <div className="prueba">  
            <h1 className="title text-center mb-5 text-primary">Editar Combo</h1>
                    {this.state.error ? <div className="alert alert-danger mt-2 mb-5 
                    text-center">Todos los campos son obligatorios</div> : null}      
                    <div className="mover">   
                    <form className="mt-5 need-validation" onSubmit={this.editarCombo}>
                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label text-primary">Codigo</label>
                            <input type="number"
                            min="0"
                            class="form-control"
                            id="" 
                            name="codigo"
                            readOnly="readOnly"
                            defaultValue={this.state.combos[0].codigo}
                            />
                        </div>

                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label text-primary">Nombre</label>
                            <input type="text"
                                    class="form-control"
                                    id="" 
                                    name="nombre"
                                    maxlength="70"
                                    onChange={this.cambiarDatos}
                                    defaultValue={this.state.combos[0].nombre}
                                />
                        </div>

                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label text-primary">Descripcion</label>
                            <textarea
                                type="text"
                                className="form-control"
                                name="descripcion"
                                maxlength="255"
                                onChange={this.cambiarDatos}
                                defaultValue={this.state.combos[0].descripcion}
                            />
                        </div>
                        
                        <div class="form-group">
                        <label className="col-sm-4 col-lg-2 col-form-label text-primary">Precio</label>
                            <input type="number"
                                class="form-control"
                                min="0"
                                id="" 
                                name="precio"
                                onChange={this.cambiarDatos}
                                defaultValue={this.state.combos[0].precio}
                            />
                        </div>

                        <div class="form-group">
                        <label className="col-sm-4 col-lg-2 col-form-label text-primary">Fecha inicio</label>
                            <input
                                type="date"
                                className="form-control"
                                name="fechainicio"
                                onChange={this.cambiarDatos}
                                defaultValue={this.state.combos[0].fechainicio}
                            />
                        </div>

                        <div class="form-group">
                        <label className="col-sm-4 col-lg-2 col-form-label text-primary">Fecha final</label>
                            <input
                                type="date"
                                className="form-control"
                                name="fechafinal"
                                onChange={this.cambiarDatos}
                                defaultValue={this.state.combos[0].fechafinal}
                            />
                        </div>

                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label text-primary">Url foto</label>
                            <input type="text"
                                class="form-control" 
                                id="" 
                                name="urlfoto"
                                onChange={this.cambiarDatos}
                                defaultValue={this.state.combos[0].urlfoto}
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
export default EditarCombo;