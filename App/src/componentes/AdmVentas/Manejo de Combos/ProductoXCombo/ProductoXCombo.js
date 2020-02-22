import React, {Component, Fragment} from 'react';
import ListaProductoXCombo from '../ProductoXCombo/ListaProductoXCombo'
import axios from 'axios'
import BuscadorProductoXCombo from '../ProductoXCombo/BuscadorProductoXCombo'
import swal from 'sweetalert';
import {Redirect} from 'react-router-dom'

class ProductoXCombo extends Component{
    state ={
      productosxcombo : [],
      buscados:[],
      redireccionar: false
    }
    
    actualizarListado(){
      axios({
        "method" : "GET",
        "url": "http://localhost:5000/productoxcombo",
        "params": {
            "codigo": this.props.codigoCombo
          }
      })
      .then((Response) => {
        const listaproductosxcombo = Response
        this.setState({productosxcombo: listaproductosxcombo.data})
        this.setState({buscados: listaproductosxcombo.data})
      })
      .catch((error)=>{
         console.log(error);
        })
    
      const productosxcomboLS = localStorage.getItem('productosxcombo');
      if (productosxcomboLS){
        this.setState({
          productosxcombo : JSON.parse(productosxcomboLS),
          buscados : JSON.parse(productosxcomboLS)
        })
        
      }
    }

  componentDidMount(){
    this.actualizarListado()
  }
  
  componentDidUpdate(){
    localStorage.setItem('productosxcombo', JSON.stringify(this.state.productosxcombo))
  }
  
  buscarProductoXCombo = palabra => {
    if(palabra===''){
      this.setState({
        productosxcombo: this.state.buscados
       })
    }else{
      const prodActuales = [...this.state.productosxcombo]
      const prod = prodActuales.filter(producto => {if(producto.nombre.includes(palabra)) return producto})
      this.setState({
        productosxcombo: prod
      })
    }
  }

  ordenarProductoXCombo = opcion =>{
    console.log(opcion)
    if(opcion!==''){
      const prodActuales = [...this.state.productosxcombo]
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
        productosxcombo: prodActuales
      })
    }
  }
  
  eliminarProductoXCombo = codigo =>{
    axios({
      "method" : "DELETE",
      "url": "http://localhost:5000/productoxcombo",
      "params": {
        "producto": codigo,
        "combo": this.props.codigoCombo
      }
    }).then((response)=> {
      swal({
        title: "Producto eliminado del combo!",
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
        return (<Redirect to="/combo"/>)
      }

      return(
      <Fragment>
      <BuscadorProductoXCombo
        buscarProductoXCombo={this.buscarProductoXCombo}
        ordenarProductoXCombo={this.ordenarProductoXCombo}
      />
  
      <ListaProductoXCombo
         productosXCombo = {this.state.productosxcombo}
         eliminarProductoXCombo ={this.eliminarProductoXCombo}
      />

      </Fragment>
      )
    }
  
  }
  
  export default ProductoXCombo;