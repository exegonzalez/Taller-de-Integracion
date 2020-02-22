import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';

const ColumnasVent = ({venta,eliminarCompra})=> (
    
    <Fragment>         
        <tr className= "font-weight-bold  text-black-50 ">
            <td className="text-lg-center">{venta.codigo}</td>
            <td className="text-lg-center">{venta.total}</td>
            <td className="text-lg-center">{venta.fecha}</td>
            <td className="text-lg-center">{venta.hora}</td>
            <td className="text-lg-center">{venta.usuario}</td>
            <td className="text-lg-center">{venta.estado}</td>
            <td className="text-lg-center"></td>
            <td className="text-lg-center"></td>
            <td></td>
            <td>
              <button type="button" className="btn btn-outline-danger"
                onClick={()=> eliminarCompra(venta.carrito)}
                >Eliminar 
              </button>
            </td>

            <td>
            <Link
                to={`/administrar-venta/${venta.codigo}`}
                className="btn btn-success mr-2"
                >Administrar
                
                </Link>
              <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      ...
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td></td>
        </tr>                           
    </Fragment>
)

export default ColumnasVent;