import React, {Component, Fragment} from 'react';
import ListaUsuarios from  './ListaUsuarios';
import axios from 'axios'
import Buscador from './Buscador'
import swal from 'sweetalert';

class Usuarios extends Component{

    state ={
        usuarios : [],
        buscados: []
    }
    
    actualizarListado(){
        axios({
          "method" : "GET",
          "url": "http://localhost:5000/usuario",
        })
        .then((Response) => {
          const listausuarios = Response
          this.setState({usuarios: listausuarios.data})
          this.setState({buscados: listausuarios.data})
        })
        .catch((error)=>{
           console.log(error);
          })
      
        const usuariosLS = localStorage.getItem('usuarios');
        if (usuariosLS){
          this.setState({
            usuarios : JSON.parse(usuariosLS),
            buscados : JSON.parse(usuariosLS)
          })
          
        }
      }


    componentDidMount(){
        this.actualizarListado()
    }


    componentDidUpdate(){
        localStorage.setItem('usuarios', JSON.stringify(this.state.usuarios))
    }

    buscarUsuario = palabra => {
        if(palabra===''){
          this.setState({
            usuarios: this.state.buscados
           })
        }else{
          const userActuales = [...this.state.usuarios]
          const user = userActuales.filter(usuario => {if(usuario.email.includes(palabra)) return usuario})
          this.setState({
            usuarios: user
          })
        }
      }

      ordenarUsuarios = opcion =>{
        if(opcion!==''){
          const userActuales = [...this.state.usuarios]
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
          
          userActuales.sort(compare);
          this.setState({
            usuarios: userActuales
          })
        }
      }


    render(){
        return(
        <Fragment>
     
          <Buscador
             buscarUsuario={this.buscarUsuario}
             ordenarUsuarios={this.ordenarUsuarios}
          />
     
          <ListaUsuarios
             usuarios = {this.state.usuarios}
          />

        </Fragment>
        )
      }
}

export default Usuarios;