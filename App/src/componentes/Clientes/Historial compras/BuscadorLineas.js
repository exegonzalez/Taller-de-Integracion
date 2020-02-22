import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class BuscadorLineas extends Component {
    state= {
        palabra:'',
        opcion:''
    }

    handleChange =e =>{
        this.setState({
            palabra : e.target.value
            
        })
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.props.buscarLinea(this.state.palabra)    
    }

    cambiarOpcion = e => {
        this.setState({
          opcion: e.target.value
        }, ()=>{
          // pasarlo como props a la pagina principal para la consulta
          this.props.ordenarLineas(this.state.opcion)
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
                Ordenar por
                </button>                  
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"
                onClick={this.cambiarOpcion}>
                    <option class="dropdown-item" value ="codigo"  href="#">Codigo</option>
                    <option class="dropdown-item" value="nombre" href="#">Nombre</option>
                    <option class="dropdown-item"  value="cantidadproductos" href="#">Cantidad</option> 
                    <option class="dropdown-item"  value="preciounidad" href="#">Precio Unidad</option>
                    <option class="dropdown-item"  value="totalproducto" href="#">Precio Total</option>                  
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
                onChange={this.handleChange.bind(this.props.buscarLinea)}
                value={this.state.palabra}/>
            <button class="btn btn-outline-dark my-2 my-sm-0" id="boton" type="submit">Search</button>
            
        </form>    
                     
        </li>

        </ul>
    </div>
    
        );
    }
}

export default BuscadorLineas;
