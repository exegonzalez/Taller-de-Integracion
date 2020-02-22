import React, { Component } from 'react';

class Buscador extends Component {
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
        this.props.buscarCompra(this.state.palabra)    
    }

    cambiarOpcion = e => {
        this.setState({
          opcion: e.target.value
        }, ()=>{
          // pasarlo como props a la pagina principal para la consulta
          this.props.ordenarCompras(this.state.opcion)
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
                    <option class="dropdown-item" value ="fecha"  href="#">Fecha</option>
                    <option class="dropdown-item" value="codigo" href="#">Codigo</option>
                    <option class="dropdown-item"  value="estado" href="#">Estado</option>
                    <option class="dropdown-item"  value="usuario" href="#">Usuario</option> 
                    <option class="dropdown-item"  value="total" href="#">Precio</option>                    
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
                onChange={this.handleChange.bind(this.props.buscarCompra)}
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
