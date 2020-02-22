import React from 'react'
import productito from '../../images/productito.png'

function Lineas ({linea, eliminarLinea}) {
return (
      <tbody className="border-bottom">
        <tr>
          <th scope="row" className="border-0">
            <div className="p-2 text-center " >
              <img src={productito} alt="" width="70" class="img-fluid rounded shadow-sm"/>
              <div className="ml-3 d-inline-block align-middle">{linea.nombre}
                
              </div>
            </div>
          </th>
          <td className="border-0 align-middle"><strong>$ {linea.totalproducto}</strong></td>
          <td className="border-0 align-middle "><strong>{linea.cantidadproducto}</strong></td>
          <td className="border-0 align-middle"><button type="button" class="btn btn-danger"
            onClick={()=> eliminarLinea(linea.codigo)}>Eliminar<i className="fa fa-trash"></i></button>
          </td>
        </tr>
    
      </tbody>                
  )
}

export default Lineas;