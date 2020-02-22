import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class BuscadorCombos extends Component {
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
        this.props.buscarCombo(this.state.palabra)    
    }

    cambiarOpcion = e => {
        this.setState({
          opcion: e.target.value
        }, ()=>{
          // pasarlo como props a la pagina principal para la consulta
          this.props.ordenarCombos(this.state.opcion)
        }            
        
        )
      }

    render() {

    return (

    <div className="navPill"> 

        <ul class="nav nav-pills nav-fill">

        <li class="nav-item" > 
            <Link to="/nuevo-combo">
            <button
            className="btn btn-secondary "
            type="button"
            id="dropdownMenuButton"            
            aria-haspopup="true">
            Crear Combo
            </button>
            </Link>
        </li>

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
                    <option class="dropdown-item"  value="fechainicio" href="#">Fecha Inicio</option> 
                    <option class="dropdown-item"  value="precio" href="#">Precio</option>                  
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
                onChange={this.handleChange.bind(this.props.buscarCombo)}
                value={this.state.palabra}/>
            <button class="btn btn-outline-dark my-2 my-sm-0" id="boton" type="submit">Search</button>
            
        </form>    
                     
        </li>

        </ul>
    </div>
    
        );
    }
}

export default BuscadorCombos;
