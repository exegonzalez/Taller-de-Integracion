import React, {Component,Fragment} from 'react';
import BuscadorCombos from './BuscadorCombos';
import ListaCombos from './ListaCombos';
import swal from 'sweetalert';
import axios from 'axios';
import {Redirect} from 'react-router-dom'

 class Combos extends Component {
  
  state ={
    combos : [],
    buscados: [],
    redireccionar: false
  }

  actualizarListado(){
    axios({
      "method" : "GET",
      "url": "http://localhost:5000/combo",
    })
    .then((Response) => {
      const listacombos = Response
      this.setState({combos: listacombos.data})
      this.setState({buscados: listacombos.data})
    })
    .catch((error)=>{
       console.log(error);
      })
  
    const combosLS = localStorage.getItem('combos');
    if (combosLS){
      this.setState({
        combos : JSON.parse(combosLS),
        buscados : JSON.parse(combosLS)
      })
    }
  }

  componentDidMount(){
    this.actualizarListado()
  } 


  componentDidUpdate(){
    localStorage.setItem('combos', JSON.stringify(this.state.combos))
  }

  buscarCombo = palabra => {
    if(palabra===''){
      this.setState({
        combos: this.state.buscados
       })
    }else{
      const combActuales = [...this.state.combos]
      const comb = combActuales.filter(combo => {if(combo.nombre.includes(palabra)) return combo})
      this.setState({
        combos: comb
      })
    }
  }

  ordenarCombos = opcion =>{
    if(opcion!==''){
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
      
      combActuales.sort(compare);
      this.setState({
        combos: combActuales
      })
    }
  }

  eliminarCombo = codigo =>{
    axios({
      "method" : "DELETE",
      "url": "http://localhost:5000/combo",
      "params": {
        "codigo": codigo
      }
    }).then((response)=> {
      swal({
        title: "Combo eliminado!",
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
          text: "Debe eliminar cada producto del combo",
          icon: "error",
        });
   });

  }

  render() {

      if(this.state.redireccionar){
        return (<Redirect to="/"/>)
      }

        return (
          <Fragment>
     
          <BuscadorCombos
             buscarCombo={this.buscarCombo}
             ordenarCombos={this.ordenarCombos}
          />
     
          <ListaCombos
             combos = {this.state.combos}
             eliminarCombo ={this.eliminarCombo}
          />

        </Fragment>
        )
    }
}

export default Combos;
