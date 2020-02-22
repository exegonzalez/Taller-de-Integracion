import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import matecito from'../../images/mate2.png';


class Navbar extends Component {
    render() {

    return (
            
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <li className="nav-item">
            <Link to="/">
                 <img src={matecito} widht="40" height="40" alt=""/>
            </Link>
            </li>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
               
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Home    
                    </Link>
                </li>  

                <li className="nav-item nav-link disabled">Compras</li>   

                <li className="nav-item nav-link disabled">Carrito</li>     

                <li className="nav-item nav-link disabled">Cuenta</li>                
                
            </ul>
      </div>

      <Link to="/login" className="py-3 mt-2 mb-2 btn btn-sm btn-secondary active">Login
      </Link>
    </nav>
        );
    }
}

export default Navbar;