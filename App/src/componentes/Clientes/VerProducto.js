//import React, { useState } from 'react'
import {Link, Redirect} from 'react-router-dom';
import './VerProductoEstilo.css'
import axios from 'axios'
import swal from 'sweetalert'
import coment from '../../images/Ventas/coment.png'
import cart from '../../images/Ventas/cart2.png'
import star from '../../images/Ventas/1estrellas.png'
import star2 from '../../images/Ventas/2estrellas.png'
import star3 from '../../images/Ventas/3estrellas.png'
import star4 from '../../images/Ventas/4estrellas.png'
import star5 from '../../images/Ventas/5estrellas.png'
import './EstilosParaCalificar.css'

import React, { Component } from 'react';

class VerProducto extends Component {
  
  state= {
    producto: [{}],
    redireccionar: false,
    valor: 1,
    calificacion: 5,
  }

  actualizarListado(){
    axios({
        "method" : "GET",
        "url": "http://localhost:5000/producto",
      })
      .then((Response) => {
      const listaproductos = Response.data
      const productoBuscado = listaproductos.filter(producto => producto.codigo === this.props.producto);
      this.setState({producto: productoBuscado})
    })
    .catch((error)=>{
       console.log(error);
      })
    }


    agregarAlCarrito= () =>{
      axios({
        "method" : "POST",
        "url": "http://localhost:5000/linea",
        "params": {
            "cantidadproducto": this.state.valor,
            "totalproducto": this.state.producto[0].precio * this.state.valor,
            "producto": this.state.producto[0].codigo,
            "combo": 'null',
            "carrito": this.props.carrito[0].carrito,
        }
        }).then((response)=> {
            console.log(response)
            swal({
              title: "Combo agregado al carrito!",
              text: "¿Desea ver su carrito?",
              icon: "success", 
              buttons: {
                  catch: "Ver carrito"
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

    Calificar = () =>{
          axios({
            "method" : "POST",
            "url": "http://localhost:5000/calificacion",
            "params": {
                "calificacion":this.state.calificacion,              
                "producto": this.state.producto[0].codigo,
                "usuario": this.props.usuario[0].email,
            }
            }).then((response)=> {
                console.log(response)
                swal({
                  title: "Calificacion exitosa!",
                  icon: "success", 
                  buttons: {
                      catch: "Continuar"
                  },
                    }).then((value) => {
                        switch (value) {    
                          case "catch":
                              window.location.reload()
                            break;
                          default:
                              window.location.reload()
                            break;
                        }
                  });
      
              })
              .catch((error)=> {
                console.log(error);
                swal({
                    title: "Ha ocurrido un problema",
                    text:  "Debe realizar una compra para calificar el producto. Solo se permite una calificacion por usuario",
                    icon: "error",
                  });
              });
            }
      
    obtenerValorCalificacion1 = () => {
          let pp = document.getElementById('boton1')
          parseInt(pp.value)
          return this.setState({calificacion: pp.value})
        } 
    
    obtenerValorCalificacion2 = () => {
          let pp = document.getElementById('boton2')
          parseInt(pp.value)
          return this.setState({calificacion: pp.value})
        } 

    obtenerValorCalificacion3 = () => {
          let pp = document.getElementById('boton3')
          parseInt(pp.value)
          return this.setState({calificacion: pp.value})
        } 
    
    obtenerValorCalificacion4 = () => {
          let pp = document.getElementById('boton4')
          parseInt(pp.value)
          return this.setState({calificacion: pp.value})
        } 
      
    obtenerValorCalificacion5 = () => {
          let pp = document.getElementById('boton5')
          parseInt(pp.value)
          return this.setState({calificacion: pp.value})
        } 

  componentDidMount(){
      this.actualizarListado()
  }


  render() {

    if(this.state.redireccionar){
      return (<Redirect to="/ver-carrito"/>)
    }

    switch (this.state.producto[0].calificacion) {
      case 1:
          return (
            <div class="container">  
                <div class="row">               
                  <div class="col-md-8">
                    <img class="img-fluid" src={this.state.producto[0].urlfoto} alt="" width="400" height="500"/>
                  </div>
  
                  <div class="col-md-4">
                    <h3 class="my-3">{this.state.producto[0].nombre}</h3>
                    <p>{this.state.producto[0].descripcion}</p>
  
                    <h3 class="my-3">Detalles</h3>
                    <ul>
                      <li>Precio : ${this.state.producto[0].precio} </li>
                      <li>Stock : {this.state.producto[0].stock} Unidades</li>
                    </ul>
  
                    <h3 class = "my-3" id="estrellas"> Calificacion :</h3>
                    <ul>        
                    <h4> <img src={star}/>  </h4>
  
                    <li>
                      
                      <button type="button" class="btn btn-info btn-sm " data-toggle="modal" data-target="#exampleModal">Calificar este producto</button>
                      
                      </li>
                      
                    </ul>
  
                    {/* ESTE ES EL MODAL QUE EJECUTA EL BOTON DE ARRIBA */}
  
                                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" id="exampleModalLabel">Elegir calificacion</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body" align="center">
  
                                  {/* botones de seleccion */}
                                  
                                          <button type="button" className="btn btn-danger btn-circle mr-3 " value="1" id="boton1" onClick={this.obtenerValorCalificacion1}><i>1</i>
                                          </button>
                                          <button type="button" className="btn btn-danger btn-circle mr-3 " value ="2" id="boton2" onClick={this.obtenerValorCalificacion2}><i>2</i>
                                          </button>
                                          <button type="button" className="btn btn-info btn-circle mr-3" value="3" id ="boton3" onClick={this.obtenerValorCalificacion3}><i>3</i>
                                          </button>
                                          <button type="button" className="btn btn-info btn-circle mr-3" value="4" id= "boton4" onClick={this.obtenerValorCalificacion4}><i>4</i>
                                          </button>
                                          <button type="button" className="btn btn-success btn-circle mr-3" value="5" id="boton5" onClick={this.obtenerValorCalificacion5}><i>5</i>
                                          </button>
                                    {/* ---------------------------------------------------- */}
  
  
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                  <button type="button" class="btn btn-primary" onClick={this.Calificar}>Calificar</button>
                                </div>
                              </div>
                            </div>
                          </div>
              {/* ACA TERMINA EL MODAL */}
  
  
                    <h6>Cantidad unidades :<input type="number" onChange={event => this.setState({valor: event.target.value})} name="quantity" defaultValue="1" min="1" max={this.state.producto[0].stock}/></h6>
                    
                    <button type="button" onClick={this.agregarAlCarrito} class="btn btn-success">Agregar al carrito <img src = {cart}/></button>
                    <h6> </h6>
  
                    <Link
                      to={`/ver-comentarios/${this.state.producto[0].codigo}`}
                      class="btn btn-warning">Ver comentarios <img src = {coment}/>
                    </Link>   
                  </div>
  
                </div>    
  
              </div>)
      case 2:
          return (
            <div class="container">  
                <div class="row">               
                  <div class="col-md-8">
                    <img class="img-fluid" src={this.state.producto[0].urlfoto} alt="" width="400" height="500"/>
                  </div>
  
                  <div class="col-md-4">
                    <h3 class="my-3">{this.state.producto[0].nombre}</h3>
                    <p>{this.state.producto[0].descripcion}</p>
  
                    <h3 class="my-3">Detalles</h3>
                    <ul>
                      <li>Precio : ${this.state.producto[0].precio} </li>
                      <li>Stock : {this.state.producto[0].stock} Unidades</li>
                    </ul>
  
                    <h3 class = "my-3" id="estrellas"> Calificacion :</h3>
                    <ul>        
                    <h4> <img src={star2}/>  </h4>
  
                    <li>
                      
                      <button type="button" class="btn btn-info btn-sm " data-toggle="modal" data-target="#exampleModal">Calificar este producto</button>
                      
                      </li>
                      
                    </ul>
  
                    {/* ESTE ES EL MODAL QUE EJECUTA EL BOTON DE ARRIBA */}
  
                                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" id="exampleModalLabel">Elegir calificacion</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body" align="center">
  
                                  {/* botones de seleccion */}
                                  
                                          <button type="button" className="btn btn-danger btn-circle mr-3 " value="1" id="boton1" onClick={this.obtenerValorCalificacion1}><i>1</i>
                                          </button>
                                          <button type="button" className="btn btn-danger btn-circle mr-3 " value ="2" id="boton2" onClick={this.obtenerValorCalificacion2}><i>2</i>
                                          </button>
                                          <button type="button" className="btn btn-info btn-circle mr-3" value="3" id ="boton3" onClick={this.obtenerValorCalificacion3}><i>3</i>
                                          </button>
                                          <button type="button" className="btn btn-info btn-circle mr-3" value="4" id= "boton4" onClick={this.obtenerValorCalificacion4}><i>4</i>
                                          </button>
                                          <button type="button" className="btn btn-success btn-circle mr-3" value="5" id="boton5" onClick={this.obtenerValorCalificacion5}><i>5</i>
                                          </button>
                                    {/* ---------------------------------------------------- */}
  
  
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                  <button type="button" class="btn btn-primary" onClick={this.Calificar}>Calificar</button>
                                </div>
                              </div>
                            </div>
                          </div>
              {/* ACA TERMINA EL MODAL */}
  
  
                    <h6>Cantidad unidades :<input type="number" onChange={event => this.setState({valor: event.target.value})} name="quantity" defaultValue="1" min="1" max={this.state.producto[0].stock}/></h6>
                    
                    <button type="button" onClick={this.agregarAlCarrito} class="btn btn-success">Agregar al carrito <img src = {cart}/></button>
                    <h6> </h6>
  
                    <Link
                      to={`/ver-comentarios/${this.state.producto[0].codigo}`}
                      class="btn btn-warning">Ver comentarios <img src = {coment}/>
                    </Link>   
                  </div>
  
                </div>    
  
              </div>)
      case 3:  
        return (
          <div class="container">  
              <div class="row">               
                <div class="col-md-8">
                  <img class="img-fluid" src={this.state.producto[0].urlfoto} alt="" width="400" height="500"/>
                </div>

                <div class="col-md-4">
                  <h3 class="my-3">{this.state.producto[0].nombre}</h3>
                  <p>{this.state.producto[0].descripcion}</p>

                  <h3 class="my-3">Detalles</h3>
                  <ul>
                    <li>Precio : ${this.state.producto[0].precio} </li>
                    <li>Stock : {this.state.producto[0].stock} Unidades</li>
                  </ul>

                  <h3 class = "my-3" id="estrellas"> Calificacion :</h3>
                  <ul>        
                  <h4> <img src={star3}/>  </h4>

                  <li>
                    
                    <button type="button" class="btn btn-info btn-sm " data-toggle="modal" data-target="#exampleModal">Calificar este producto</button>
                    
                    </li>
                    
                  </ul>

                  {/* ESTE ES EL MODAL QUE EJECUTA EL BOTON DE ARRIBA */}

                              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Elegir calificacion</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body" align="center">

                                {/* botones de seleccion */}
                                
                                        <button type="button" className="btn btn-danger btn-circle mr-3 " value="1" id="boton1" onClick={this.obtenerValorCalificacion1}><i>1</i>
                                        </button>
                                        <button type="button" className="btn btn-danger btn-circle mr-3 " value ="2" id="boton2" onClick={this.obtenerValorCalificacion2}><i>2</i>
                                        </button>
                                        <button type="button" className="btn btn-info btn-circle mr-3" value="3" id ="boton3" onClick={this.obtenerValorCalificacion3}><i>3</i>
                                        </button>
                                        <button type="button" className="btn btn-info btn-circle mr-3" value="4" id= "boton4" onClick={this.obtenerValorCalificacion4}><i>4</i>
                                        </button>
                                        <button type="button" className="btn btn-success btn-circle mr-3" value="5" id="boton5" onClick={this.obtenerValorCalificacion5}><i>5</i>
                                        </button>
                                  {/* ---------------------------------------------------- */}


                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                <button type="button" class="btn btn-primary" onClick={this.Calificar}>Calificar</button>
                              </div>
                            </div>
                          </div>
                        </div>
            {/* ACA TERMINA EL MODAL */}


                  <h6>Cantidad unidades :<input type="number" onChange={event => this.setState({valor: event.target.value})} name="quantity" defaultValue="1" min="1" max={this.state.producto[0].stock}/></h6>
                  
                  <button type="button" onClick={this.agregarAlCarrito} class="btn btn-success">Agregar al carrito <img src = {cart}/></button>
                  <h6> </h6>

                  <Link
                    to={`/ver-comentarios/${this.state.producto[0].codigo}`}
                    class="btn btn-warning">Ver comentarios <img src = {coment}/>
                  </Link>   
                </div>

              </div>    

            </div>)
    case 4:
        return (
          <div class="container">  
              <div class="row">               
                <div class="col-md-8">
                  <img class="img-fluid" src={this.state.producto[0].urlfoto} alt="" width="400" height="500"/>
                </div>

                <div class="col-md-4">
                  <h3 class="my-3">{this.state.producto[0].nombre}</h3>
                  <p>{this.state.producto[0].descripcion}</p>

                  <h3 class="my-3">Detalles</h3>
                  <ul>
                    <li>Precio : ${this.state.producto[0].precio} </li>
                    <li>Stock : {this.state.producto[0].stock} Unidades</li>
                  </ul>

                  <h3 class = "my-3" id="estrellas"> Calificacion :</h3>
                  <ul>        
                  <h4> <img src={star4}/>  </h4>

                  <li>
                    
                    <button type="button" class="btn btn-info btn-sm " data-toggle="modal" data-target="#exampleModal">Calificar este producto</button>
                    
                    </li>
                    
                  </ul>

                  {/* ESTE ES EL MODAL QUE EJECUTA EL BOTON DE ARRIBA */}

                              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Elegir calificacion</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body" align="center">

                                {/* botones de seleccion */}
                                
                                        <button type="button" className="btn btn-danger btn-circle mr-3 " value="1" id="boton1" onClick={this.obtenerValorCalificacion1}><i>1</i>
                                        </button>
                                        <button type="button" className="btn btn-danger btn-circle mr-3 " value ="2" id="boton2" onClick={this.obtenerValorCalificacion2}><i>2</i>
                                        </button>
                                        <button type="button" className="btn btn-info btn-circle mr-3" value="3" id ="boton3" onClick={this.obtenerValorCalificacion3}><i>3</i>
                                        </button>
                                        <button type="button" className="btn btn-info btn-circle mr-3" value="4" id= "boton4" onClick={this.obtenerValorCalificacion4}><i>4</i>
                                        </button>
                                        <button type="button" className="btn btn-success btn-circle mr-3" value="5" id="boton5" onClick={this.obtenerValorCalificacion5}><i>5</i>
                                        </button>
                                  {/* ---------------------------------------------------- */}


                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                <button type="button" class="btn btn-primary" onClick={this.Calificar}>Calificar</button>
                              </div>
                            </div>
                          </div>
                        </div>
            {/* ACA TERMINA EL MODAL */}


                  <h6>Cantidad unidades :<input type="number" onChange={event => this.setState({valor: event.target.value})} name="quantity" defaultValue="1" min="1" max={this.state.producto[0].stock}/></h6>
                  
                  <button type="button" onClick={this.agregarAlCarrito} class="btn btn-success">Agregar al carrito <img src = {cart}/></button>
                  <h6> </h6>

                  <Link
                    to={`/ver-comentarios/${this.state.producto[0].codigo}`}
                    class="btn btn-warning">Ver comentarios <img src = {coment}/>
                  </Link>   
                </div>

              </div>    

            </div>)
    case 5:
        return (
          <div class="container">  
              <div class="row">               
                <div class="col-md-8">
                  <img class="img-fluid" src={this.state.producto[0].urlfoto} alt="" width="400" height="500"/>
                </div>

                <div class="col-md-4">
                  <h3 class="my-3">{this.state.producto[0].nombre}</h3>
                  <p>{this.state.producto[0].descripcion}</p>

                  <h3 class="my-3">Detalles</h3>
                  <ul>
                    <li>Precio : ${this.state.producto[0].precio} </li>
                    <li>Stock : {this.state.producto[0].stock} Unidades</li>
                  </ul>

                  <h3 class = "my-3" id="estrellas"> Calificacion:</h3>
                  <ul>        
                  <h4> <img src={star5}/>  </h4>

                  <li>
                    
                    <button type="button" class="btn btn-info btn-sm " data-toggle="modal" data-target="#exampleModal">Calificar este producto</button>
                    
                    </li>
                    
                  </ul>

                  {/* ESTE ES EL MODAL QUE EJECUTA EL BOTON DE ARRIBA */}

                              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Elegir calificacion</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body" align="center">

                                {/* botones de seleccion */}
                                
                                        <button type="button" className="btn btn-danger btn-circle mr-3 " value="1" id="boton1" onClick={this.obtenerValorCalificacion1}><i>1</i>
                                        </button>
                                        <button type="button" className="btn btn-danger btn-circle mr-3 " value ="2" id="boton2" onClick={this.obtenerValorCalificacion2}><i>2</i>
                                        </button>
                                        <button type="button" className="btn btn-info btn-circle mr-3" value="3" id ="boton3" onClick={this.obtenerValorCalificacion3}><i>3</i>
                                        </button>
                                        <button type="button" className="btn btn-info btn-circle mr-3" value="4" id= "boton4" onClick={this.obtenerValorCalificacion4}><i>4</i>
                                        </button>
                                        <button type="button" className="btn btn-success btn-circle mr-3" value="5" id="boton5" onClick={this.obtenerValorCalificacion5}><i>5</i>
                                        </button>
                                  {/* ---------------------------------------------------- */}


                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                <button type="button" class="btn btn-primary" onClick={this.Calificar}>Calificar</button>
                              </div>
                            </div>
                          </div>
                        </div>
            {/* ACA TERMINA EL MODAL */}


                  <h6>Cantidad unidades :<input type="number" onChange={event => this.setState({valor: event.target.value})} name="quantity" defaultValue="1" min="1" max={this.state.producto[0].stock}/></h6>
                  
                  <button type="button" onClick={this.agregarAlCarrito} class="btn btn-success">Agregar al carrito <img src = {cart}/></button>
                  <h6> </h6>

                  <Link
                    to={`/ver-comentarios/${this.state.producto[0].codigo}`}
                    class="btn btn-warning">Ver comentarios <img src = {coment}/>
                  </Link>   
                </div>

              </div>    

            </div>)
    default:
        return (
          <div class="container">  
              <div class="row">               
                <div class="col-md-8">
                  <img class="img-fluid" src={this.state.producto[0].urlfoto} alt="" width="400" height="500"/>
                </div>

                <div class="col-md-4">
                  <h3 class="my-3">{this.state.producto[0].nombre}</h3>
                  <p>{this.state.producto[0].descripcion}</p>

                  <h3 class="my-3">Detalles</h3>
                  <ul>
                    <li>Precio : ${this.state.producto[0].precio} </li>
                    <li>Stock : {this.state.producto[0].stock} Unidades</li>
                  </ul>

                  <h3 class = "my-3" id="estrellas"> Calificacion :</h3>
                  <ul>        
                  <h4> <img src={star}/>  </h4>

                  <li>
                    
                    <button type="button" class="btn btn-info btn-sm " data-toggle="modal" data-target="#exampleModal">Calificar este producto</button>
                    
                    </li>
                    
                  </ul>

                  {/* ESTE ES EL MODAL QUE EJECUTA EL BOTON DE ARRIBA */}

                              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Elegir calificacion</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body" align="center">

                                {/* botones de seleccion */}
                                
                                        <button type="button" className="btn btn-danger btn-circle mr-3 " value="1" id="boton1" onClick={this.obtenerValorCalificacion1}><i>1</i>
                                        </button>
                                        <button type="button" className="btn btn-danger btn-circle mr-3 " value ="2" id="boton2" onClick={this.obtenerValorCalificacion2}><i>2</i>
                                        </button>
                                        <button type="button" className="btn btn-info btn-circle mr-3" value="3" id ="boton3" onClick={this.obtenerValorCalificacion3}><i>3</i>
                                        </button>
                                        <button type="button" className="btn btn-info btn-circle mr-3" value="4" id= "boton4" onClick={this.obtenerValorCalificacion4}><i>4</i>
                                        </button>
                                        <button type="button" className="btn btn-success btn-circle mr-3" value="5" id="boton5" onClick={this.obtenerValorCalificacion5}><i>5</i>
                                        </button>
                                  {/* ---------------------------------------------------- */}


                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                <button type="button" class="btn btn-primary" onClick={this.Calificar}>Calificar</button>
                              </div>
                            </div>
                          </div>
                        </div>
            {/* ACA TERMINA EL MODAL */}


                  <h6>Cantidad unidades :<input type="number" onChange={event => this.setState({valor: event.target.value})} name="quantity" defaultValue="1" min="1" max={this.state.producto[0].stock}/></h6>
                  
                  <button type="button" onClick={this.agregarAlCarrito} class="btn btn-success">Agregar al carrito <img src = {cart}/></button>
                  <h6> </h6>

                  <Link
                    to={`/ver-comentarios/${this.state.producto[0].codigo}`}
                    class="btn btn-warning">Ver comentarios <img src = {coment}/>
                  </Link>   
                </div>

              </div>    

            </div>)
  }}
}

export default VerProducto;

