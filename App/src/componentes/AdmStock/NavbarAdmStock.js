import React, { Component } from 'react';
import '../AdmStock/NavbarAdmStock.css';
import matecito from'../../images/mate2.png';
import {Link} from 'react-router-dom'

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

                <li className="nav-item">
                    <Link to="/proveedor" className="nav-link">
                        Proveedor    
                    </Link>
                </li>   

                <li className="nav-item">
                    <Link to="/producto" className="nav-link">
                        Producto    
                    </Link>
                </li>   

                <li className="nav-item">
                    <Link to="/info" className="nav-link">
                        Cuenta   
                    </Link>
                </li>              
                
            </ul>
      </div>
      <Link to="/login" className="py-3 mt-2 mb-2 btn btn-sm btn-secondary active">Logout
      </Link>
    </nav>
        );
    }
}

export default Navbar;
