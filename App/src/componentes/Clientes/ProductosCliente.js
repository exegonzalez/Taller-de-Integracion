import React, { Component, Fragment } from 'react'
import axios from 'axios'

import GrillaProductos from './GrillaProductos'
import Buscador from './Buscador'

class ProductosCliente extends Component {

    state ={
        productos : [],
        buscados:[],
        categorias:[],
        combos:[],
        combosBuscados:[],
      }

      //PETICION GET PARA LOS PRODUCTOS
      actualizarListado(){
        axios({
          "method" : "GET",
          "url": "http://localhost:5000/producto",
        })
        .then((Response) => {
          const listaproductos = Response
          this.setState({productos: listaproductos.data})
          this.setState({buscados: listaproductos.data})
          this.setState({categorias: listaproductos.data})
        })
        .catch((error)=>{
           console.log(error);
          })
      
        const productosLS = localStorage.getItem('productos');
        if (productosLS){
          this.setState({
            productos : JSON.parse(productosLS),
            buscados : JSON.parse(productosLS),
            categorias : JSON.parse(productosLS)  
          })
          
        }
      }


      //PETICION GET PARA LOS COMBOS
      actualizarListadoCombos(){
        axios({
          "method" : "GET",
          "url": "http://localhost:5000/combo",
        })
        .then((Response) => {
          const listacombos = Response
          this.setState({combos: listacombos.data})     
          this.setState({combosBuscados: listacombos.data})          
        })
        .catch((error)=>{
           console.log(error);
          })
      
          const combosLS = localStorage.getItem('combos');
          if (combosLS){
            this.setState({
              combos : JSON.parse(combosLS),                
              combosBuscados : JSON.parse(combosLS)
            })
          
        }
      }

  
    componentDidMount(){
      this.actualizarListado()
      this.actualizarListadoCombos()      
      
    }
    
    componentDidUpdate(){
      localStorage.setItem('productos', JSON.stringify(this.state.productos))
      localStorage.setItem('combos', JSON.stringify(this.state.combos))
    }
    

    //FUNCIONES PARA LOS PRODUCTOS
    buscarProducto = palabra => {
      if(palabra===''){
        this.setState({
          productos: this.state.categorias,
          combos: this.state.combos
         })
      }else{
        const prodActuales = [...this.state.productos]
        const combActuales = [...this.state.combos]
        const prod = prodActuales.filter(producto => {if(producto.nombre.includes(palabra)) return producto})
        const comb = combActuales.filter(combo => {if(combo.nombre.includes(palabra)) return combo})
        this.setState({
          productos: prod,
          combos: comb
        })
      }
    }

    ordenarProductos = opcion =>{
      if(opcion!==''){
        const prodActuales = [...this.state.productos]
        const combActuales = [...this.state.combos]
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
        combActuales.sort(compare)
        this.setState({
          productos: prodActuales,
          combos: combActuales
        })
      }
    }

    ordenarTipo = cat => {
      if(cat==="7"){
        this.setState({
          productos: this.state.buscados,
          categorias: this.state.buscados,
          combos: this.state.combosBuscados
         })
      }else if(cat==="8"){
        this.setState({
          productos: [],
          combos: this.state.combosBuscados
         })
      }else{
        const prodActuales = [...this.state.buscados]
        const prod = prodActuales.filter(producto => {if(producto.tipo===parseInt(cat)) return producto})
        this.setState({
          productos: prod,
          categorias: prod,
          combos:[]
        })
      }
    }

     
    render() {

        return (
            <Fragment>

              <Buscador
                buscarProducto={this.buscarProducto}
                ordenarProductos={this.ordenarProductos}
                ordenarTipo={this.ordenarTipo}
              />

              <GrillaProductos
                productos = {this.state.productos}
                combos ={this.state.combos}
                usuario = {this.props.usuario}
                carrito = {this.props.carrito}
              />

            </Fragment>
        )
    }
}

export default ProductosCliente;