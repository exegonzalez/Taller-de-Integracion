import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';

const ColumnasProdXComb = ({productoXCombo,eliminarProductoXCombo})=> (
    
    <Fragment>         
        <tr className= "font-weight-bold  text-black-50 ">
            <td></td>
            <td></td>
            <td>{productoXCombo.codigo}</td>
            <td>{productoXCombo.nombre}</td>
            <td>{productoXCombo.precio}</td>
            <td>{productoXCombo.stock}</td>
            <td>{productoXCombo.proveedor}</td>
            <td>{productoXCombo.tipo}</td>
            <td>{productoXCombo.calificacion}</td>
            <td>{productoXCombo.stockmin}</td>
            <td></td>
            <td>
                <button type="button" className="btn btn-outline-danger"
                    onClick={()=> eliminarProductoXCombo(productoXCombo.codigo)}
                    >Eliminar 
                </button>
            </td>

            <td>
                {/* <Link
                to={`/editar-producto/${producto.codigo}`}
                className="btn btn-success mr-2"
                >Editar
                
                </Link> */}
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

export default ColumnasProdXComb;