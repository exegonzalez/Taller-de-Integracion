
import VerComentarioEstilo from './VerComentarioEstilo.css'
import userComentario from '../../images/userComentario.png'
import axios from 'axios'
import React, { Component } from 'react'

class Comentario2 extends Component {
 
    state = {
        usuario : [{}]
    }

    buscarUsuario(){
        axios({
          "method" : "GET",
          "url": "http://localhost:5000/cuenta",
          "params": {
              "email": this.props.comentario.usuario
            }
        })
        .then((Response) => {
          const usuario = Response
          this.setState({usuario: usuario.data})
        })
        .catch((error)=>{
            console.log(error)
          })
      }
    
      componentDidMount(){
          this.buscarUsuario()
      }

    render() {
        return(

            <div class="comments-container">
                <ul id="comments-list" class="comments-list">
                    <li>
                        <div class="comment-main-level">
                            
                            <div class="comment-avatar"><img src={this.state.usuario[0].urlfoto} alt=""/></div>
                            
                            <div class="comment-box">
                                <div class="comment-head">
                                    <h6 class="comment-name "><a href="http://creaticode.com/blog">{this.props.comentario.usuario}</a></h6>
                                    <span>  Comentario realizado en la fecha : {this.props.comentario.fecha} hora: {this.props.comentario.hora}</span>
                                    <i class="fa fa-reply"></i>
                                    <i class="fa fa-heart"></i>
                                </div>
                                <div class="comment-content">
        
                                {this.props.comentario.contenido}
                                </div>
                            </div>
                        </div>
                    </li>
        
                    {/* Esto de abajo seria otro recuadro de comentario */}
        
                    {/* <li>
                        <div class="comment-main-level">
                            
                            <div class="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" alt=""/></div>
                            
                            <div class="comment-box">
                                <div class="comment-head">
                                    <h6 class="comment-name"><a href="http://creaticode.com/blog">Lorena Rojero</a></h6>
                                    <span>hace 10 minutos</span>
                                    <i class="fa fa-reply"></i>
                                    <i class="fa fa-heart"></i>
                                </div>
                                <div class="comment-content">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                                </div>
                            </div>
                        </div>
                    </li> */}
                </ul>
            </div>
            )
        }
    }
export default Comentario2;

   
    