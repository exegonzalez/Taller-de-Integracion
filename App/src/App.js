import React, {Component} from 'react';
import './bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios'
import 'bootstrap'

//IMPORTS GENERALES
import HomeAdmGeneral from './componentes/AdmGeneral/Manejo de Usuarios/HomeAdmGeneral'
import HomeStock from './componentes/AdmStock/Manejo de Proveedores/HomeStock'
import HomeVentas from './componentes/AdmVentas/Manejo de Compras/HomeVentas'
import MiCuenta from './componentes/AdmStock/Manejo de Proveedores/MiCuenta';
import MiInfo from './componentes/AdmStock/Manejo de Proveedores/MiInfo';
import Logueo from './componentes/Generales/Logeo';
import NavbarAdmStock from './componentes/AdmStock/NavbarAdmStock'
import NavbarAdmVentas from './componentes/AdmVentas/NavbarAdmVentas'
import NavbarCliente from './componentes/Clientes/NavbarCliente'
import NavbarNoLogeado from './componentes/Clientes/NavbarNoLogeado'
import NavbarAdmGeneral from './componentes/AdmGeneral/NavbarAdmGeneral'

// IMPORTS PARA MANEJO USUARIOS
import Usuarios from './componentes/AdmGeneral/Manejo de Usuarios/Usuarios'
import AdministrarUsuarios from './componentes/AdmGeneral/Manejo de Usuarios/AdministrarUsuarios'

// IMPORTS PARA MANEJO PRODUCTOS
import Productos from './componentes/AdmStock/Manejo de Productos/Productos'
import NuevoProducto from './componentes/AdmStock/Manejo de Productos/NuevoProducto'
import EditarProducto from './componentes/AdmStock/Manejo de Productos/EditarProducto'

// IMPORTS PARA MANEJO PROVEEDORES
import Proveedores from './componentes/AdmStock/Manejo de Proveedores/Proveedores'
import NuevoProveedor from './componentes/AdmStock/Manejo de Proveedores/NuevoProveedor';
import EditarProveedor from './componentes/AdmStock/Manejo de Proveedores/EditarProveedor';

// IMPORTS PARA MANEJO VENTAS
import Ventas from './componentes/AdmVentas/Manejo de Compras/Ventas'
import AdministrarVentas from './componentes/AdmVentas/Manejo de Compras/AdministrarVentas'

//IMPORTS PARA MANEJO DE COMBOS
import Combos from './componentes/AdmVentas/Manejo de Combos/Combos'
import NuevoCombo from './componentes/AdmVentas/Manejo de Combos/NuevoCombo';
import EditarCombo from './componentes/AdmVentas/Manejo de Combos/EditarCombo';
import ProductoXCombo from './componentes/AdmVentas/Manejo de Combos/ProductoXCombo/ProductoXCombo';
import AgregarProductoXCombo from './componentes/AdmVentas/Manejo de Combos/ProductoXCombo/AgregarProductoXCombo';

// IMPORTS PARA MANEJO DE CLIENTES
import ProductosCliente from './componentes/Clientes/ProductosCliente'
import VerProducto from './componentes/Clientes/VerProducto'
import VerComentarios from './componentes/Clientes/VerComentarios'
import VerCompras from './componentes/Clientes/Historial compras/VerCompras'
import VerLineasCompra from './componentes/Clientes/Historial compras/VerLineasCompra'
import VerCombos from './componentes/Clientes/VerCombos'
import VerCarrito from './componentes/Clientes/VerCarrito'

class App extends Component{

  state ={
    proveedores : [{}],
    productos : [{}],
    ventas : [{}],
    combos : [{}],
    usuario : [{}],
    usuarios : [{}],
    comentarios : [{}],
    carrito: [{}]
  }

  listadoProveedores(){
    axios({
      "method" : "GET",
      "url": "http://localhost:5000/proveedor",
    })
    .then((Response) => {
      const listaproveedores = Response
      this.setState({proveedores: listaproveedores.data})
    })
    .catch((error)=>{
       console.log(error);
      })
  
    const proveedoresLS = localStorage.getItem('proveedores');
    if (proveedoresLS){
      this.setState({
        proveedores : JSON.parse(proveedoresLS)
      })
      
    }
  }

  listadoComentarios(){
    axios({
      "method" : "GET",
      "url": "http://localhost:5000/comentario",
    })
    .then((Response) => {
      const listacomentarios = Response
      this.setState({comentarios: listacomentarios.data})
    })
    .catch((error)=>{
       console.log(error);
      })
  
    const comentariosLS = localStorage.getItem('comentarios');
    if (comentariosLS){
      this.setState({
        comentarios : JSON.parse(comentariosLS)
      })
      
    }
  }

  listadoProductos(){
    axios({
      "method" : "GET",
      "url": "http://localhost:5000/producto",
    })
    .then((Response) => {
      const listaproductos = Response
      this.setState({productos: listaproductos.data})
    })
    .catch((error)=>{
       console.log(error);
      })
  
    const productosLS = localStorage.getItem('productos');
    if (productosLS){
      this.setState({
        productos : JSON.parse(productosLS)
      })
      
    }
  }

  listadoVentas(){
    axios({
      "method" : "GET",
      "url": "http://localhost:5000/compra",
    })
    .then((Response) => {
      const listaventas = Response
      this.setState({ventas: listaventas.data})
    })
    .catch((error)=>{
       console.log(error);
      })
  
    const ventasLS = localStorage.getItem('ventas');
    if (ventasLS){
      this.setState({
        ventas : JSON.parse(ventasLS)
      })
      
    }
  }

  listadoCombos(){
    axios({
      "method" : "GET",
      "url": "http://localhost:5000/combo",
    })
    .then((Response) => {
      const listacombos = Response
      this.setState({combos: listacombos.data})
    })
    .catch((error)=>{
       console.log(error);
      })
  
    const combosLS = localStorage.getItem('combos');
    if (combosLS){
      this.setState({
        combos : JSON.parse(combosLS)
      })
      
    }
  }

  listadoUsuarios(){
    axios({
      "method" : "GET",
      "url": "http://localhost:5000/usuario",
    })
    .then((Response) => {
      const listausuarios = Response
      this.setState({usuarios: listausuarios.data})
    })
    .catch((error)=>{
       console.log(error);
      })
  
    const usuariosLS = localStorage.getItem('usuarios');
    if (usuariosLS){
      this.setState({
        usuarios : JSON.parse(usuariosLS)
      })
      
    }
  }

  obtenerCarrito(){
    axios({
      "method" : "GET",
      "url": "http://localhost:5000/carrito",
    })
    .then((Response) => {
      const ultCarrito = Response
      const carritoActual = JSON.parse(localStorage.getItem('carrito'))
      if(carritoActual[0].carrito!==ultCarrito.data[0].carrito){
        localStorage.setItem('linkmercadopago','')
      }
      this.setState({carrito: ultCarrito.data})
      localStorage.setItem('carrito',JSON.stringify(ultCarrito.data))
    })
    .catch((error)=>{
       console.log(error);
      })
  
    const carritoLS = localStorage.getItem('carrito');
    if (carritoLS){
      this.setState({
        carrito : JSON.parse(carritoLS)
      })
      
    }
  }

  usuarioLogeado = user =>{
    this.setState({
      usuario: user
    })
  }

  crearCarrito(){
    axios({
      "method" : "POST",
      "url": "http://localhost:5000/carrito"
    }).then((response)=> {
      console.log(response);
      localStorage.setItem('carrito',JSON.stringify(response.data))
    })
   .catch((error)=> {
      console.log(error);
   });
  }

  componentDidMount(){
    this.listadoProveedores()
    this.listadoProductos()
    this.listadoVentas()
    this.listadoCombos()
    this.listadoUsuarios()
    this.listadoComentarios()
    this.obtenerCarrito()
    if(Object.keys(this.state.usuario[0]).length === 0){
      let aux = localStorage.getItem('usuario')
      this.setState({
        usuario : JSON.parse(aux)
      })
    }
    // if(this.state.carrito[0].activo===false){
    //   this.crearCarrito()
    // }
    console.log("nuevo app")
  }

  componentDidUpdate(){
    localStorage.setItem('proveedores', JSON.stringify(this.state.proveedores))
    localStorage.setItem('productos', JSON.stringify(this.state.productos))
    localStorage.setItem('ventas', JSON.stringify(this.state.ventas))
    localStorage.setItem('combos', JSON.stringify(this.state.combos))
    localStorage.setItem('usuario', JSON.stringify(this.state.usuario))
    localStorage.setItem('usuarios', JSON.stringify(this.state.usuarios))
    localStorage.setItem('comentarios', JSON.stringify(this.state.comentarios))
  }

  render(){
    if(this.state.usuario === null){
      return(
        <Router>
          <NavbarNoLogeado/>
          <Switch>  
            
            <Route exact path="/login" render={() => (
              <Logueo
                usuarioLogeado={this.usuarioLogeado}
              />)}/>

            <Route exact path="/" render={() => (
              <ProductosCliente
                usuario={this.state.usuario}
                carrito={this.state.carrito}
              />
            )}/>

          </Switch> 
        </Router> 
      )
    }else{

      switch(this.state.usuario[0].rol){
      case 1:{
        return(
          <Router>
            <NavbarAdmGeneral/>
            <Switch>  
              
            <Route exact path="/login" render={() => (
                <Logueo
                  usuarioLogeado={this.usuarioLogeado}
                />)}/>

            <Route exact path="/cuenta" render={() => (
                <MiCuenta
                  user={this.state.usuario}  
                />)}/> 

            <Route exact path="/info" render={() => (
                <MiInfo 
                  user={this.state.usuario}
                />)}/>

            <Route exact path="/" render={() => (
              <HomeAdmGeneral/>)}/>

            <Route exact path="/usuario" render={() => (
                <Usuarios/>)}/> 

            <Route exact path="/administrar-usuario/:id" 
                  render={props => {
                    const emailUsuario = props.match.params.id;
                    const usuarioBuscado = this.state.usuarios.filter(usuario => usuario.email === emailUsuario);
                    return (
                      <AdministrarUsuarios
                        usuario = {usuarioBuscado}
                      />
                    )
                  }} />

            <Route exact path="/venta" render={() => (
                <Ventas/>)}/> 
            
            <Route exact path="/administrar-venta/:id" 
                  render={props => {
                    const codigoVenta = parseInt(props.match.params.id);
                    const ventaBuscada = this.state.ventas.filter(venta => venta.codigo === codigoVenta);
                    return (
                      <AdministrarVentas
                        venta = {ventaBuscada}
                      />
                    )
                  }} /> 

            <Route exact path="/combo" render={() => (
                <Combos/>)}/>

            <Route exact path="/editar-combo/:id" 
                  render={props => {
                    const codigoCombo = parseInt(props.match.params.id);
                    return (
                      <EditarCombo
                        codigoCombo = {codigoCombo}
                      />
                    )
                  }} /> 

            <Route exact path="/nuevo-combo" render={() => (
                <NuevoCombo/>)}/>

            <Route exact path="/productos-combo/:id" 
              render={props => {
                  const codigoCombo = parseInt(props.match.params.id);
                  return (
                    <ProductoXCombo
                      codigoCombo = {codigoCombo}
                    />
                  )
                }} /> 

            <Route exact path="/agregar-productos-combo/:id" 
              render={props => {
                  const codigoCombo = parseInt(props.match.params.id);
                  return (
                    <AgregarProductoXCombo
                      codigoCombo = {codigoCombo}
                    />
                  )
                }} />

            <Route exact path="/proveedor" render={() => (
                <Proveedores/>)}/>

            <Route exact path="/nuevo-proveedor" render={() => (
                <NuevoProveedor/>)}/>

            <Route exact path="/editar-proveedor/:id" 
                  render={props => {
                    const cuitProveedor = props.match.params.id;
                    return (
                      <EditarProveedor
                      cuitProveedor = {cuitProveedor}
                      />
                    )
                  }} />

            <Route exact path="/producto" render={() => (
                <Productos/>)}/>  
          
            <Route exact path="/nuevo-producto" render={() => (
                <NuevoProducto/>)}/>

            <Route exact path="/editar-producto/:id" 
                render={props => {
                  const codigoProducto = parseInt(props.match.params.id);
                  return (
                    <EditarProducto
                    codigoProducto = {codigoProducto}
                    />
                  )
                }} />

            </Switch> 
          </Router> 
        )
      }
      
      case 2:{
        return(
          <Router>
            <NavbarAdmVentas/>
            <Switch>  
              
            <Route exact path="/login" render={() => (
                <Logueo
                  usuarioLogeado={this.usuarioLogeado}
                />)}/>

            <Route exact path="/cuenta" render={() => (
                <MiCuenta
                  user={this.state.usuario}  
                />)}/> 

            <Route exact path="/info" render={() => (
                <MiInfo 
                  user={this.state.usuario}
                />)}/>

            <Route exact path="/" render={() => (
              <HomeVentas/>)}/>

            <Route exact path="/venta" render={() => (
                <Ventas/>)}/> 
            
            <Route exact path="/administrar-venta/:id" 
                  render={props => {
                    const codigoVenta = parseInt(props.match.params.id);
                    const ventaBuscada = this.state.ventas.filter(venta => venta.codigo === codigoVenta);
                    return (
                      <AdministrarVentas
                        venta = {ventaBuscada}
                      />
                    )
                  }} /> 

            <Route exact path="/combo" render={() => (
                <Combos/>)}/>

            <Route exact path="/editar-combo/:id" 
                  render={props => {
                    const codigoCombo = parseInt(props.match.params.id);
                    return (
                      <EditarCombo
                        codigoCombo = {codigoCombo}
                      />
                    )
                  }} /> 

            <Route exact path="/nuevo-combo" render={() => (
                <NuevoCombo/>)}/>

            <Route exact path="/productos-combo/:id" 
              render={props => {
                  const codigoCombo = parseInt(props.match.params.id);
                  return (
                    <ProductoXCombo
                      codigoCombo = {codigoCombo}
                    />
                  )
                }} /> 

            <Route exact path="/agregar-productos-combo/:id" 
              render={props => {
                  const codigoCombo = parseInt(props.match.params.id);
                  return (
                    <AgregarProductoXCombo
                      codigoCombo = {codigoCombo}
                    />
                  )
                }} />

            </Switch> 
          </Router> 
        )
      }
      
      case 3:{
        return(
          <Router>
            <NavbarAdmStock/>
            <Switch>  
              
            <Route exact path="/login" render={() => (
                <Logueo
                    usuarioLogeado={this.usuarioLogeado}
                  />)}/>

            <Route exact path="/cuenta" render={() => (
                <MiCuenta
                  user={this.state.usuario}  
                />)}/> 

            <Route exact path="/info" render={() => (
                <MiInfo 
                  user={this.state.usuario}
                />)}/>

            <Route exact path="/" render={() => (
                <HomeStock/>)}/>

            <Route exact path="/proveedor" render={() => (
                <Proveedores/>)}/>

            <Route exact path="/nuevo-proveedor" render={() => (
                <NuevoProveedor/>)}/>

            <Route exact path="/editar-proveedor/:id" 
                  render={props => {
                    const cuitProveedor = props.match.params.id;
                    return (
                      <EditarProveedor
                      cuitProveedor = {cuitProveedor}
                      />
                    )
                  }} />

            <Route exact path="/producto" render={() => (
                <Productos/>)}/>  
          
            <Route exact path="/nuevo-producto" render={() => (
                <NuevoProducto/>)}/>

            <Route exact path="/editar-producto/:id" 
                render={props => {
                  const codigoProducto = parseInt(props.match.params.id);
                  return (
                    <EditarProducto
                    codigoProducto = {codigoProducto}
                    />
                  )
                }} />

            </Switch> 
          </Router> 
        )
      }

      case 4:{
        return(
          <Router>
            <NavbarCliente/>
            <Switch>  
              
            <Route exact path="/login" render={() => (
                <Logueo
                  usuarioLogeado={this.usuarioLogeado}
                />)}/>

              <Route exact path="/cuenta" render={() => (
                <MiCuenta
                  user={this.state.usuario}  
                />)}/> 

              <Route exact path="/info" render={() => (
                <MiInfo 
                  user={this.state.usuario}
                />)}/>

              <Route exact path="/" render={() => (
                <ProductosCliente
                  usuario={this.state.usuario}
                  carrito={this.state.carrito}
                />)}/>

              <Route exact path="/ver-producto/:codigo" 
                  render={props => {
                    const codigoProducto = parseInt(props.match.params.codigo);
                    return (
                      <VerProducto
                        producto = {codigoProducto}
                        carrito ={this.state.carrito}
                        usuario={this.state.usuario}
                      />
                    )
                  }} />

                <Route exact path="/ver-combo/:codigo" 
                  render={props => {
                    const codigoCombo = parseInt(props.match.params.codigo);
                    return (
                      <VerCombos
                        combo = {codigoCombo}
                        carrito ={this.state.carrito}
                      />
                    )
                  }} />

              <Route exact path="/ver-comentarios/:codigo" 
                  render={props => {
                    const codigoProducto = parseInt(props.match.params.codigo);
                    const comentariosBuscados = this.state.comentarios.filter(comentario => comentario.producto === codigoProducto);
                    return (
                      <VerComentarios
                        comentarios = {comentariosBuscados}
                        usuario = {this.state.usuario}
                        producto = {codigoProducto}
                        
                      />
                    )
                  }} />

              <Route exact path="/ver-carrito" render={() => (
                <VerCarrito                 
                  carrito ={this.state.carrito}
                  usuario ={this.state.usuario}
                />)}/>

              <Route exact path="/compra" render={() => (
                <VerCompras
                  usuario={this.state.usuario}
                />)}/>

              <Route exact path="/ver-lineas-compra/:codigo" 
                  render={props => {
                    const codigoCompra = parseInt(props.match.params.codigo);
                    return (
                      <VerLineasCompra
                        compra={codigoCompra}
                      />
                    )
                  }} />

            </Switch> 
          </Router> 
        )
      }

      default:{
        return(
          <Router>
            <NavbarNoLogeado/>
            <Switch>  
              
              <Route exact path="/login" render={() => (
                <Logueo
                  usuarioLogeado={this.usuarioLogeado}
                />)}/>

              <Route exact path="/" render={() => (
                <ProductosCliente
                  usuario={this.state.usuario}
                  carrito={this.state.carrito}
                />
              )}/>

              {/* Todo lo que estaba abajo es de prueba, despues se quita y se pasa a case 4 */}

              <Route exact path="/ver-producto/:codigo" 
                  render={props => {
                    const codigoProducto = parseInt(props.match.params.codigo);
                    return (
                      <VerProducto
                        producto = {codigoProducto}
                        carrito ={this.state.carrito}
                        usuario = {this.state.usuario}

                      />
                    )
                  }} />

                <Route exact path="/ver-combo/:codigo" 
                  render={props => {
                    const codigoCombo = parseInt(props.match.params.codigo);
                    return (
                      <VerCombos
                        combo = {codigoCombo}
                        carrito ={this.state.carrito}
                      />
                    )
                  }} />

              <Route exact path="/ver-comentarios/:codigo" 
                  render={props => {
                    const codigoProducto = parseInt(props.match.params.codigo);
                    const comentariosBuscados = this.state.comentarios.filter(comentario => comentario.producto === codigoProducto);
                    return (
                      <VerComentarios
                        comentarios = {comentariosBuscados}
                        usuario = {this.state.usuario}
                        producto = {codigoProducto}
                        
                      />
                    )
                  }} />

              <Route exact path="/ver-carrito" render={() => (
                <VerCarrito                 
                  carrito ={this.state.carrito}
                  usuario ={this.state.usuario}
                />)}/>

              <Route exact path="/compra" render={() => (
                <VerCompras
                  usuario={this.state.usuario}
                />)}/>

              <Route exact path="/ver-lineas-compra/:codigo" 
                  render={props => {
                    const codigoCompra = parseInt(props.match.params.codigo);
                    return (
                      <VerLineasCompra
                        compra={codigoCompra}
                      />
                    )
                  }} />

            </Switch> 
          </Router> 
        )
      }   }
    }
  }

}
export default App;

