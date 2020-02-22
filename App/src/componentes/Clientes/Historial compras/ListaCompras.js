import React from 'react'
import '../../AdmVentas/Manejo de Compras/vistaVentas.css'

import ColumnasComp from './ColumnasComp'

const ListaCompras = ({compras}) =>(
    
    <div align="center">            
        <br></br>
          <div className="ventas font-weight-bold  text-black-50" >
            <table className="table table-striped table-hover table-condensed">
                <thead className="thead-dark">
                    <tr> 
                    <th scope="col" className="text text-center"></th>
                    <th scope="col" className="text text-center"></th>  
                    <th scope="col"className="text text-center">Codigo</th>
                    <th scope="col"className="text text-center">Total</th> 
                    <th scope="col"className="text text-center">Fecha</th> 
                    <th scope="col" className="text text-center">Hora</th> 
                    <th scope="col" className="text text-center">Usuario</th>   
                    <th scope="col" className="text text-center">Estado</th> 
                    <th scope="col" className="text text-center"></th>  
                    <th scope="col" className="text text-center"></th>  
                    </tr>
                </thead>
                <tbody>      
                    {/* <div className="listaProv"> */}
                    {compras.map(compra=>(
                        <ColumnasComp
                            key={compra.codigo}
                            compra={compra}
                        />
                    ))}
                     {/* </div> */}
                 </tbody>
            </table>
        </div>
    </div>
  )
  export default ListaCompras;