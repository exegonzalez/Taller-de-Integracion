import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import provee from '../../../images/AdmStock/provee.png'
import producto from '../../../images/AdmStock/producto.png'
import micuenta from '../../../images/AdmStock/micuenta.png'
import '../../AdmGeneral/Manejo de Usuarios/HomeEstilo.css'

 class HomeStock extends Component {
    render() {
        return (
            <div>
                

                <div class="jumbotron">
  <h1 class="display-3" align="center">ADMINISTRADOR DE STOCK</h1>
  
  <hr class="my-4"/>
  <p align="center" className="text-dark">Seleccione alguna de las siguientes opciones</p>
  <p class="lead">


  <ul class="test-menu">
                <li class="test-menu__item">
                  <Link to="/proveedor">
                  <a class="test-menu__link" title="example">
                    Proveedores <img src={provee}></img>
                  </a>
                  </Link>
                </li>
                
                <li class="test-menu__item">
                <Link to="/producto">
                  <a class="test-menu__link"  title="example">
                    Productos <img src={producto}></img>
                  </a>
                </Link>
                </li>
            
               
                <li class="test-menu__item">
                  <Link to="/info">
                  <a class="test-menu__link"title="example">
                    Mi cuenta <img src={micuenta}></img>
                  </a>
                  </Link>
                </li>

                <li class="test-menu__item">
                  <Link to="/">
                  <a class="test-menu__link"title="example">
                    Home 
                  </a>
                  </Link>
                </li>


                
              </ul>
    


  </p>
</div>


                {/* <div className='container'>
                  <Card 
                    imagen={Proveedor}
                    titulo="PROVEEDOR"
                    url="/proveedor"
                  />
                  <Card
                    imagen={Stock}
                    titulo="PRODUCTOS"
                    url="/producto"
                  />
                  <Card
                    imagen={user}
                    titulo="MI CUENTA"
                    url="/info"
                  />
                </div> */}
            </div>
        )
    }
}

export default HomeStock;
