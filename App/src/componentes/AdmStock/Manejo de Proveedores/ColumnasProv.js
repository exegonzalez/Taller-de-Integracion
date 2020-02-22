import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';

 
 const ColumnasProv = ({proveedor,eliminarProveedor})=> (
  
    <Fragment>   
        <tr className="font-weight-bold  text-black-50">
            <td className="text-lg-center">{proveedor.nombre}</td>
            <td className="text-lg-center">{proveedor.telefono}</td>
            <td className="text-lg-center">{proveedor.direccion}</td>
            <td className="text-lg-center">{proveedor.ciudad}</td>
            <td className="text-lg-center">{proveedor.email}</td>
            <td className="text-lg-center">{proveedor.cuit}</td>
            <td className="text-lg-center"></td>
            <td className="text-lg-center"></td>
            <td className="text-lg-center">
              <button type="button" className="btn btn-outline-danger"
                onClick={()=> eliminarProveedor(proveedor.cuit)}
                >Eliminar 
              </button>
            </td>

            <td>
            <Link
              to={`/editar-proveedor/${proveedor.cuit}`}
              className="btn btn-success mr-2"
              >Editar
              
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

export default ColumnasProv;