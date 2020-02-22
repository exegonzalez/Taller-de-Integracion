import React from 'react'
import '../../AdmVentas/Manejo de Compras/vistaVentas.css'
import ColumnasUsuarios from './ColumnasUsuarios'


const ListaUsuarios = ({usuarios}) =>(
    
    <div align="center">            
        <br></br>
          <div className="ventas text-black-50">
            <table className="table table-striped table-hover table-condensed">
                <thead className="thead-dark">
                    <tr> 
                    <th scope="col"className="text text-center">Email</th>
                    <th scope="col"className="text text-center">Usuario</th> 
                    <th scope="col"className="text text-center">Rol</th> 
                    <th scope="col" className="text text-center">Nombre</th> 
                    <th scope="col" className="text text-center">Apellido</th> 
                    <th scope="col" className="text text-center">Direccion</th>  
                    <th scope="col" className="text text-center">Ciudad</th> 
                    <th scope="col" className="text text-center">Telefono</th>  
                    <th scope="col" className="text text-center"></th>  
                    <th scope="col" className="text text-center"></th>  
                    </tr>
                </thead>
                <tbody>      
                    {/* <div className="listaProv"> */}
                    {usuarios.map(usuario=>(
                        <ColumnasUsuarios
                            key={usuario.email}
                            usuario={usuario}
                        />
                    ))}
                     {/* </div> */}
                 </tbody>
            </table>
        </div>
    </div>
  )
  export default ListaUsuarios;