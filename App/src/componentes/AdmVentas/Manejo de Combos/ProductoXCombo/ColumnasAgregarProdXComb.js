import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';

const ColumnasAgregarProdXComb = ({producto,AgregarProductoXCombo})=> (
    
    <Fragment>         
        <tr className= "font-weight-bold  text-black-50 ">
            <td></td>
            <td>{producto.codigo}</td>
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td>{producto.stock}</td>
            <td>{producto.proveedor}</td>
            <td>{producto.tipo}</td>
            <td>{producto.calificacion}</td>
            <td>{producto.stockmin}</td>
            <td></td>
            <td>
                <button type="button" className="btn btn-success"
                    onClick={()=> AgregarProductoXCombo(producto.codigo)}
                    >Agregar
                </button>
            </td>

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
            <td></td>
        </tr>                           
    </Fragment>
 )

export default ColumnasAgregarProdXComb;