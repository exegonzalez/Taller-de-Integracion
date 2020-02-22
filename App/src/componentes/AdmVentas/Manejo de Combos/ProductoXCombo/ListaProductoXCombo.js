import React from 'react'
import '../vistaCombos.css'
import ColumnasProdXComb from './ColumnasProdXComb';
import '../Combos.css';

const ListaProductoXCombo = ({productosXCombo, eliminarProductoXCombo}) =>(
    
  <div align="center">            
      <br></br>
        <div className="productos text-black-50">
          <table className="table table-striped table-hover table-condensed">
            <thead className="thead-dark">
              <tr> 
                <th scope="col" className="text text-center"></th> 
                <th scope="col" className="text text-center"></th> 
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
            </tr>
          </thead>
      <tbody>      
      {/* <div className="listaProv"> */}
        {productosXCombo.map(producto=>(
          <ColumnasProdXComb
          key={producto.codigo}
          productoXCombo={producto}
          eliminarProductoXCombo={eliminarProductoXCombo}
          />
        ))}

      {/* </div> */}
      </tbody>
      </table>

      </div>
  </div>
)
export default ListaProductoXCombo;