import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import Card from '../../Generales/Card'




import provee from '../../../images/AdmGeneral/provee.png'
import combos from '../../../images/AdmGeneral/combos.png'
import micuenta from '../../../images/AdmGeneral/micuenta.png'
import producto from '../../../images/AdmGeneral/producto.png'
import usuario from '../../../images/AdmGeneral/usuario.png'
import ventas from '../../../images/AdmGeneral/ventas.png'

import './HomeEstilo.css'



class HomeAdmGeneral extends Component {

  render() {
        return (
              <div>

<div class="jumbotron">
  <h1 class="display-3" align="center">ADMINISTRADOR GENERAL</h1>
  
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
                  <Link to="/venta">
                  <a class="test-menu__link"  title="example">
                    Ventas <img src={ventas}></img>
                  </a>
                  </Link>
                </li>


                <li class="test-menu__item">
                  <Link to="/combo">
                  <a class="test-menu__link" title="example">
                    Combos <img src={combos}></img>
                  </a>
                  </Link>
                </li>

                <li class="test-menu__item">
                  <Link to="/usuario">
                  <a class="test-menu__link"title="example">
                    Usuario <img src={usuario}></img>
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
              </ul>
    


  </p>
</div>

              



                {/* <div className='container'>
                  <Card 
                    imagen={Proveedor}
                    titulo="PROVEEDORES"
                    url="/proveedor"
                  />
                  <Card
                    imagen={Stock}
                    titulo="PRODUCTOS"
                    url="/producto"
                  />
                  <Card 
                    imagen={cash}
                    titulo="VENTAS"
                    url="/venta"
                  />
                  <Card
                    imagen={combo}
                    titulo="COMBOS"
                    url="/combo"
                  />
                  <Card
                    imagen={usuarios}
                    titulo="USUARIOS"
                    url="/usuario"
                  />
                  <Card
                    imagen={user}
                    titulo="MI CUENTA"
                    url="/info"
                  />

                </div>  */}
            </div>
        )
    }
}

export default HomeAdmGeneral;
