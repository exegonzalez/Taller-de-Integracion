import React, {Component, Fragment} from 'react';
import ListaProductos from './ListaProductos'
import axios from 'axios'
import Buscador from './Buscador'
import swal from 'sweetalert';
import {Redirect} from 'react-router-dom'

class Productos extends Component{

    state ={
      productos : [],
      buscados:[],
      redireccionar:false
    }
    
    actualizarListado(){
      axios({
        "method" : "GET",
        "url": "http://localhost:5000/producto",
      })
      .then((Response) => {
        const listaproductos = Response
        this.setState({productos: listaproductos.data})
        this.setState({buscados: listaproductos.data})
      })
      .catch((error)=>{
         console.log(error);
        })
    
      const productosLS = localStorage.getItem('productos');
      if (productosLS){
        this.setState({
          productos : JSON.parse(productosLS),
          buscados : JSON.parse(productosLS)
        })
        
      }
    }

  componentDidMount(){
    this.actualizarListado()
  }
  
  componentDidUpdate(){
    localStorage.setItem('productos', JSON.stringify(this.state.productos))
  }
  
  buscarProducto = palabra => {
    if(palabra===''){
      this.setState({
        productos: this.state.buscados
       })
    }else{
      const prodActuales = [...this.state.productos]
      const prod = prodActuales.filter(producto => {if(producto.nombre.includes(palabra)) return producto})
      this.setState({
        productos: prod
      })
    }
  }

  ordenarProducto = opcion =>{
    console.log(opcion)
    if(opcion!==''){
      const prodActuales = [...this.state.productos]
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
      
      prodActuales.sort(compare);
      this.setState({
        productos: prodActuales
      })
    }
  }
  
  eliminarProducto = codigo =>{
    console.log(codigo);
    axios({
      "method" : "DELETE",
      "url": "http://localhost:5000/producto",
      "params": {
        "codigo": codigo
      }
    }).then((response)=> {
      swal({
        title: "Producto eliminado!",
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
            buscarProducto={this.buscarProducto}
            ordenarProducto={this.ordenarProducto}/>
      
          <ListaProductos
            productos = {this.state.productos}
            eliminarProducto ={this.eliminarProducto}
          />

        </Fragment>
      )
    }
  
  }
  
  export default Productos;