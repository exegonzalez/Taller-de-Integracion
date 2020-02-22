import React, {Component, Fragment} from 'react';
import BuscadorLineas from './BuscadorLineas'
import axios from 'axios'
import ListaLineasCompra from './ListaLineasCompra'

class VerLineasCompra extends Component{

    state ={
        lineas : [],
        buscados: []
    }

    actualizarListado(){
        axios({
          "method" : "GET",
          "url": "http://localhost:5000/linea",
          "params": {
            "carrito": this.props.compra,
          }
        })
        .then((Response) => {
          const listalineas = Response
          this.setState({lineas: listalineas.data})
          this.setState({buscados: listalineas.data})
        })
        .catch((error)=>{
           console.log(error);
          })
      
        const lineasLS = localStorage.getItem('lineas');
        if (lineasLS){
          this.setState({
            lineas : JSON.parse(lineasLS),
            buscados : JSON.parse(lineasLS)
            
          })
          
        }
      }

    componentDidMount(){
        this.actualizarListado()
    }

    componentDidUpdate(){
        localStorage.setItem('lineas', JSON.stringify(this.state.lineas))
    }

    buscarLinea = palabra => {
        if(palabra===''){
          this.setState({
            lineas: this.state.buscados
           })
        }else{
          const linActuales = [...this.state.lineas]
          const lin = linActuales.filter(linea => {if(linea.nombre.includes(palabra)) return linea})
          this.setState({
            lineas: lin
          })
        }
      }

    
    ordenarLineas = opcion =>{
        if(opcion!==''){
          const linActuales = [...this.state.lineas]
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
          
          linActuales.sort(compare);
          this.setState({
            lineas: linActuales
          })
        }
      }


    render(){

        return(
            <Fragment>
     
                <BuscadorLineas
                    buscarLinea={this.buscarLinea}
                    ordenarLineas={this.ordenarLineas}
                />

                <ListaLineasCompra
                    lineas = {this.state.lineas}
                />

            </Fragment>
        )
      }
}

export default VerLineasCompra;
