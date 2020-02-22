import React from 'react'
import '../../AdmVentas/Manejo de Compras/vistaVentas.css'

import ColumnasLineaComp from './ColumnasLineaComp'

const ListaLineasCompra = ({lineas}) =>(
    
    <div align="center">            
        <br></br>
          <div className="ventas text-black-50">
            <table className="table table-striped table-hover table-condensed">
                <thead className="thead-dark">
                    <tr> 
                    <th scope="col" className="text text-center"></th>
                    <th scope="col" className="text text-center"></th>
                    <th scope="col" className="text text-center"></th>
                    <th scope="col"className="text text-center">Codigo</th>
                    <th scope="col"className="text text-center">Nombre</th> 
                    <th scope="col"className="text text-center">Descripcion</th> 
                    <th scope="col" className="text text-center">Prec.Unitario</th> 
                    <th scope="col" className="text text-center">Cantidad</th> 
                    <th scope="col" className="text text-center">Prec.Total</th>
                    <th scope="col" className="text text-center"></th>
                    <th scope="col" className="text text-center"></th>
                    <th scope="col" className="text text-center"></th>
                    <th scope="col" className="text text-center"></th>
                    </tr>
                </thead>
                <tbody>      
                    {/* <div className="listaProv"> */}
                    {lineas.map(linea=>(
                        <ColumnasLineaComp
                            key={linea.codigo}
                            linea={linea}
                        />
                    ))}
                     {/* </div> */}
                 </tbody>
            </table>
        </div>
    </div>
  )
  export default ListaLineasCompra;