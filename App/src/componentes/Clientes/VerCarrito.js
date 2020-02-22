import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import Lineas from './Lineas'
import swal from 'sweetalert';

 class VerCarrito extends Component {
    
    state = {
        infoLinea : [{}],
        compra : [{}],
        arrayItems : [],
        total: 0,
        redireccionar: false,
        mercadopago: false,
        linkmercadopago: '',
    }

    actualizarListado(){
        const carro = JSON.parse(localStorage.getItem('carrito'))
        axios({
          "method" : "GET",
          "url": "http://localhost:5000/linea",
          "params": {
              "carrito": carro[0].carrito
          }
        })
        .then((Response) => {
          const datosLinea = Response
          const reducer = (accumulator, currentValue) => accumulator + currentValue;
          const array = datosLinea.data.map(function (linea) {
            return linea.totalproducto; 
          });
          const arrayNuevo = datosLinea.data.map(function(linea){ 
            var rObj = {};
            rObj['id'] = linea.codigo;
            rObj['title'] = linea.nombre;
            rObj['description'] = linea.descripcion; 
            rObj['unit_price'] = linea.preciounidad;
            rObj['quantity'] = linea.cantidadproducto; 
            rObj['currency_id'] = 'ARS';
            return rObj;
         });
          this.setState({infoLinea: datosLinea.data})
          this.setState({arrayItems: arrayNuevo})
          this.setState({total: array.reduce(reducer)})
        })
        .catch((error)=>{
           console.log(error);
          })
      
        const lineaLS = localStorage.getItem('infoLinea');
        if (lineaLS){
          this.setState({
            infoLinea: JSON.parse(lineaLS),
          })
        }
      }


      componentDidMount(){
        console.log('aca')
        this.actualizarListado()
      }


      crearCompra(){
        axios({
          "method" : "POST",
          "url": "http://localhost:5000/compra",
          "params": {
              "carrito": this.props.carrito[0].carrito,
              "total": this.state.total,
              "usuario": this.props.usuario[0].email,
              "items": this.state.arrayItems
          }
          
      }).then((response)=> {
          console.log(response.data);
          localStorage.setItem('lineasProd', JSON.stringify(this.state.lineasProd))
          localStorage.setItem('lineasComb', JSON.stringify(this.state.lineasComb))
          localStorage.setItem('linkmercadopago', response.data)
          this.setState({linkmercadopago : response.data})
          this.setState({mercadopago : true})
        })
       .catch((error)=> {
          console.log(error);
          swal({
            title: "Su compra ya fue dada de alta!",
            text: "En espera de realizar el pago",
            icon: "warning",
          });
      })
    }

      eliminarLinea = codigo =>{
        axios({
          "method" : "DELETE",
          "url": "http://localhost:5000/linea",
          "params": {
            "codigo": codigo
          }
        }).then((response)=> {
          swal({
            title: "Producto eliminado del carrito!",
            icon: "success", 
            buttons: {
                catch: "Ver productos"
            },
          }).then((value) => {
              switch (value) {    
                case "catch":
                    this.setState({redireccionar : true})
                  break;
                default:
                    this.setState({redireccionar : true})
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

    pagar = () => {
      if(this.state.total!==0){
        this.crearCompra()


        // SDK de Mercado Pago
        // const mercadopago = require ('mercadopago');

        // Agrega credenciales
        // mercadopago.configure({
        //   sandbox: true,
        //   access_token: 'TEST-2010310189255433-020423-ab4183ae168fc66489c83ac9a88b909a-522644875'
        // });

        // Crea un objeto de preferencia
        // let preference = {
        //   items: [
        //     {
        //       title: 'Mi producto',
        //       unit_price: 100,
        //       quantity: 1,
        //     }
        //   ]
        // };

        // let checkout = preferencia => 
        //   mercadopago.preferences.create(preferencia)
        // .then(function(response){
        // // Este valor reemplazará el string "$$init_point$$" en tu HTML
        //   global.init_point = response.body.init_point;
        // }).catch(function(error){
        //   console.log(error);
        // });

        // checkout(preference)
      }else{
        swal({
          title: "El carrito esta vacio!",
          text: "Agregue algun producto",
          icon: "error",
        }).then((value) => {  
            this.setState({redireccionar : true})
          }
        );
      }
    }  
      
    abrirVentana = () => {
      if(this.state.total!==0){
        this.setState({mercadopago:true})
      }else{
        swal({
          title: "El carrito esta vacio!",
          text: "Agregue algun producto",
          icon: "error",
        }).then((value) => {  
            this.setState({redireccionar : true})
          }
        );
      }
    }


    render() {

        if(this.state.redireccionar){
          return (<Redirect to="/"/>)
        }

        if(this.state.mercadopago){
          let aux = localStorage.getItem('linkmercadopago')
          this.setState({linkmercadopago:aux})
          window.location.replace(this.state.linkmercadopago, ' blank');
        }

        return (
        
          <div>
            <div className="px-4 px-lg-0">
                <div className="pb-5" >
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                
                          {/* <!-- Shopping cart table --> */}
                            <div align="center">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th scope="col" className=" bg-light text-center">
                                    <div className="p-2 px-3 text-uppercase">Producto</div>
                                  </th>
                                  <th scope="col" className=" bg-light text-center">
                                    <div className="py-2 text-uppercase">Precio</div>
                                  </th>
                                  <th scope="col" className=" bg-light text-center">
                                    <div className="py-2 text-uppercase">Cantidad</div>
                                  </th>
                                  <th scope="col" className=" bg-light text-center ">
                                    <div className="py-2 text-uppercase">Eliminar</div>
                                  </th>
                                </tr>
                              </thead>

                              {this.state.infoLinea.map(linea=>(
                                <Lineas
                                  linea = {linea}
                                  eliminarLinea ={this.eliminarLinea}
                                />
                              ))}
                            </table>
                            </div>
                        </div>
                      </div>
                   </div>
                </div>            
              </div>
                    
              <div align="center">
                <div className="table " >
                
                    <ul class="list-unstyled mb-4 ">                           
                        <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                          <h5 class="font-weight-bold">${this.state.total}</h5>
                        </li>
    
                    </ul><a onClick={this.pagar}  class="btn btn-dark rounded-pill py-2 btn-block">Proceder al pago</a>
                    <a onClick={this.abrirVentana}  class="btn btn-primary rounded-pill py-2 btn-block">Abrir nuevamente el pago anterior</a>
                </div>                        
              </div>
                                  
          </div>

        )
    }
}
export default VerCarrito;