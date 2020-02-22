import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import jsPDF from 'jspdf'
import 'jspdf-autotable';

class Buscador extends Component {
    state= {
        palabra:'',
        opcion:'',
        listadoBajo:[{}]
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
          this.props.ordenarProducto(this.state.opcion)
        }            
        
        )
      }

      listadoBajoStock(){
        axios({
            "method" : "PATCH",
            "url": "http://localhost:5000/producto",
          })
          .then((Response) => {
          const listaproductos = Response.data
          console.log(listaproductos)
          this.setState({listadoBajo : listaproductos})
        })
        .catch((error)=>{
           console.log(error);
          })
        }

    componentDidMount(){

        this.listadoBajoStock()
    }


    generarReporte = () => {
        var doc = new jsPDF('p', 'pt')
        doc.text(175,25, "Listado de productos con bajo stock")
        let i = 30
        var columns = ["Codigo", "Nombre", "Precio", "Stock actual", "Stock minimo", "Proveedor"];
        var data = []
        this.state.listadoBajo.map(lista => (
             data.push([lista.codigo, lista.nombre, "$ "+lista.precio,lista.stock, lista.stockmin, lista.proveedor])
        ))
        doc.autoTable(columns,data,
            { margin:{ top: 40 }}
            );
        doc.save("reporteBajoStock");
    }
      
    render() {

    return (

    <div className="navPill"> 

        <ul class="nav nav-pills nav-fill">

        <li class="nav-item" > 
            <Link to="/nuevo-producto">
            <button
            className="btn btn-secondary "
            type="button"
            id="dropdownMenuButton"            
            aria-haspopup="true">
            Agregar Producto
            </button>
            </Link>
        </li>

        <li class="nav-item" > 
          
            <button
            className="btn btn-secondary "
            type="button"
            onClick={this.generarReporte}
            id="dropdownMenuButton"            
            aria-haspopup="true">
            Generar Reporte
            </button>
            
        </li>







        <li class="nav-item">
        <div >
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Ordenar por
                </button>                  
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"
                onClick={this.cambiarOpcion}>
                    <option class="dropdown-item" value ="codigo"  href="#">Codigo</option>
                    <option class="dropdown-item" value="nombre" href="#">Nombre</option>
                    <option class="dropdown-item"  value="proveedor" href="#">Proveedor</option>                  
                    <option class="dropdown-item"  value="precio" href="#">Precio</option>
                    <option class="dropdown-item"  value="stock" href="#">Stock</option>
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
                onChange={this.handleChange.bind(this.props.buscarProducto)}
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
