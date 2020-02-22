import {Redirect} from 'react-router-dom'
import './VerProductoEstilo.css'
import cart from '../../images/Ventas/cart2.png'
import axios from 'axios'
import swal from 'sweetalert'
 
import React, { Component } from 'react';

class VerCombos extends Component {
  
  state= {
    combo: [{}],
    redireccionar: false
  }

  actualizarListado(){
    axios({
        "method" : "GET",
        "url": "http://localhost:5000/combo",
      })
      .then((Response) => {
      const listacombos = Response.data
      const comboBuscado = listacombos.filter(combo => combo.codigo === this.props.combo);
      this.setState({combo: comboBuscado})
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
            "cantidadproducto": 1,
            "totalproducto": this.state.combo[0].precio,
            "producto": 'null',
            "combo": this.state.combo[0].codigo,
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

  componentDidMount(){
      this.actualizarListado()

  }

  render() {

    if(this.state.redireccionar){
      return (<Redirect to="/ver-carrito"/>)
    }

    return (
      <div class="container">  

      <div class="row">               
        <div class="col-md-8">
          <img class="img-fluid" src={this.state.combo[0].urlfoto} alt="" width="400" height="500"/>
        </div>

        <div class="col-md-4">
          <h3 class="my-3">{this.state.combo[0].nombre}</h3>
          <p>{this.state.combo[0].descripcion}</p>

          <h3 class="my-3">Detalles</h3>
          <ul>
            <li>Precio : ${this.state.combo[0].precio} </li>
            <li>Stock : Hasta agotar stock de cada producto del combo</li>
            <li>Fecha inicio : {this.state.combo[0].fechainicio} </li>
            <li>Fecha final : {this.state.combo[0].fechafinal} </li>
          </ul>

          <button type="button" onClick={this.agregarAlCarrito} class="btn btn-success">Agregar al carrito <img src = {cart}/></button>
        </div>

      </div>    

    </div>
    );
  }
}

export default  VerCombos;
