import React, { Component, Fragment } from 'react';
import Comentarioo from './Comentarioo';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import swal from 'sweetalert';

class VerComentarios extends Component {

    state = {
        comentarios : [{}],
        comentarioNuevo: '',
        error:false,
        redireccionar: false
    }

    listadoComentarios(){
        axios({
          "method" : "GET",
          "url": "http://localhost:5000/comentario",
        })
        .then((Response) => {
          const listaComentarios = Response
          const comentariosBuscados = listaComentarios.data.filter(comentario => comentario.producto === this.props.producto);
          this.setState({comentarios: comentariosBuscados})
        })
        .catch((error)=>{
           console.log(error);
          })
      
        const comentariosLS = localStorage.getItem('comentarios');
        if (comentariosLS){
          this.setState({
            comentarios : JSON.parse(comentariosLS)
          })
          
        }
      }

    handleChange =e =>{
        // coloco lo que el usuario escribe en el state
            this.state.comentarioNuevo = e.target.value
        }
    
    handleSubmit = e =>{
        e.preventDefault();
        // Extraer los valores del state
        const texto = this.state.comentarioNuevo
    
        // Verificar que los campos esten completos
        if (texto === null)
        {
            this.setState({
                error: true
            })
            // Detener la Ejecucion 
            return;
        }
    
        axios({
            "method" : "POST",
            "url": "http://localhost:5000/comentario",
            "params": {
                "contenido": texto,
                "usuario": this.props.comentarios[0].usuario,
                "producto": this.props.producto  
            }
        }).then((response)=> {
            console.log(response);
            swal("Comentario enviado!",  {
                buttons: {
                    cancel: "Cancelar",
                    catch: "Continuar"
                },
                })
                .then((value) => {
                switch (value) {
                    case "cancel":
                    break;          
                    case "catch":
                    this.setState({redireccionar: true})
                    break;
                }
                });
            })
            .catch((error)=> {
            console.log(error);
            swal({
                title: "Ha ocurrido un error!",
                text: "Debe realizar una compra para poder comentar",
                icon: "error",
                });
            });
    }

    componentDidMount(){
        this.listadoComentarios()
    }

    render() {
    setTimeout(function() {
       
    }.bind(this), 1000)
    
    var comentarios = this.state.comentarios
    console.log(comentarios)

    if(this.state.redireccionar){
        return (<Redirect to="/"/>)
    }

    const {error} = this.state;

    return (
        <Fragment>
            <div align="center">
                <h1>Comentarios </h1>
            </div>
            
            {this.state.comentarios.map(comentario=>(
                <Comentarioo
                    comentario = {comentario}
                />
            ))}

            <div align="center"> 
                <h3> Deja tu comentario</h3>
            </div>


            <form onSubmit={this.handleSubmit}>
                <div class="form-group " onSubmit={this.handleSubmit} align="center">
                    <textarea class="form-control  col-sm-6 col-lg-8" id="exampleFormControlTextarea1" onChange={this.handleChange}  rows="3"></textarea>
                </div>
                <div align="center" >
                    <button type="submit" class="btn btn-dark">Enviar</button>
                </div>
            </form>
	           
        </Fragment>
        );

    }   
}

export default VerComentarios;
