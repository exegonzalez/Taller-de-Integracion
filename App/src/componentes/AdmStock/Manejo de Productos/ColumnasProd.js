import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';

const ColumnasProd = ({producto,eliminarProducto})=> (
    
    <Fragment>         
        <tr className= "font-weight-bold  text-black-50 ">
            <td className="text-lg-center">{producto.codigo}</td>
            <td className="text-lg-center">{producto.nombre}</td>
            <td className="text-lg-center">{producto.precio} $</td>
            <td className="text-lg-center">{producto.stock}</td>
            <td className="text-lg-center">{producto.proveedor}</td>
            <td className="text-lg-center">{producto.tipo}</td>
            <td className="text-lg-center">{producto.calificacion}</td>
            <td className="text-lg-center">{producto.stockmin}</td>
            <td></td>
            <td>
                <button type="button" className="btn btn-outline-danger"
                    onClick={()=> eliminarProducto(producto.codigo)}
                    >Eliminar 
                </button>
            </td>

            <td>
                <Link
                to={`/editar-producto/${producto.codigo}`}
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

export default ColumnasProd;