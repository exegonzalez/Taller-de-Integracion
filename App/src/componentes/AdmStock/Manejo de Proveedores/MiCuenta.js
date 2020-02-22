import {Link} from 'react-router-dom'
import React, { Component } from 'react'
import axios from 'axios'
import HeaderCuenta from './HeaderCuenta'


class MiCuenta extends Component {

  state ={
    cuenta : [{}],              
   }

    
  componentDidMount(){
    this.state.cuenta = this.props.user  
  }

  componentDidUpdate(){
    localStorage.setItem('cuenta', JSON.stringify(this.state.cuenta)
    )
  }
    
  render() {
  
    return (
      <div className="col-md-8 mx-auto">  
        <div className="prueba">  
          <h1 className="title text-center mb-5 text-primary">Cuenta</h1>
          <HeaderCuenta/>
          <div className="mover">   
            <form className="mt-5" >
             <div class="form-group">
                <label className="col-sm-4 col-lg-2 col-form-label  text-black-50">Nombre usuario</label>
                <input type="text"
                  class="form-control"
                  readOnly="readOnly"
                  id="" 
                  name=""
                  value={this.props.user[0].nombreuser}
                />
             </div>

             <div class="form-group">
                <label className="col-sm-4 col-lg-2 col-form-label text-primary">Email</label>
                <input type="email" 
                  class="form-control"
                  readOnly="readOnly"
                  aria-describedby="emailHelp"      
                  name="email"  
                  value={this.props.user[0].email}
                />
             </div>   

             <label className="col-sm-4 col-lg-2 col-form-label text-primary">Foto</label>
             <div class="form-group">
                <img class="img-fluid"
                  alt="profile picture"
                  height="150"
                  width="150"
                  src={this.props.user[0].urlfoto}
                />
             </div>
             
          </form>
      </div>
  </div>
</div>
  
    )
  }
}
export default MiCuenta;