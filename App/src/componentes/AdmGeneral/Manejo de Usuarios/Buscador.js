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
        this.props.buscarUsuario(this.state.palabra)    
    }

    cambiarOpcion = e => {
        this.setState({
          opcion: e.target.value
        }, ()=>{
          this.props.ordenarUsuarios(this.state.opcion)
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
                        <option class="dropdown-item" value ="email"  href="#">Email</option>
                        <option class="dropdown-item" value="nombreuser" href="#">Usuario</option>
                        <option class="dropdown-item"  value="rol" href="#">Rol</option>
                        <option class="dropdown-item"  value="nombre" href="#">Nombre</option> 
                        <option class="dropdown-item"  value="apellido" href="#">Apellido</option> 
                        <option class="dropdown-item"  value="ciudad" href="#">Ciudad</option>                     
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
                    onChange={this.handleChange.bind(this.props.buscarUsuario)}
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
