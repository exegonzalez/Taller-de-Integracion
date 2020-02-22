import React, {Component, Fragment} from 'react'
import ListaProveedores from './ListaProveedores'
import axios from 'axios'
import Buscador from './Buscador'
import swal from 'sweetalert';
import {Redirect} from 'react-router-dom'

class Proveedores extends Component{

  state ={
    proveedores : [],
    buscados:[],
    redireccionar: false
  }

    actualizarListado(){
      axios({
        "method" : "GET",
        "url": "http://localhost:5000/proveedor",
      })
      .then((Response) => {
        const listaproveedores = Response
        this.setState({proveedores: listaproveedores.data})
        this.setState({buscados: listaproveedores.data})
      })
      .catch((error)=>{
         console.log(error);
        })
    
      const proveedoresLS = localStorage.getItem('proveedores');
      if (proveedoresLS){
        this.setState({
          proveedores : JSON.parse(proveedoresLS),
          buscados : JSON.parse(proveedoresLS)
          
        })
        
      }
    }

   // Cuando la aplicacion se carga
    componentDidMount(){
      this.actualizarListado()
      
    }
  
    //Cuando eliminamos o agregamos un nuevo proveedor 
    componentDidUpdate(){
      localStorage.setItem('proveedores', JSON.stringify(this.state.proveedores)
      )
    }

    buscarProveedor = palabra => {
      if(palabra===''){
        this.setState({
          proveedores: this.state.buscados
         })
      }else{
        const provActuales = [...this.state.proveedores]
        const prov = provActuales.filter(proveedor => {if(proveedor.nombre.includes(palabra)) return proveedor})
        this.setState({
          proveedores: prov
        })
      }
    }


    ordenarProveedor = opcion =>{
      console.log(opcion)
      if(opcion!==''){
        const provActuales = [...this.state.proveedores]
        var opc = opcion

        function compare(a, b) {
          let comparison = 0;
          if (a[opc].toLowerCase() > b[opc].toLowerCase()) {
            comparison = 1;
          } else if (a[opc].toLowerCase() < b[opc].toLowerCase()) {
            comparison = -1;
          }
          return comparison;
        }
        
        provActuales.sort(compare);
        this.setState({
          proveedores: provActuales
        })
      }
    }
    
    // crearNuevoProveedor = datos =>{
    //   const proveedores = [...this.state.proveedores, datos]
    //   const buscados = [...this.state.buscados, datos]
    //   // agregar el nuevo state
    //   this.setState({
    //     proveedores,
    //     buscados
    //   })
    //   this.actualizarListado()
    // }

    //Eliminar los proveedores del state
    eliminarProveedor = cuit =>{
      console.log(cuit);
      axios({
        "method" : "DELETE",
        "url": "http://localhost:5000/proveedor",
        "params": {
          "cuit": cuit
        }
      }).then((response)=> {
        swal({
          title: "Proveedor eliminado!",
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
        buscarProveedor={this.buscarProveedor}
        ordenarProveedor={this.ordenarProveedor}/>
      
      <ListaProveedores
         proveedores = {this.state.proveedores}
         eliminarProveedor ={this.eliminarProveedor}
      />

    </Fragment>
    )
  }

}

export default Proveedores