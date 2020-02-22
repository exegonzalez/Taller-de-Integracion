import React, {Component, Fragment} from 'react';
import ListaAgregarProdXComb from './ListaAgregarProdXComb'
import axios from 'axios'
import BuscadorProductoXCombo from './BuscadorProductoXCombo'
import swal from 'sweetalert';
import {Redirect} from 'react-router-dom'

class AgregarProductoXCombo extends Component{
    state ={
      combo : [{}],
      productos : [],
      buscados:[],
      redireccionar: false
    }
    
    actualizarListado(){
      axios({
        "method" : "GET",
        "url": "http://localhost:5000/producto"
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
    this.state.combo = this.props.combo
    this.actualizarListado()
  }
  
  componentDidUpdate(){
    localStorage.setItem('productos', JSON.stringify(this.state.productos))
  }
  
  buscarProductoXCombo = palabra => {
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

  ordenarProductoXCombo = opcion =>{
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
  
  AgregarProductoXCombo = codigo =>{
    console.log(codigo)
    axios({
      "method" : "POST",
      "url": "http://localhost:5000/productoxcombo",
      "params": {
        "producto": codigo,
        "combo": this.props.codigoCombo
      }
    }).then((response)=> {
      swal({
        title: "Producto agregado al combo!",
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
  
      <ListaAgregarProdXComb
         productos = {this.state.productos}
         AgregarProductoXCombo ={this.AgregarProductoXCombo}
      />

      </Fragment>
      )
    }
  
  }
  
  export default AgregarProductoXCombo;