import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import '../../AdmGeneral/Manejo de Usuarios/HomeEstilo.css'

import ventas from '../../../images/AdmVentas/ventas.png'
import combos from '../../../images/AdmVentas/combos.png'
import micuenta from '../../../images/AdmVentas/micuenta.png'


class HomeVentas extends Component{
    render(){
        return(
          <div >
<div class="jumbotron">
  <h1 class="display-3" align="center">ADMINISTRADOR VENTAS</h1>
  
  <hr class="my-4"/>
  <p align="center" className="text-dark">Seleccione alguna de las siguientes opciones</p>
  <p class="lead">


  <ul class="test-menu">
              
                
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
                imagen={user}
                titulo="MI CUENTA"
                url="/info"
              />
            </div> */}
          </div>
        )
      }
    }

export default HomeVentas;


