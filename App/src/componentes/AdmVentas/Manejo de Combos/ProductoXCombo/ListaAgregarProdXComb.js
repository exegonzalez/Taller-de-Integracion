import React from 'react'
import '../vistaCombos.css'
import ColumnasAgregarProdXComb from './ColumnasAgregarProdXComb';
import '../Combos.css';

const ListaAgregarProdXCombo = ({productos, AgregarProductoXCombo}) =>(
    
  <div align="center">            
      <br></br>
        <div className="productos">
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
                <th scope="col" className="text text-center"></th> 
            </tr>
          </thead>
      <tbody>      
      {/* <div className="listaProv"> */}
        {productos.map(producto=>(
          <ColumnasAgregarProdXComb
          key={producto.codigo}
          producto={producto}
          AgregarProductoXCombo={AgregarProductoXCombo}
          />
        ))}

      {/* </div> */}
      </tbody>
      </table>

      </div>
  </div>
)
export default ListaAgregarProdXCombo;