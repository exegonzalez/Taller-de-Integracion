import React from 'react'
import './vistaProveedores.css'
import ColumnasProv from './ColumnasProv';


const ListaProveedores = ({proveedores, eliminarProveedor,}) =>(
  <div>  
    <br></br>
        <div className="provedoritos" align="center">
          <table className="table table-striped table-hover table-condensed ">
            <thead className="thead-dark">
              <tr> 
                <th scope="col"className="text text-center ">Nombre</th>
                <th scope="col"className="text text-center">Telefono</th> 
                <th scope="col"className="text text-center">Direccion</th> 
                <th scope="col" className="text text-center">Ciudad</th> 
                <th scope="col" className="text text-center">Email</th> 
                <th scope="col" className="text text-center">Cuit</th>
                <th scope="col" className="text text-center"></th> 
                <th scope="col" className="text text-center"></th>  
                <th scope="col" className="text text-center"></th>  
                <th scope="col" className="text text-center"></th>  
                <th scope="col" className="text text-center"></th>  
            </tr>
          </thead>
      <tbody>      
      {/* <div className="listaProv"> */}
        {proveedores.map(proveedor=>(
          <ColumnasProv
          key={proveedor.cuit}
          proveedor={proveedor}
          eliminarProveedor={eliminarProveedor}  
          />
        ))}

      {/* </div> */}
      </tbody>
      </table>

      </div>
  </div>
)
export default ListaProveedores;