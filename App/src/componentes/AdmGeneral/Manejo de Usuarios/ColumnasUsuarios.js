import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';

const ColumnasUsuarios = ({usuario})=> (
    
    <Fragment>         
        <tr className= "font-weight-bold  text-black-50 ">
            <td className="text-lg-center">{usuario.email}</td>
            <td className="text-lg-center">{usuario.nombreuser}</td>
            <td className="text-lg-center">{usuario.rol}</td>
            <td className="text-lg-center">{usuario.nombre}</td>
            <td className="text-lg-center">{usuario.apellido}</td>
            <td className="text-lg-center">{usuario.direccion}</td>
            <td className="text-lg-center">{usuario.ciudad}</td>
            <td className="text-lg-center">{usuario.telefono}</td>
            <td></td>

            <td>
            <Link
                to={`/administrar-usuario/${usuario.email}`}
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
        </tr>                           
    </Fragment>
)

export default ColumnasUsuarios;