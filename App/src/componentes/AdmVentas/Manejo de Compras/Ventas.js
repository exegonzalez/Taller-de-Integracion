import React, {Component, Fragment} from 'react';
import ListaVentas from  './ListaVentas';
import axios from 'axios'
import Buscador from './Buscador'
import swal from 'sweetalert';
import {Redirect} from 'react-router-dom'

class Ventas extends Component{

    state ={
        ventas : [],
        buscados: [],
        redireccionar: false
    }
    
    actualizarListado(){
        axios({
          "method" : "GET",
          "url": "http://localhost:5000/compra",
        })
        .then((Response) => {
          const listaventas = Response
          this.setState({ventas: listaventas.data})
          this.setState({buscados: listaventas.data})
        })
        .catch((error)=>{
           console.log(error);
          })
      
        const ventasLS = localStorage.getItem('ventas');
        if (ventasLS){
          this.setState({
            ventas : JSON.parse(ventasLS),
            buscados : JSON.parse(ventasLS)
            
          })
          
        }
      }


    componentDidMount(){
        this.actualizarListado()
    }


    componentDidUpdate(){
        localStorage.setItem('ventas', JSON.stringify(this.state.ventas))
    }


    buscarCompra = palabra => {
        if(palabra===''){
          this.setState({
            ventas: this.state.buscados
           })
        }else{
          const ventActuales = [...this.state.ventas]
          const vent = ventActuales.filter(venta => {if(venta.usuario.includes(palabra)) return venta})
          this.setState({
            ventas: vent
          })
        }
      }

      ordenarCompras = opcion =>{
        if(opcion!==''){
          const ventActuales = [...this.state.ventas]
          var opc = opcion
  
          function compare(a, b) {
            let comparison = 0;
            if (a[opc] > b[opc]) {
              comparison = 1;
            } else if (a[opc] < b[opc]) {
              comparison = -1;
            }
            return comparison;
          }
          
          ventActuales.sort(compare);
          this.setState({
            ventas: ventActuales
          })
        }
      }


      eliminarCompra = carrito =>{
        axios({
          "method" : "DELETE",
          "url": "http://localhost:5000/compra",
          "params": {
            "carrito": carrito
          }
        }).then((response)=> {
          swal({
            title: "Compra eliminada!",
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
                    this.setState({redireccionar : true})
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


    render(){

      if(this.state.redireccionar){
        return (<Redirect to="/"/>)
      }

      return(
        <Fragment>
     
          <Buscador
             buscarCompra={this.buscarCompra}
             ordenarCompras={this.ordenarCompras}
          />
     
          <ListaVentas
             ventas = {this.state.ventas}
             eliminarCompra ={this.eliminarCompra}
          />

        </Fragment>
        )
      }
}

export default Ventas;