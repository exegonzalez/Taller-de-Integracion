import {Link} from 'react-router-dom'
import React, { Component } from 'react'
import axios from 'axios'
import HeaderCuenta from './HeaderCuenta'
import swal from 'sweetalert';
 class MiInfo extends Component {

    state ={
        cuenta : [{}],       
        error:false
      }

    cambiarDatos =e =>{
      switch(e.target.name){
          case 'nombre':
            this.state.cuenta[0].nombre= e.target.value
              break;
          case 'apellido':
            this.state.cuenta[0].apellido= e.target.value
              break; 
          case 'telefono':
            this.state.cuenta[0].telefono= e.target.value
              break;   
          case 'direccion':
            this.state.cuenta[0].direccion= e.target.value
              break;
          case 'ciudad':
            this.state.cuenta[0].ciudad = e.target.value
              break;
      }   
      console.log(this.state.cuenta[0])  
    }
    
  editarCuenta= e =>{
    e.preventDefault();

    if (this.state.cuenta[0].nombre === null || this.state.cuenta[0].apellido=== null ||
      this.state.cuenta[0].telefono === null || this.state.cuenta[0].direccion === null ||
      this.state.cuenta[0].ciudad === null)
    {
        this.state.error= true
        return;
    }
  
    axios({
        "method" : "PUT",
        "url": "http://localhost:5000/cuenta",
        "params": {
            "nombre": this.state.cuenta[0].nombre,
            "apellido": this.state.cuenta[0].apellido,
            "telefono": this.state.cuenta[0].telefono,
            "direccion": this.state.cuenta[0].direccion,
            "ciudad": this.state.cuenta[0].ciudad,
            "nombreuser": this.state.cuenta[0].nombreuser,
            "urlfoto": this.state.cuenta[0].urlfoto,
            "email": this.state.cuenta[0].email,
            "rol": this.state.cuenta[0].rol

        }
        
    }).then((response)=> {
        swal({
          title: "Informacion editada!",
          icon: "success", 
          buttons: {
              catch: "Continuar"
          },
        }).then((value) => {
            switch (value) {    
              case "catch":
                break;
              default:
                break;
            }
          });

      })
    .catch((error)=> {
        console.log(error);
        swal({
            title: "Ha ocurrido un error!",
            icon: "error",
          });
    });
}

    componentDidMount(){
      // this.actualizarCuenta()
      this.state.cuenta = this.props.user
    }
  
    //Cuando eliminamos o agregamos un nuevo proveedor 
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
          <form className="mt-5" onSubmit={this.editarCuenta}>
              <div class="form-group" >
                  <label className="col-sm-4 col-lg-2 col-form-label text-primary">Nombre</label>
                  <input type="text"
                    maxlength="50"
                    class="form-control"
                    id="" 
                    placeholder="Nombre"
                    name="nombre"
                    onChange={this.cambiarDatos}
                    defaultValue={this.props.user[0].nombre}
                    
                  />
              </div>
          
              <div class="form-group">
                  <label className="col-sm-4 col-lg-2 col-form-label text-primary">Apellido</label>
                  <input type="text"
                    maxlength="50"
                    class="form-control"
                    id="" 
                    placeholder="Apellido"
                    name="apellido"
                    onChange={this.cambiarDatos}
                    defaultValue={this.props.user[0].apellido}
                  />
              </div>

              <div class="form-group">
                  <label className="col-sm-4 col-lg-2 col-form-label text-primary">Direccion</label>
                  <input type="text"
                    class="form-control"
                    id="" 
                    maxlength="70"
                    placeholder="Direccion"
                    name="direccion"
                    onChange={this.cambiarDatos}
                    defaultValue={this.props.user[0].direccion}
                  />
              </div>

              <div class="form-group">
                  <label className="col-sm-4 col-lg-2 col-form-label text-primary">Ciudad</label>
                  <input type="text"
                    class="form-control"
                    id="" 
                    placeholder="Ciudad"
                    name="ciudad"
                    maxlength="70"
                    onChange={this.cambiarDatos}
                    defaultValue={this.props.user[0].ciudad}
                  />
              </div>

              <div class="form-group">
                  <label className="col-sm-4 col-lg-2 col-form-label text-dark">Telefono</label>
                  <input type="text"
                    class="form-control"
                    id="" 
                    maxlength="15"
                    placeholder="Telefono"
                    name="telefono"
                    onChange={this.cambiarDatos} 
                    defaultValue={this.props.user[0].telefono}      
                  />
              </div>

              <button type="submit" class="py-3 mt-2 btn btn-primary btn-block btn-success">Editar</button>           
          </form>
          </div>
      </div>
    </div>
    )
  }
}
export default MiInfo;




