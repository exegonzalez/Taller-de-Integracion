import React from 'react'
import './vistaProductos.css'
import ColumnasProd from './ColumnasProd';



const ListaProductos = ({productos, eliminarProducto}) =>(
    
  <div>            
      <br></br>
        <div className="productos font-weight-bold  text-black-50" align="center">
          <table className="table table-striped table-hover table-condensed">
            <thead className="thead-dark">
              <tr> 
                <th scope="col"className="text text-center">Codigo</th>
                <th scope="col" className="text text-center">Nombre</th>
                <th scope="col"className="text text-center">Precio</th> 
                <th scope="col"className="text text-center">Stock</th> 
                <th scope="col" className="text text-center">Proveedor</th> 
                <th scope="col" className="text text-center">Tipo</th> 
                <th scope="col" className="text text-center">Calificacion</th> 
                <th scope="col" className="text text-center">StockMin</th> 
                <th scope="col" className="text text-center"></th> 
                <th scope="col" className="text text-center"></th> 
                <th scope="col" className="text text-center"></th> 
                <th scope="col" className="text text-center"></th> 
            </tr>
          </thead>
      <tbody>      
      {/* <div className="listaProv"> */}
        {productos.map(producto=>(
          <ColumnasProd
          key={producto.codigo}
          producto={producto}
          eliminarProducto={eliminarProducto}
          />
        ))}

      {/* </div> */}
      </tbody>
      </table>

      </div>
  </div>
)
export default ListaProductos;