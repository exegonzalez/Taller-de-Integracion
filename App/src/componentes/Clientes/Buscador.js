import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import BuscadorEstilo from './BuscadorEstilo.css'

class Buscador extends Component {
    
    state= {
        palabra:'',
        opcion:'',
        tipo:''
    }

    handleChange =e =>{
        this.setState({
            palabra : e.target.value
            
        })
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.props.buscarProducto(this.state.palabra)    
    }

    cambiarOpcion = e => {
        this.setState({
          opcion: e.target.value
        }, ()=>{
          this.props.ordenarProductos(this.state.opcion)
        }                   
        )
      }

    cambiarTipo = e => {
        this.setState({
          tipo: e.target.value
        }, ()=>{
          this.props.ordenarTipo(this.state.tipo)
        }                   
        )
      }

    render() {

    return (

        <div className="navPill"> 

            <ul class="nav nav-pills nav-fill">

            <li class="nav-item">
            <div>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Ordenar Por
                    </button>                  
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"
                    onClick={this.cambiarOpcion}>
                        <option class="dropdown-item" value ="nombre"  href="#">Nombre</option>
                        <option class="dropdown-item" value="precio" href="#">Precio</option>
                        <option class="dropdown-item" value="codigo" href="#">Codigo</option>               
                    </div>                  
                </div>
            </div>
            </li>

            <li class="nav-item">
            <div>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Ver por categoria
                    </button>                  
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"
                    onClick={this.cambiarTipo}>
                        <option class="dropdown-item" value ="1"  href="#">Mates</option>
                        <option class="dropdown-item" value="2" href="#">Termos</option>
                        <option class="dropdown-item"  value="3" href="#">Bombillas</option>
                        <option class="dropdown-item"  value="4" href="#">Portatermos</option>
                        <option class="dropdown-item"  value="5" href="#">Yerbas</option>
                        <option class="dropdown-item"  value="8" href="#">Combos</option>     
                        <option class="dropdown-item"  value="6" href="#">Otros</option>  
                        <option class="dropdown-item"  value="7" href="#">Todos</option>                   
                    </div>                  
                </div>
            </div>
            </li>

            <li class="nav-item">   
            <form class="form-inline" onSubmit={this.handleSubmit}>
                <input class="form-control mr-sm-2"
                    type="search" 
                    placeholder="Buscar" 
                    id="Formularito"
                    aria-label="Search"
                    onChange={this.handleChange.bind(this.props.buscarProveedor)}
                    value={this.state.palabra}/>
                <button class="btn btn-outline-dark my-2 my-sm-0" id="boton" type="submit">Search</button>
                
            </form>    
                        
            </li>

            </ul>
        </div>
        
    
        );
    }
}

export default Buscador;