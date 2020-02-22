import React, {Component} from 'react'
import './NuevoProducto.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import swal from 'sweetalert';

const stateInicial={

    producto:{
        nombre:null,
        descripcion:null,
        precio:null,
        stock:null,
        proveedor:null,
        tipo:null,
        stockmin:null,
        urlfoto:null
    },
    error: false,
    redireccionar: false
}

class NuevoProducto extends Component {
    state= {...stateInicial}

    handleChange =e =>{
    // coloco lo que el usuario escribe en el state
    this.setState({
        producto:{
            ...this.state.producto,
            [e.target.name] : e.target.value
        }
    })
    }

    leerValorRadio = e => {
        this.state.producto.tipo = e.target.value
    }

    // Cuando el usuario envia el formulario
    handleSubmit = e =>{
    e.preventDefault();

    // Extraer los valores del state
    const {nombre,descripcion,precio,stock,proveedor,tipo,stockmin,urlfoto} = this.state.producto

        // Verificar que los campos esten completos
        if (nombre === null || descripcion === null || precio === null || stock === null || proveedor === null || tipo === null || stockmin === null || urlfoto === null)
        {
            this.setState({
                error: true
            })

            // Detener la Ejecucion 
            return;
        }
        
        axios({
            "method" : "POST",
            "url": "http://localhost:5000/producto",
            "params": {
                "descripcion": descripcion,
                "nombre": nombre,
                "precio": precio,
                "proveedor": proveedor,
                "stock": stock,
                "stockmin": stockmin,
                "tipo": tipo,
                "urlfoto": urlfoto
            }
            
        }).then((response)=> {
            console.log(response);
            swal("Producto creado!", "Desea ver el listado actualizado?", "success", {
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
            return (<Redirect to="/producto"/>)
        }
      
        const {error} = this.state;
        return (
            <div className="col-md-8 mx-auto">  
            <div className="prueba">  
                <h1 className="title text-center mb-5 text-primary">Agregar Producto</h1>
                    {error ? <div className="alert alert-danger mt-2 mb-5 
                    text-center">Todos los campos son obligatorios</div> : null}   
                    <div className="mover">   
                    <form className="mt-5" onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label text-primary">Nombre</label>
                            <input type="text"
                                class="form-control"
                                id="" 
                                placeholder="Nombre"
                                name="nombre"
                                maxlength="70"
                                onChange={this.handleChange}
                                value={this.state.producto.nombre}
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
                                value={this.state.producto.descripcion}
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
                                value={this.state.producto.precio}
                            />
                        </div>
                        
                        <div class="form-group">
                        <label className="col-sm-4 col-lg-2 col-form-label text-primary">Stock</label>
                        <input type="number"
                            class="form-control"
                            id=""
                            min="0" 
                            placeholder="0"
                            name="stock"
                            onChange={this.handleChange}
                            value={this.state.producto.stock}
                         />
                        </div>

                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label text-primary">Cuit Proveedor</label>
                            <input type="text"
                                class="form-control" 
                                id="" 
                                placeholder="00000000000"
                                name="proveedor"
                                maxlength="11"
                                onChange={this.handleChange}
                                value={this.state.producto.proveedor}
                            />
                        </div>   

                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label text-primary">Tipo:</label>
                            <div className="form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="tipo"
                                value="1"
                                onChange={this.leerValorRadio}
                            />
                            <label className="form-check-label">
                                Mate
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="tipo"
                                value="2"
                                onChange={this.leerValorRadio}
                            />
                            <label className="form-check-label">
                                Termo
                            </label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="tipo"
                                value="3"
                                onChange={this.leerValorRadio}
                            />
                            <label className="form-check-label">
                                Bombilla
                            </label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="tipo"
                                value="4"
                                onChange={this.leerValorRadio}
                            />
                            <label className="form-check-label">
                                Portatermo
                            </label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="tipo"
                                value="5"
                                onChange={this.leerValorRadio}
                            />
                            <label className="form-check-label">
                                Yerba
                            </label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="tipo"
                                value="6"
                                onChange={this.leerValorRadio}
                            />
                            <label className="form-check-label">
                                Otro
                            </label>
                        </div>

                        </div>

                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label text-primary">Stock Minimo</label>
                            <input type="number"
                                class="form-control"
                                id="" 
                                min="0"
                                placeholder="0"
                                name="stockmin"
                                onChange={this.handleChange}
                                value={this.state.producto.stockmin}
                            />
                        </div>

                        <div class="form-group">
                            <label className="col-sm-4 col-lg-2 col-form-label text-primary">Url foto</label>
                            <input type="text"
                                class="form-control" 
                                id="" 
                                name="urlfoto"
                                onChange={this.handleChange}
                                value={this.state.producto.urlfoto}
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
export default NuevoProducto;
