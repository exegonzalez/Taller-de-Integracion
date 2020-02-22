import CardProduDosEstilo from './CardProduDosEstilo.css'
import React, { Component } from 'react'
import swal from 'sweetalert';
import {Redirect} from 'react-router-dom'
import axios from 'axios'

class CardProduDos extends Component {
  
  state = {
    verProducto: false,
    verCarrito: false,
    noLogeado: false,
  }

  verPantallaProducto = () => {
    if(Object.keys(this.props.usuario[0]).length !== 0){
      this.setState({verProducto : true})
    } else {
      swal({
        title: "Debe logearse para ver los productos",
        text: "Inicie sesion con alguna red social",
        icon: "warning",
      }).then((value) => {  
        this.setState({noLogeado : true})
        }
      );
    }
  }
  
  agregarCarrito = () => {
    if(Object.keys(this.props.usuario[0]).length !== 0){
      axios({
        "method" : "POST",
        "url": "http://localhost:5000/linea",
        "params": {
            "cantidadproducto": 1,
            "totalproducto": this.props.producto.precio,
            "producto": this.props.producto.codigo,
            "combo": 'null',
            "carrito": this.props.carrito[0].carrito,
        }
        }).then((response)=> {
            console.log(response)
            swal({
              title: "Producto agregado al carrito!",
              text: "¿Desea ver su carrito?",
              icon: "success", 
              buttons: {
                  catch: "Ver carrito"
              },
                }).then((value) => {
                    switch (value) {    
                      case "catch":
                        this.setState({verCarrito: true})
                        break;
                      default:
                        break;
                    }
              });
  
          })
          .catch((error)=> {
            console.log(error);
            swal({
              title: "No se pudo agregar el producto al carrito",
              text: "No hay stock disponible del producto actualmente",
              icon: "error",
            });
          });

    } else {
      swal({
        title: "Debe logearse para agregar productos al carrito",
        text: "Inicie sesion con alguna red social",
        icon: "warning",
      }).then((value) => {  
        this.setState({noLogeado : true})
        }
      );
    }
  }

  render() {
    
    if(this.state.verProducto){
      return (<Redirect to={`/ver-producto/${this.props.producto.codigo}`}/>)
    }

    if(this.state.noLogeado){
      return (<Redirect to="/login"/>)
    }

    if(this.state.verCarrito){
      return (<Redirect to="/ver-carrito"/>)
    }

    return (
      <div>        
        <div class="container page-wrapper">
          <div class="page-inner">
            <div class="row">
              <div class="el-wrapper">
                <div class="box-up">
                <img class="img" src={this.props.producto.urlfoto} alt="" width="200" height="200"/>
                  {/* <img class="img" src="https://http2.mlstatic.com/mate-tipo-camionero-cuero-con-bombilla-pico-de-loro-D_NQ_NP_783229-MLA30185992544_042019-Q.jpg" alt=""/> */}
                  <div class="img-info">
                    <div class="info-inner">
                      <span class="p-name">{this.props.producto.nombre}</span>
                      
                    </div>
                    <div class="a-size">
                      <button onClick={this.verPantallaProducto} className="btn btn-secondary"
                      >Ver producto</button>              
                    </div>
                  </div>
                </div>

                <div class="box-down">
                  <div class="h-bg">
                    <div class="h-bg-inner"></div>
                  </div>

                  <a class="cart">
                    <span class="price">{this.props.producto.precio + ' $'}</span>
                    <span class="add-to-cart">
                      <span class="txt btn " onClick={this.agregarCarrito}>Agregar al Carrito</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

export default  CardProduDos;