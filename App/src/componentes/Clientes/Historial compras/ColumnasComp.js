import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';

const ColumnasComp = ({compra})=> (
    
    <Fragment>         
        <tr className= "font-weight-bold  text-black-50 ">
            <td></td>
            <td></td>
            <td>{compra.codigo}</td>
            <td>{compra.total}</td>
            <td>{compra.fecha}</td>
            <td>{compra.hora}</td>
            <td>{compra.usuario}</td>
            <td>{compra.estado}</td>
            <td></td>
            <td>
            <Link
                to={`/ver-lineas-compra/${compra.carrito}`}
                className="btn btn-info mr-2"
                >Productos
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
        </tr>                           
    </Fragment>
)

export default ColumnasComp;