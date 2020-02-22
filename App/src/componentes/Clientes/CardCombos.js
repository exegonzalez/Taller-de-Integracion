import CardCombosEstilo from './CardCombosEstilo.css'
import React, { Component } from 'react'
import swal from 'sweetalert';
import {Redirect} from 'react-router-dom'
import axios from 'axios'

class CardCombos extends Component {

  state = {
    verCombo: false,
    verCarrito: false,
    noLogeado: false,
  }

verPantallaCombo = () => {
  if(Object.keys(this.props.usuario[0]).length !== 0){
    this.setState({verCombo : true})
  } else {
    swal({
      title: "Debe logearse para ver los combos",
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
          "totalproducto": this.props.combo.precio,
          "producto": 'null',
          "combo": this.props.combo.codigo,
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
              title: "Ha ocurrido un error!",
              icon: "error",
            });
        });

  } else {
    swal({
      title: "Debe logearse para agregar combos al carrito",
      text: "Inicie sesion con alguna red social",
      icon: "warning",
    }).then((value) => {  
      this.setState({noLogeado : true})
      }
    );
  }
}

render() {
  
  if(this.state.verCombo){
    return (<Redirect to={`/ver-combo/${this.props.combo.codigo}`}/>)
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
              <img class="img" src={this.props.combo.urlfoto} alt="" width="200" height="200"/>
                {/* <img class="img" src="https://http2.mlstatic.com/mate-tipo-camionero-cuero-con-bombilla-pico-de-loro-D_NQ_NP_783229-MLA30185992544_042019-Q.jpg" alt=""/> */}
                <div class="img-info">
                  <div class="info-inner">
                    <span class="p-name">{this.props.combo.nombre}</span>
                    
                  </div>
                  <div class="a-size">
                    <button onClick={this.verPantallaCombo} className="btn btn-secondary"
                      >Ver combo</button>   
                  </div>
                </div>
              </div>

              <div class="box-down">
                <div class="h-bg">
                  <div class="h-bg-inner"></div>
                </div>

                <a class="cart">
                  <span class="price">{this.props.combo.precio + ' $'}</span>
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

export default  CardCombos;