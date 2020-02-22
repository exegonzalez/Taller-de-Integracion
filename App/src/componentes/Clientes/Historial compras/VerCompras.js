import React, {Component, Fragment} from 'react';
import ListaCompras from  './ListaCompras';
import Buscador from '../../AdmVentas/Manejo de Compras/Buscador'
import axios from 'axios'

class VerCompras extends Component{

    state ={
        compras : [],
        buscados: []
    }

    actualizarListado(){
      axios({
        "method" : "GET",
        "url": "http://localhost:5000/compra",
      })
      .then((Response) => {
        const listacompras = Response
        console.log(listacompras)
        const comprasData = listacompras.data
        const comprasBuscadas = comprasData.filter(compra => compra.usuario === this.props.usuario[0].email && compra.estado==='FINALIZADA');
        this.setState({compras: comprasBuscadas})
        this.setState({buscados: comprasBuscadas})
      })
      .catch((error)=>{
         console.log(error);
        })
    
      const comprasLS = localStorage.getItem('compras');
      if (comprasLS){
        this.setState({
          compras : JSON.parse(comprasLS),
          buscados : JSON.parse(comprasLS)
          
        })
        
      }
    }

    componentDidMount(){
        this.actualizarListado()
    }

    componentDidUpdate(){
        localStorage.setItem('compras', JSON.stringify(this.state.compras))
    }

    buscarCompra = palabra => {
        if(palabra===''){
          this.setState({
            compras: this.state.buscados
           })
        }else{
          const compActuales = [...this.state.compras]
          const comp = compActuales.filter(compra => {if(compra.fecha.includes(palabra)) return compra})
          this.setState({
            compras: comp
          })
        }
      }

      ordenarCompras = opcion =>{
        if(opcion!==''){
          const compActuales = [...this.state.compras]
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
          
          compActuales.sort(compare);
          this.setState({
            compras: compActuales
          })
        }
      }

    render(){

        return(
        <Fragment>
     
          <Buscador
             buscarCompra={this.buscarCompra}
             ordenarCompras={this.ordenarCompras}
          />
     
          <ListaCompras
             compras = {this.state.compras}
          />

        </Fragment>
        )
      }
}

export default VerCompras;
