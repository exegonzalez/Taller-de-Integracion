import React, {Fragment} from 'react'

const ColumnasLineaComp= ({linea})=> (
    
    <Fragment>         
        <tr className= "font-weight-bold  text-black-50 ">
            <td></td>
            <td></td>
            <td></td>
            <td className="text-lg-center">{linea.codigo}</td>
            <td className="text-lg-center">{linea.nombre}</td>
            <td className="text-lg-center">{linea.descripcion}</td>
            <td className="text-lg-center">{linea.preciounidad}</td>
            <td className="text-lg-center">{linea.cantidadproducto}</td>
            <td className="text-lg-center">{linea.totalproducto}</td>
            <td></td>
            <td></td>
            <td></td>
            <td>
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

export default ColumnasLineaComp;